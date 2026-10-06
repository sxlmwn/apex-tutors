import { tutorApplicationSchema } from "@/lib/leads/validation";
import { checkRateLimit, getClientIp } from "@/lib/leads/rate-limit";
import { insertTutorApplication } from "@/lib/leads/db";
import { notifyTutorApplication } from "@/lib/leads/notifications";

export async function POST(request: Request) {
  try {
    const rawBody = await request.json().catch(() => null);

    if (!rawBody || typeof rawBody !== "object") {
      return Response.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    // 1. Honeypot spam trap: if filled, return 200 silently and store nothing
    if (rawBody.hp && typeof rawBody.hp === "string" && rawBody.hp.trim().length > 0) {
      return Response.json(
        { success: true, message: "Application received" },
        { status: 200 }
      );
    }

    // 2. Per-IP rate limiting
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return Response.json(
        { error: "Too many requests. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 3. Server-side validation with Zod
    const result = tutorApplicationSchema.safeParse(rawBody);
    if (!result.success) {
      return Response.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = result.data;

    // 4. Save to Supabase (if database fails, return 500; no notifications run)
    let leadRecord;
    try {
      leadRecord = await insertTutorApplication(validatedData);
    } catch (dbError) {
      console.error("Failed to insert tutor application into Supabase:", dbError);
      return Response.json(
        { error: "Unable to process application at this time. Please try again later." },
        { status: 500 }
      );
    }

    // 5. Notifications via Promise.allSettled (safe, will not fail lead)
    await notifyTutorApplication(validatedData);

    return Response.json(
      { success: true, id: leadRecord.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unhandled error in /api/tutor-application:", error);
    return Response.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
