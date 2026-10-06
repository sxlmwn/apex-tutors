import type { StudentRequestInput, TutorApplicationInput } from "./validation";

/**
 * Sends a short WhatsApp notification using the configured provider.
 * Providers:
 *   - "callmebot": simple GET endpoint to own registered phone
 *   - "meta": WhatsApp Cloud API v21.0
 * If WHATSAPP_PROVIDER is unset or empty, skips silently.
 */
export async function sendWhatsAppNotification(messageText: string): Promise<void> {
  const provider = (process.env.WHATSAPP_PROVIDER || "").trim().toLowerCase();

  if (!provider) {
    // Silently skip if unset
    return;
  }

  const notifyNumber = process.env.WHATSAPP_NOTIFY_NUMBER;
  if (!notifyNumber) {
    console.warn("WhatsApp notification skipped: WHATSAPP_NOTIFY_NUMBER is not set.");
    return;
  }

  if (provider === "callmebot") {
    const apiKey = process.env.CALLMEBOT_API_KEY;
    if (!apiKey) {
      console.warn("CallMeBot notification skipped: CALLMEBOT_API_KEY is not set.");
      return;
    }

    // CallMeBot phone format usually expects digits only or standard international
    const cleanPhone = notifyNumber.replace(/[^\d+]/g, "");
    const url = new URL("https://api.callmebot.com/whatsapp.php");
    url.searchParams.set("phone", cleanPhone);
    url.searchParams.set("text", messageText);
    url.searchParams.set("apikey", apiKey);

    const res = await fetch(url.toString(), {
      method: "GET",
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      throw new Error(`CallMeBot request failed (status ${res.status}): ${errBody}`);
    }
    return;
  }

  if (provider === "meta") {
    const token = process.env.META_WA_TOKEN;
    const phoneNumberId = process.env.META_WA_PHONE_NUMBER_ID;

    if (!token || !phoneNumberId) {
      console.warn(
        "Meta WhatsApp notification skipped: META_WA_TOKEN or META_WA_PHONE_NUMBER_ID is not set."
      );
      return;
    }

    const cleanToNumber = notifyNumber.replace(/[^\d]/g, "");
    const url = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: cleanToNumber,
        type: "text",
        text: {
          preview_url: false,
          body: messageText,
        },
      }),
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      throw new Error(`Meta WhatsApp API failed (status ${res.status}): ${errBody}`);
    }
    return;
  }

  console.warn(`Unknown WHATSAPP_PROVIDER: "${provider}". Expected "callmebot" or "meta".`);
}

/**
 * Formats a short WhatsApp message for a student lead.
 */
export function formatStudentWhatsAppMessage(data: StudentRequestInput): string {
  return [
    `🎓 *New Student Request (Apex Tutors)*`,
    `• Name: ${data.name}`,
    `• Phone: ${data.phone}`,
    `• City: ${data.city}`,
    `• Grade: ${data.grade}`,
    `• Mode: ${data.mode || "N/A"}`,
    `• Source: ${data.source}`,
  ].join("\n");
}

/**
 * Formats a short WhatsApp message for a tutor application.
 */
export function formatTutorWhatsAppMessage(data: TutorApplicationInput): string {
  return [
    `👨‍🏫 *New Tutor Application (Apex Tutors)*`,
    `• Name: ${data.name}`,
    `• Phone: ${data.phone}`,
    `• City: ${data.city}`,
    `• Uni: ${data.university} (${data.program})`,
    `• Mode: ${data.mode}`,
    `• Subjects: ${data.subjects.slice(0, 3).join(", ")}${data.subjects.length > 3 ? "..." : ""}`,
  ].join("\n");
}
