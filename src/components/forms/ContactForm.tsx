"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { heroServices } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormProps = {
  className?: string;
  variant?: "default" | "glass" | "dark";
  showInterests?: boolean;
};

export function ContactForm({
  className,
  variant = "default",
  showInterests = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(service: string) {
    setInterests((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const fullName = String(data.get("name") ?? "").trim();
    const name =
      variant === "dark"
        ? [firstName, lastName].filter(Boolean).join(" ")
        : fullName;

    const userMessage = String(data.get("message") ?? "").trim();
    const interestLine =
      interests.length > 0 ? `Interested in: ${interests.join(", ")}` : "";
    const message = [interestLine, userMessage].filter(Boolean).join("\n\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "consultation",
          name,
          email: data.get("email"),
          phone: data.get("phone"),
          message: message || undefined,
        }),
      });

      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setInterests([]);
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please check your connection and try again.",
      );
    }
  }

  const isGlass = variant === "glass";
  const isDark = variant === "dark";
  const inputClass = isDark
    ? "contact-dark-input"
    : isGlass
      ? "glass-input w-full rounded-full px-5 py-3 text-sm"
      : "w-full rounded-full border border-border bg-cream px-5 py-3 text-sm outline-none focus:border-accent";
  const textareaClass = isDark
    ? "contact-dark-input resize-none"
    : isGlass
      ? "glass-input w-full resize-none rounded-2xl px-5 py-3 text-sm"
      : "w-full resize-none rounded-2xl border border-border bg-cream px-5 py-3 text-sm outline-none focus:border-accent";

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl p-6 text-sm ${
          isDark
            ? "border border-white/15 bg-white/5 text-white"
            : isGlass
              ? "bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm"
              : "bg-accent-light"
        } ${className ?? ""}`}
      >
        <p
          className={`font-semibold ${isDark || isGlass ? "text-white" : "text-navy"}`}
        >
          Message sent successfully!
        </p>
        <p className={`mt-2 ${isDark || isGlass ? "text-white/70" : "text-muted"}`}>
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-4 text-sm font-semibold ${
            isDark || isGlass ? "text-gold-light" : "text-accent"
          }`}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={`space-y-4 ${className ?? ""}`} onSubmit={handleSubmit}>
      {isDark ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="firstName"
            required
            placeholder="First Name"
            disabled={status === "loading"}
            className={inputClass}
          />
          <input
            name="lastName"
            required
            placeholder="Last Name"
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>
      ) : (
        <input
          name="name"
          required
          placeholder="Full Name"
          disabled={status === "loading"}
          className={inputClass}
        />
      )}

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

      {showInterests && (
        <div className="pt-2">
          <p className="text-sm font-medium text-white/80">Interested in:</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {heroServices.map((service) => (
              <label
                key={service}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-white/75"
              >
                <input
                  type="checkbox"
                  checked={interests.includes(service)}
                  onChange={() => toggleInterest(service)}
                  disabled={status === "loading"}
                  className="contact-dark-checkbox size-4 shrink-0 rounded border-white/30 bg-transparent"
                />
                {service}
              </label>
            ))}
          </div>
        </div>
      )}

      {!isDark && (
        <textarea
          name="message"
          rows={4}
          placeholder="Your message (optional)"
          disabled={status === "loading"}
          className={textareaClass}
        />
      )}

      {status === "error" && (
        <p
          className={`text-sm ${
            isDark || isGlass ? "text-gold-light" : "text-danger"
          }`}
        >
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold disabled:opacity-60 ${
          isDark || isGlass
            ? "btn-primary rounded-lg"
            : "btn-navy rounded-full"
        }`}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
