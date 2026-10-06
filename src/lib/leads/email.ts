import { Resend } from "resend";
import type { StudentRequestInput, TutorApplicationInput } from "./validation";

interface SendEmailParams {
  subject: string;
  html: string;
  text: string;
}

/**
 * Sends a notification email via Resend to the administrator.
 */
export async function sendLeadEmail(params: SendEmailParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_NOTIFY_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL || "Apex Tutors <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.warn(
      "Resend email notification skipped: missing RESEND_API_KEY or LEAD_NOTIFY_EMAIL in environment variables."
    );
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: params.subject,
    html: params.html,
    text: params.text,
  });

  if (error) {
    throw new Error(`Resend email delivery failed: ${error.message}`);
  }
}

/**
 * Formats student request notification for email.
 */
export function formatStudentRequestEmail(data: StudentRequestInput): SendEmailParams {
  const subject = `New student request - ${data.name} (${data.city}, ${data.grade})`;

  const text = `
Apex Tutors - New Student Request
=================================
Name:     ${data.name}
Phone:    ${data.phone}
City:     ${data.city}
Area:     ${data.area || "Not provided"}
Grade:    ${data.grade}
Board:    ${data.board || "Not provided"}
Mode:     ${data.mode || "Not specified"}
Notes:    ${data.notes || "None"}
Source:   ${data.source}
Time:     ${new Date().toISOString()}
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 24px; color: #18181b; }
    .card { background: #ffffff; max-width: 580px; margin: 0 auto; border-radius: 12px; border: 1px solid #e4e4e7; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    .header { border-bottom: 2px solid #2e8b57; padding-bottom: 12px; margin-bottom: 20px; }
    .header h2 { margin: 0; color: #18181b; font-size: 20px; }
    .badge { display: inline-block; background: #ecfdf5; color: #047857; font-size: 12px; font-weight: 600; padding: 4px 8px; border-radius: 6px; margin-top: 6px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    td { padding: 10px 8px; border-bottom: 1px solid #f4f4f5; font-size: 14px; }
    td.label { color: #71717a; width: 35%; font-weight: 500; }
    td.value { color: #09090b; font-weight: 600; }
    .footer { margin-top: 24px; font-size: 12px; color: #a1a1aa; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>🎓 New Student Demo Request</h2>
      <span class="badge">Source: ${data.source === "signup" ? "Full Signup Page" : "Modal Popup"}</span>
    </div>
    <table>
      <tr><td class="label">Student / Parent</td><td class="value">${escapeHtml(data.name)}</td></tr>
      <tr><td class="label">WhatsApp Phone</td><td class="value"><a href="https://wa.me/${data.phone.replace("+", "")}" style="color: #2e8b57; text-decoration: none;">${escapeHtml(data.phone)}</a></td></tr>
      <tr><td class="label">City</td><td class="value">${escapeHtml(data.city)}</td></tr>
      <tr><td class="label">Area / Sector</td><td class="value">${escapeHtml(data.area || "—")}</td></tr>
      <tr><td class="label">Grade / Track</td><td class="value">${escapeHtml(data.grade)}</td></tr>
      <tr><td class="label">Exam Board</td><td class="value">${escapeHtml(data.board || "—")}</td></tr>
      <tr><td class="label">Tutoring Mode</td><td class="value">${escapeHtml(data.mode || "—")}</td></tr>
      <tr><td class="label">Notes / Needs</td><td class="value">${escapeHtml(data.notes || "None")}</td></tr>
    </table>
    <div class="footer">Apex Tutors Automated Lead Notification</div>
  </div>
</body>
</html>
`.trim();

  return { subject, text, html };
}

/**
 * Formats tutor application notification for email.
 */
export function formatTutorApplicationEmail(data: TutorApplicationInput): SendEmailParams {
  const subject = `New tutor application - ${data.name}`;

  const text = `
Apex Tutors - New Tutor Application
===================================
Name:         ${data.name}
Phone:        ${data.phone}
University:   ${data.university}
Program:      ${data.program}
Score/Grades: ${data.fscMarks}
City:         ${data.city}
Mode:         ${data.mode}
Subjects:     ${data.subjects.join(", ")}
Time:         ${new Date().toISOString()}
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 24px; color: #18181b; }
    .card { background: #ffffff; max-width: 580px; margin: 0 auto; border-radius: 12px; border: 1px solid #e4e4e7; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
    .header { border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px; }
    .header h2 { margin: 0; color: #18181b; font-size: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    td { padding: 10px 8px; border-bottom: 1px solid #f4f4f5; font-size: 14px; }
    td.label { color: #71717a; width: 35%; font-weight: 500; }
    td.value { color: #09090b; font-weight: 600; }
    .footer { margin-top: 24px; font-size: 12px; color: #a1a1aa; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>👨‍🏫 New Tutor Application</h2>
    </div>
    <table>
      <tr><td class="label">Full Name</td><td class="value">${escapeHtml(data.name)}</td></tr>
      <tr><td class="label">WhatsApp Phone</td><td class="value"><a href="https://wa.me/${data.phone.replace("+", "")}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.phone)}</a></td></tr>
      <tr><td class="label">University</td><td class="value">${escapeHtml(data.university)}</td></tr>
      <tr><td class="label">Program / Major</td><td class="value">${escapeHtml(data.program)}</td></tr>
      <tr><td class="label">Score / Grades</td><td class="value">${escapeHtml(data.fscMarks)}</td></tr>
      <tr><td class="label">City</td><td class="value">${escapeHtml(data.city)}</td></tr>
      <tr><td class="label">Tutoring Mode</td><td class="value">${escapeHtml(data.mode)}</td></tr>
      <tr><td class="label">Subjects</td><td class="value">${escapeHtml(data.subjects.join(", "))}</td></tr>
    </table>
    <div class="footer">Apex Tutors Automated Lead Notification</div>
  </div>
</body>
</html>
`.trim();

  return { subject, text, html };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
