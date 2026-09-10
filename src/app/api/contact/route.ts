import { NextResponse } from "next/server";
import { sendContactEmail, type ContactFormPayload } from "@/lib/email";

const FORM_TYPES = ["consultation", "portfolio-review"] as const;

type FormType = (typeof FORM_TYPES)[number];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isFormType(value: unknown): value is FormType {
  return typeof value === "string" && FORM_TYPES.includes(value as FormType);
}

function parsePayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const { name, email, phone, message, formType } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof phone !== "string") {
    return null;
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedMessage = typeof message === "string" ? message.trim() : "";
  const resolvedFormType: FormType = isFormType(formType) ? formType : "consultation";

  if (!trimmedName || !trimmedEmail || !trimmedPhone || !isValidEmail(trimmedEmail)) {
    return null;
  }

  if (trimmedName.length > 100 || trimmedEmail.length > 254 || trimmedPhone.length > 20) {
    return null;
  }

  if (trimmedMessage.length > 2000) {
    return null;
  }

  return {
    formType: resolvedFormType,
    name: trimmedName,
    email: trimmedEmail,
    phone: trimmedPhone,
    message: trimmedMessage || undefined,
  };
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const payload = parsePayload(body);

    if (!payload) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and phone number." },
        { status: 400 },
      );
    }

    await sendContactEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
