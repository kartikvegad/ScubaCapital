import nodemailer from "nodemailer";

const DEFAULT_RECIPIENTS = [
  "satish@scubacapital.in",
  "connect@scubacapital.in",
] as const;

function parseRecipients(value: string | undefined, fallback: string[]): string[] {
  if (!value?.trim()) {
    return fallback;
  }

  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function getMailConfig() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const recipients = parseRecipients(
    process.env.CONTACT_RECIPIENT,
    [...DEFAULT_RECIPIENTS],
  );

  if (!user || !pass) {
    throw new Error("Gmail credentials are not configured.");
  }

  if (recipients.length === 0) {
    throw new Error("No contact recipients are configured.");
  }

  return { user, pass, recipients };
}

export function createMailTransport() {
  const { user, pass } = getMailConfig();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export async function sendContactEmail(payload: ContactFormPayload) {
  const { user, recipients } = getMailConfig();
  const transport = createMailTransport();

  const { name, email, phone, message } = payload;

  await transport.sendMail({
    from: `"Scuba Capital Website" <${user}>`,
    to: recipients.join(", "),
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message?.trim() || "(No message provided)",
    ].join("\n"),
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message?.trim() || "(No message provided)").replace(/\n/g, "<br>")}</p>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
