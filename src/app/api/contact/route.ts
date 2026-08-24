import { NextResponse } from "next/server";
import { sendContactEmail, type ContactFormPayload } from "@/lib/email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parsePayload(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof phone !== "string") {
    return null;
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedMessage = typeof message === "string" ? message.trim() : "";

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
