import { z } from "zod";

/**
 * Normalises Pakistani mobile phone numbers to +923XXXXXXXXX format.
 * Accepts:
 *   - 03XX XXXXXXX
 *   - +92 3XX XXXXXXX
 *   - 92 3XX XXXXXXX
 *   - 0092 3XX XXXXXXX
 * Strips whitespace, hyphens, dots, and parens.
 */
export function normalizePakistaniPhone(raw: string): string | null {
  if (!raw || typeof raw !== "string") return null;

  const cleaned = raw.replace(/[\s\-\(\)\.]/g, "");

  // +923XXXXXXXXX (13 chars)
  if (/^\+923\d{9}$/.test(cleaned)) {
    return cleaned;
  }

  // 923XXXXXXXXX (12 chars)
  if (/^923\d{9}$/.test(cleaned)) {
    return `+${cleaned}`;
  }

  // 00923XXXXXXXXX (14 chars)
  if (/^00923\d{9}$/.test(cleaned)) {
    return `+${cleaned.slice(2)}`;
  }

  // 03XXXXXXXXX (11 chars)
  if (/^03\d{9}$/.test(cleaned)) {
    return `+92${cleaned.slice(1)}`;
  }

  // 3XXXXXXXXX (10 chars)
  if (/^3\d{9}$/.test(cleaned)) {
    return `+92${cleaned}`;
  }

  return null;
}

export const ALLOWED_CITIES = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Multan",
  "Faisalabad",
  "Bahawalpur",
  "Other",
] as const;

export const ALLOWED_GRADES = [
  // Modal options
  "Primary (Grades 1-8)",
  "Matric (9th / 10th)",
  "FSc Pre-Engineering",
  "FSc Pre-Medical",
  "ICS (Computer Science)",
  "O Level",
  "A Level",
  // Signup page options
  "Primary",
  "Matric Science 10th",
  "Matric Science 9th",
  "Matric Arts/General",
  "ICS",
] as const;

export const ALLOWED_BOARDS = [
  "Cambridge (CAIE / Edexcel)",
  "Primary School Curriculum",
  "Federal Board (FBISE)",
  "Punjab Board (BISE Lahore)",
  "BISE Rawalpindi",
  "BISE Multan",
  "BISE Faisalabad",
  "BISE Bahawalpur",
  "Sindh Board (BSEK/BIEK)",
  "AKU-EB",
] as const;

export const ALLOWED_STUDENT_MODES = [
  "Online (1-on-1 Interactive)",
  "In-Person Physical (Home Visit)",
] as const;

export const ALLOWED_TUTOR_MODES = [
  "Both Online & Physical",
  "Online Only",
  "Physical Only",
] as const;

export const ALLOWED_TUTOR_SUBJECTS = [
  "O / A Level (Cambridge Sciences & Math)",
  "Physics (Matric / FSc)",
  "Chemistry (Organic & Inorganic)",
  "Biology (Zoology / Botany)",
  "Mathematics (Calculus / Algebra)",
  "Computer Science / ICS",
  "Primary & Middle School (All Subjects)",
  "English & Urdu",
] as const;

export const studentRequestSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string({ message: "Phone number is required" })
    .trim()
    .transform((val, ctx) => {
      const normalized = normalizePakistaniPhone(val);
      if (!normalized) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Please enter a valid Pakistani mobile number (e.g. 0300 1234567 or +92 300 1234567)",
        });
        return z.NEVER;
      }
      return normalized;
    }),
  city: z.enum(ALLOWED_CITIES, {
    message: "Please select a valid city from the list",
  }),
  area: z
    .string()
    .trim()
    .max(120, "Area must be less than 120 characters")
    .optional()
    .nullable(),
  grade: z.enum(ALLOWED_GRADES, {
    message: "Please select a valid grade or class level",
  }),
  board: z
    .enum(ALLOWED_BOARDS)
    .optional()
    .nullable(),
  mode: z
    .enum(ALLOWED_STUDENT_MODES)
    .optional()
    .nullable(),
  notes: z
    .string()
    .trim()
    .max(1000, "Notes must be less than 1000 characters")
    .optional()
    .nullable(),
  source: z.enum(["modal", "signup"]).default("modal"),
  hp: z.string().optional().nullable(),
});

export type StudentRequestInput = z.infer<typeof studentRequestSchema>;

export const tutorApplicationSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string({ message: "Phone number is required" })
    .trim()
    .transform((val, ctx) => {
      const normalized = normalizePakistaniPhone(val);
      if (!normalized) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Please enter a valid Pakistani mobile number (e.g. 0321 9876543 or +92 321 9876543)",
        });
        return z.NEVER;
      }
      return normalized;
    }),
  university: z
    .string({ message: "University is required" })
    .trim()
    .min(2, "University must be at least 2 characters")
    .max(120, "University must be less than 120 characters"),
  program: z
    .string({ message: "Degree & major is required" })
    .trim()
    .min(2, "Degree & major must be at least 2 characters")
    .max(120, "Degree & major must be less than 120 characters"),
  fscMarks: z
    .string({ message: "Academic score is required" })
    .trim()
    .min(1, "Academic score is required")
    .max(100, "Academic score must be less than 100 characters"),
  city: z.enum(ALLOWED_CITIES, {
    message: "Please select a valid city from the list",
  }),
  mode: z.enum(ALLOWED_TUTOR_MODES, {
    message: "Please select a valid tutoring mode",
  }),
  subjects: z
    .array(z.string().trim())
    .min(1, "Please select at least one subject")
    .max(20, "Too many subjects selected"),
  hp: z.string().optional().nullable(),
});

export type TutorApplicationInput = z.infer<typeof tutorApplicationSchema>;
