import { CONTACT_INFO, WHATSAPP_LINK, WHATSAPP_CHAT_LINK } from "./contact";

/**
 * Extracts and normalizes the target WhatsApp business number to digits only.
 * Reuses the existing WhatsApp number from contact.ts (as used by the floating WhatsApp button).
 */
export function getWhatsAppNumberDigits(): string {
  const linkSource =
    WHATSAPP_LINK || WHATSAPP_CHAT_LINK || CONTACT_INFO.whatsAppLink || "";
  const match = linkSource.match(/wa\.me\/([0-9+]+)/);
  if (match && match[1]) {
    const cleaned = match[1].replace(/\D/g, "");
    if (cleaned) return cleaned;
  }

  let digits = (CONTACT_INFO.whatsAppNumber || "").replace(/\D/g, "");
  if (digits.startsWith("0")) {
    digits = "92" + digits.slice(1);
  }
  return digits || "923467507339";
}

export interface StudentWhatsAppInput {
  name: string;
  phone: string;
  city?: string;
  area?: string;
  grade?: string;
  classLevel?: string;
  board?: string;
  mode?: string;
  notes?: string;
}

export interface TutorWhatsAppInput {
  name: string;
  phone: string;
  university?: string;
  program?: string;
  city?: string;
  mode?: string;
  subjects?: string[] | string;
}

const MAX_MESSAGE_LENGTH = 600;

/**
 * Builds a WhatsApp click-to-chat URL for a student request.
 * Plain English, short, each on its own line:
 * "New tutor request (Apex Tutors)", Name, Phone, City, Area (if present), Grade, Board, Mode, Notes (if present).
 * Skips empty fields. Message stays under ~600 chars (truncating notes if needed).
 */
export function buildStudentWhatsAppLink(data: StudentWhatsAppInput): string {
  const digits = getWhatsAppNumberDigits();
  const lines: string[] = ["New tutor request (Apex Tutors)"];

  if (data.name?.trim()) lines.push(`Name: ${data.name.trim()}`);
  if (data.phone?.trim()) lines.push(`Phone: ${data.phone.trim()}`);
  if (data.city?.trim()) lines.push(`City: ${data.city.trim()}`);
  if (data.area?.trim()) lines.push(`Area: ${data.area.trim()}`);

  const grade = (data.grade || data.classLevel || "").trim();
  if (grade) lines.push(`Grade: ${grade}`);

  if (data.board?.trim()) lines.push(`Board: ${data.board.trim()}`);
  if (data.mode?.trim()) lines.push(`Mode: ${data.mode.trim()}`);

  const notes = data.notes?.trim();
  if (notes) {
    const currentText = lines.join("\n");
    const notesPrefix = "\nNotes: ";
    const available = MAX_MESSAGE_LENGTH - currentText.length - notesPrefix.length;
    if (available > 3) {
      const truncatedNotes =
        notes.length > available ? notes.slice(0, available - 3) + "..." : notes;
      lines.push(`Notes: ${truncatedNotes}`);
    }
  }

  let message = lines.join("\n");
  if (message.length > MAX_MESSAGE_LENGTH) {
    message = message.slice(0, MAX_MESSAGE_LENGTH - 3) + "...";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp click-to-chat URL for a tutor application.
 * Plain English, short, each on its own line:
 * "New tutor application (Apex Tutors)", Name, Phone, University, Program, City, Mode, Subjects (comma separated).
 * Skips empty fields. Message stays under ~600 chars.
 */
export function buildTutorWhatsAppLink(data: TutorWhatsAppInput): string {
  const digits = getWhatsAppNumberDigits();
  const lines: string[] = ["New tutor application (Apex Tutors)"];

  if (data.name?.trim()) lines.push(`Name: ${data.name.trim()}`);
  if (data.phone?.trim()) lines.push(`Phone: ${data.phone.trim()}`);
  if (data.university?.trim()) lines.push(`University: ${data.university.trim()}`);
  if (data.program?.trim()) lines.push(`Program: ${data.program.trim()}`);
  if (data.city?.trim()) lines.push(`City: ${data.city.trim()}`);
  if (data.mode?.trim()) lines.push(`Mode: ${data.mode.trim()}`);

  let subjectsStr = "";
  if (Array.isArray(data.subjects)) {
    subjectsStr = data.subjects.filter(Boolean).join(", ");
  } else if (typeof data.subjects === "string") {
    subjectsStr = data.subjects.trim();
  }

  if (subjectsStr) {
    lines.push(`Subjects: ${subjectsStr}`);
  }

  let message = lines.join("\n");
  if (message.length > MAX_MESSAGE_LENGTH) {
    message = message.slice(0, MAX_MESSAGE_LENGTH - 3) + "...";
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
