"use client";

import { founder } from "@/lib/constants";

const nodes = [
  { label: "SIP +₹15K", type: "income" as const, position: "top-0 left-1/2 -translate-x-1/2" },
  { label: "Insurance ✓", type: "income" as const, position: "top-1/3 -left-4 -translate-y-1/2" },
  { label: "Review Due", type: "expense" as const, position: "top-1/3 -right-4 -translate-y-1/2" },
  { label: "Goal 78%", type: "income" as const, position: "bottom-0 left-1/4 -translate-x-1/2" },
  { label: "Tax Plan", type: "income" as const, position: "bottom-0 right-1/4 translate-x-1/2" },
];

export function SecureFlowSection() {
  return (
    <section className="bg-background-soft py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Keep Your Wealth Secure{" "}
            <span className="text-blue">Always</span>
          </h2>
          <p className="mt-4 text-muted">
            One portfolio view. Clear protection. Disciplined reviews.
          </p>
        </div>

        <div className="relative mx-auto mt-16 flex h-[420px] max-w-2xl items-center justify-center">
          {/* Connection lines */}
          <svg
            className="pointer-events-none absolute inset-0 size-full text-border"
            aria-hidden="true"
          >
            <line x1="50%" y1="50%" x2="50%" y2="8%" stroke="currentColor" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="8%" y2="38%" stroke="currentColor" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="92%" y2="38%" stroke="currentColor" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="28%" y2="92%" stroke="currentColor" strokeWidth="1" />
            <line x1="50%" y1="50%" x2="72%" y2="92%" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Center card */}
          <div className="panel relative z-10 w-72 rounded-[2rem] p-6 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent-light font-display text-lg font-bold text-blue">
              {founder.initials}
            </div>
            <p className="font-display mt-4 font-bold">{founder.name.replace("Mr. ", "")}</p>
            <p className="text-xs text-muted">{founder.role}</p>
            <p className="font-display mt-4 text-2xl font-bold">Your Plan</p>
          </div>

          {/* Branch nodes */}
          {nodes.map((node) => (
            <div
              key={node.label}
              className={`absolute ${node.position} z-10 flex flex-col items-center gap-2`}
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-white text-xs font-bold shadow-md ring-1 ring-border">
                {node.label.slice(0, 2).toUpperCase()}
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  node.type === "income"
                    ? "bg-green-50 text-success"
                    : "bg-red-50 text-danger"
                }`}
              >
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
