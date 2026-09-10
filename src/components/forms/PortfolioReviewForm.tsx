"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { Loader2 } from "lucide-react";
import {
  portfolioReviewFormOptions,
} from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

type PortfolioReviewFormProps = {
  className?: string;
};

export function PortfolioReviewForm({ className }: PortfolioReviewFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [holdings, setHoldings] = useState<string[]>([]);
  const [reviewFocus, setReviewFocus] = useState<string[]>([]);

  function toggleValue(
    value: string,
    setter: Dispatch<SetStateAction<string[]>>,
  ) {
    setter((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
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
    const name = [firstName, lastName].filter(Boolean).join(" ");
    const notes = String(data.get("notes") ?? "").trim();
    const portfolioValue = String(data.get("portfolioValue") ?? "").trim();

    const details = [
      portfolioValue ? `Approximate portfolio value: ${portfolioValue}` : "",
      holdings.length > 0 ? `Current holdings: ${holdings.join(", ")}` : "",
      reviewFocus.length > 0 ? `Review focus: ${reviewFocus.join(", ")}` : "",
      notes ? `Additional notes:\n${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "portfolio-review",
          name,
          email: data.get("email"),
          phone: data.get("phone"),
          message: details || undefined,
        }),
      });

      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setHoldings([]);
      setReviewFocus([]);
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your request. Please check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-white ${className ?? ""}`}
      >
        <p className="font-semibold">Portfolio review request received!</p>
        <p className="mt-2 text-white/70">
          Thank you. Our team will review your details and get back to you to
          schedule your portfolio review.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-gold-light"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className={`space-y-4 ${className ?? ""}`} onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="firstName"
          required
          placeholder="First Name"
          disabled={status === "loading"}
          className="contact-dark-input"
        />
        <input
          name="lastName"
          required
          placeholder="Last Name"
          disabled={status === "loading"}
          className="contact-dark-input"
        />
      </div>

      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        disabled={status === "loading"}
        className="contact-dark-input"
      />
      <input
        name="phone"
        type="tel"
        required
        placeholder="Phone Number"
        disabled={status === "loading"}
        className="contact-dark-input"
      />

      <div>
        <label
          htmlFor="portfolioValue"
          className="text-sm font-medium text-white/80"
        >
          Approximate portfolio value
        </label>
        <select
          id="portfolioValue"
          name="portfolioValue"
          required
          disabled={status === "loading"}
          defaultValue=""
          className="contact-dark-input mt-2"
        >
          <option value="" disabled className="text-navy">
            Select a range
          </option>
          {portfolioReviewFormOptions.portfolioValueRanges.map((range) => (
            <option key={range} value={range} className="text-navy">
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className="pt-1">
        <p className="text-sm font-medium text-white/80">Current holdings include:</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {portfolioReviewFormOptions.holdingTypes.map((holding) => (
            <label
              key={holding}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-white/75"
            >
              <input
                type="checkbox"
                checked={holdings.includes(holding)}
                onChange={() => toggleValue(holding, setHoldings)}
                disabled={status === "loading"}
                className="contact-dark-checkbox size-4 shrink-0 rounded border-white/30 bg-transparent"
              />
              {holding}
            </label>
          ))}
        </div>
      </div>

      <div className="pt-1">
        <p className="text-sm font-medium text-white/80">What would you like us to review?</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {portfolioReviewFormOptions.reviewFocusAreas.map((area) => (
            <label
              key={area}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-white/75"
            >
              <input
                type="checkbox"
                checked={reviewFocus.includes(area)}
                onChange={() => toggleValue(area, setReviewFocus)}
                disabled={status === "loading"}
                className="contact-dark-checkbox size-4 shrink-0 rounded border-white/30 bg-transparent"
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      <textarea
        name="notes"
        rows={3}
        placeholder="Anything else we should know before the review? (optional)"
        disabled={status === "loading"}
        className="contact-dark-input resize-none"
      />

      {status === "error" && (
        <p className="text-sm text-gold-light">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Request Portfolio Review"
        )}
      </button>
    </form>
  );
}
