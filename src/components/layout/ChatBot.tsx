"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, RotateCcw, X } from "lucide-react";
import {
  chatbotStartId,
  chatbotSteps,
  type ChatOption,
} from "@/lib/chatbot";
import { siteConfig } from "@/lib/constants";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function resolveHref(href: string) {
  if (href.startsWith("whatsapp:")) {
    const text = encodeURIComponent(href.replace("whatsapp:", ""));
    return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
  }
  return href;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [stepId, setStepId] = useState(chatbotStartId);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "bot-start", role: "bot", text: chatbotSteps[chatbotStartId].bot },
  ]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const step = chatbotSteps[stepId];

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, open, stepId]);

  function resetChat() {
    setStepId(chatbotStartId);
    setMessages([
      {
        id: `bot-${Date.now()}`,
        role: "bot",
        text: chatbotSteps[chatbotStartId].bot,
      },
    ]);
  }

  function chooseOption(option: ChatOption) {
    const next = chatbotSteps[option.next];
    if (!next) return;

    setMessages((current) => [
      ...current,
      {
        id: `user-${option.id}-${Date.now()}`,
        role: "user",
        text: option.label,
      },
      {
        id: `bot-${next.id}-${Date.now()}`,
        role: "bot",
        text: next.bot,
      },
    ]);
    setStepId(option.next);
  }

  return (
    <div className="flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex h-[min(28rem,calc(100svh-17rem))] max-h-[calc(100svh-17rem)] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a1a22] text-white shadow-[0_24px_60px_rgba(4,12,18,0.45)]"
            role="dialog"
            aria-label="SCUBA CAPITAL assistant"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[linear-gradient(135deg,rgba(141,198,63,0.16),transparent_55%),#0b1720] px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">
                  SCUBA Assistant
                </p>
                <p className="truncate text-[11px] text-white/55">
                  Quick questions · guided next step
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  aria-label="Restart chat"
                  className="inline-flex size-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="inline-flex size-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div
              ref={scrollerRef}
              className="flex-1 space-y-3 overflow-y-auto px-3.5 py-4 [scrollbar-width:thin]"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-br-md bg-green text-[#0a1a22]"
                        : "rounded-bl-md bg-white/8 text-white/90 ring-1 ring-white/10"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {step.options ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {step.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => chooseOption(option)}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-left text-xs font-medium text-white/90 transition-colors hover:border-green/50 hover:bg-green/15 hover:text-white"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : null}

              {step.cta ? (
                <div className="space-y-2 pt-1">
                  <a
                    href={resolveHref(step.cta.primary.href)}
                    className="btn-primary flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {step.cta.primary.label}
                  </a>
                  {step.cta.secondary ? (
                    <a
                      href={resolveHref(step.cta.secondary.href)}
                      target={
                        step.cta.secondary.href.startsWith("whatsapp:")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        step.cta.secondary.href.startsWith("whatsapp:")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {step.cta.secondary.label}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="relative flex size-14 items-center justify-center rounded-full bg-green text-[#0a1a22] shadow-[0_8px_24px_rgba(141,198,63,0.4)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="size-6" strokeWidth={2.25} />
        ) : (
          <MessageCircle className="size-6" strokeWidth={2.25} />
        )}
        {!open ? (
          <span className="absolute -top-0.5 -right-0.5 size-3 rounded-full bg-white ring-2 ring-green" />
        ) : null}
      </button>
    </div>
  );
}
