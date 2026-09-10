export type ChatOption = {
  id: string;
  label: string;
  next: string;
};

export type ChatStep = {
  id: string;
  bot: string;
  options?: ChatOption[];
  cta?: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

export const chatbotSteps: Record<string, ChatStep> = {
  start: {
    id: "start",
    bot: "Hi — welcome to SCUBA CAPITAL. How can we help you today?",
    options: [
      { id: "review", label: "Review my portfolio", next: "review-who" },
      { id: "consult", label: "Book a consultation", next: "consult-goal" },
      { id: "learn", label: "Understand mutual funds", next: "learn-focus" },
      { id: "retire", label: "Plan for retirement", next: "retire-horizon" },
    ],
  },
  "review-who": {
    id: "review-who",
    bot: "Whose portfolio should we look at?",
    options: [
      { id: "self", label: "Just mine", next: "review-done" },
      { id: "family", label: "Mine + family", next: "review-done" },
      { id: "business", label: "Business / HNI", next: "review-done" },
    ],
  },
  "review-done": {
    id: "review-done",
    bot: "Great. Share a few details and our team will review structure, alignment, and gaps — without product pushing.",
    cta: {
      primary: {
        label: "Request portfolio review",
        href: "/contact/portfolio-review",
      },
      secondary: {
        label: "Chat on WhatsApp",
        href: "whatsapp:I'd like a portfolio review from SCUBA CAPITAL.",
      },
    },
  },
  "consult-goal": {
    id: "consult-goal",
    bot: "What matters most right now?",
    options: [
      { id: "grow", label: "Grow wealth", next: "consult-done" },
      { id: "protect", label: "Protect my family", next: "consult-done" },
      { id: "clarity", label: "Get financial clarity", next: "consult-done" },
      { id: "tax", label: "Tax-efficient investing", next: "consult-done" },
    ],
  },
  "consult-done": {
    id: "consult-done",
    bot: "Perfect. A short conversation helps us understand your goals before recommending anything.",
    cta: {
      primary: { label: "Book a consultation", href: "/contact" },
      secondary: {
        label: "Chat on WhatsApp",
        href: "whatsapp:I'd like to book a consultation with SCUBA CAPITAL.",
      },
    },
  },
  "learn-focus": {
    id: "learn-focus",
    bot: "What would you like to explore first?",
    options: [
      { id: "sip", label: "SIPs & goal planning", next: "learn-done" },
      { id: "categories", label: "Fund categories", next: "learn-done" },
      { id: "approach", label: "Your approach", next: "learn-approach" },
    ],
  },
  "learn-approach": {
    id: "learn-approach",
    bot: "We start with understanding, then analysis, strategy, implementation, and ongoing review — so products follow the plan, not the other way around.",
    cta: {
      primary: { label: "See our approach", href: "/#approach" },
      secondary: { label: "Browse services", href: "/services" },
    },
  },
  "learn-done": {
    id: "learn-done",
    bot: "You can explore our guides and calculators anytime — or talk to us if you want this applied to your situation.",
    cta: {
      primary: { label: "Open SIP calculator", href: "/tools/sip-calculator" },
      secondary: { label: "Read the blog", href: "/blog" },
    },
  },
  "retire-horizon": {
    id: "retire-horizon",
    bot: "How far are you from retirement?",
    options: [
      { id: "10plus", label: "10+ years away", next: "retire-done" },
      { id: "5to10", label: "5–10 years", next: "retire-done" },
      { id: "under5", label: "Under 5 years", next: "retire-done" },
      { id: "retired", label: "Already retired", next: "retire-done" },
    ],
  },
  "retire-done": {
    id: "retire-done",
    bot: "Retirement planning works best when income needs, risk comfort, and time horizon are mapped together. We can help you structure that.",
    cta: {
      primary: { label: "Talk retirement planning", href: "/contact" },
      secondary: {
        label: "Chat on WhatsApp",
        href: "whatsapp:I'd like help with retirement planning from SCUBA CAPITAL.",
      },
    },
  },
};

export const chatbotStartId = "start";
