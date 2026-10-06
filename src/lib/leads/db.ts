import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { StudentRequestInput, TutorApplicationInput } from "./validation";

let supabaseAdminClient: SupabaseClient | null = null;

/**
 * Returns a server-side Supabase client using the service role key.
 * Never exposed to the client.
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (supabaseAdminClient) {
    return supabaseAdminClient;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase configuration: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in server environment."
    );
  }

  supabaseAdminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseAdminClient;
}

export interface StudentRequestRecord {
  id: string;
  created_at: string;
}

export async function insertStudentRequest(
  data: StudentRequestInput
): Promise<StudentRequestRecord> {
  const supabase = getSupabaseAdmin();

  const { data: record, error } = await supabase
    .from("student_requests")
    .insert({
      name: data.name,
      phone: data.phone,
      city: data.city,
      area: data.area || null,
      grade: data.grade,
      board: data.board || null,
      mode: data.mode || null,
      notes: data.notes || null,
      source: data.source,
      status: "new",
    })
    .select("id, created_at")
    .single();

  if (error) {
    console.error("Supabase insert student_requests failed:", error);
    throw new Error(`Database error saving student request: ${error.message}`);
  }

  return record as StudentRequestRecord;
}

export interface TutorApplicationRecord {
  id: string;
  created_at: string;
}

export async function insertTutorApplication(
  data: TutorApplicationInput
): Promise<TutorApplicationRecord> {
  const supabase = getSupabaseAdmin();

  const { data: record, error } = await supabase
    .from("tutor_applications")
    .insert({
      name: data.name,
      phone: data.phone,
      university: data.university,
      program: data.program,
      fsc_marks: data.fscMarks,
      city: data.city,
      mode: data.mode,
      subjects: data.subjects,
      status: "new",
    })
    .select("id, created_at")
    .single();

  if (error) {
    console.error("Supabase insert tutor_applications failed:", error);
    throw new Error(`Database error saving tutor application: ${error.message}`);
  }

  return record as TutorApplicationRecord;
}
