"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormProps = {
  className?: string;
  variant?: "default" | "glass";
};

export function ContactForm({ className, variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please check your connection and try again.",
      );
    }
  }

  const isGlass = variant === "glass";
  const inputClass = isGlass
    ? "glass-input w-full rounded-full px-5 py-3 text-sm"
    : "w-full rounded-full border border-border bg-cream px-5 py-3 text-sm outline-none focus:border-accent";
  const textareaClass = isGlass
    ? "glass-input w-full resize-none rounded-2xl px-5 py-3 text-sm"
    : "w-full resize-none rounded-2xl border border-border bg-cream px-5 py-3 text-sm outline-none focus:border-accent";

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl p-6 text-sm ${
          isGlass
            ? "bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm"
            : "bg-accent-light"
        } ${className ?? ""}`}
      >
        <p className={`font-semibold ${isGlass ? "text-white" : "text-navy"}`}>
          Message sent successfully!
        </p>
        <p className={`mt-2 ${isGlass ? "text-white/70" : "text-muted"}`}>
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-4 text-sm font-semibold ${isGlass ? "text-gold-light" : "text-accent"}`}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={`space-y-4 ${className ?? ""}`} onSubmit={handleSubmit}>
      <input
        name="name"
        required
        placeholder="Full Name"
        disabled={status === "loading"}
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        disabled={status === "loading"}
        className={inputClass}
      />
      <input
        name="phone"
        type="tel"
        required
        placeholder="Phone Number"
        disabled={status === "loading"}
        className={inputClass}
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your message (optional)"
        disabled={status === "loading"}
        className={textareaClass}
      />
      {status === "error" && (
        <p className={`text-sm ${isGlass ? "text-gold-light" : "text-danger"}`}>
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold disabled:opacity-60 ${
          isGlass ? "btn-primary" : "btn-navy"
        }`}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
