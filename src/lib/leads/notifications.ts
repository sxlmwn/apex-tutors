import {
  sendLeadEmail,
  formatStudentRequestEmail,
  formatTutorApplicationEmail,
} from "./email";
import {
  sendWhatsAppNotification,
  formatStudentWhatsAppMessage,
  formatTutorWhatsAppMessage,
} from "./whatsapp";
import type { StudentRequestInput, TutorApplicationInput } from "./validation";

/**
 * Dispatches email and WhatsApp notifications concurrently with Promise.allSettled.
 * Notification failures will NOT throw or cause the request to fail; they are logged via console.error.
 */
export async function notifyStudentRequest(data: StudentRequestInput): Promise<void> {
  const emailPayload = formatStudentRequestEmail(data);
  const waPayload = formatStudentWhatsAppMessage(data);

  const results = await Promise.allSettled([
    sendLeadEmail(emailPayload),
    sendWhatsAppNotification(waPayload),
  ]);

  results.forEach((res, index) => {
    if (res.status === "rejected") {
      const channel = index === 0 ? "Email (Resend)" : "WhatsApp";
      console.error(`[Notification Failure] ${channel}:`, res.reason);
    }
  });
}

/**
 * Dispatches email and WhatsApp notifications for tutor applications concurrently with Promise.allSettled.
 */
export async function notifyTutorApplication(data: TutorApplicationInput): Promise<void> {
  const emailPayload = formatTutorApplicationEmail(data);
  const waPayload = formatTutorWhatsAppMessage(data);

  const results = await Promise.allSettled([
    sendLeadEmail(emailPayload),
    sendWhatsAppNotification(waPayload),
  ]);

  results.forEach((res, index) => {
    if (res.status === "rejected") {
      const channel = index === 0 ? "Email (Resend)" : "WhatsApp";
      console.error(`[Notification Failure] ${channel}:`, res.reason);
    }
  });
}
