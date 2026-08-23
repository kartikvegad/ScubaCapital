export const siteConfig = {
  name: "Scuba Capital",
  tagline: "Financial clarity at every depth.",
  description:
    "From first conversation to long-term wealth management — goal-based planning, mutual fund advisory, and insurance solutions in one trusted partnership.",
  email: "hello@scubacapital.in",
  phone: "+91 85276 33669",
  whatsapp: "918527633669",
  address:
    "C-401, Chandresh Ashish, Lodha Heritage, Deslepada, Dombivali East, Thane, Mumbai - 421201",
  amfiArn: "ARN-288339",
  social: {
    linkedin: "#",
    instagram: "#",
  },
} as const;

export const founders = [
  {
    name: "Satishkumar Kagre",
    role: "Co-Founder",
    credentials: [
      "AMFI Registered Mutual Fund Distributor",
      "Banking & Insurance Graduate, Sydenham College",
      "Diploma in Financial Services Management, SP Jain Institute",
    ],
    bio: "With over 15 years in financial services, Satish founded Scuba Capital to bring honest, goal-based guidance to working professionals and families.",
    initials: "SK",
  },
  {
    name: "Partner Name",
    role: "Co-Founder",
    credentials: [
      "Certified Financial Advisor",
      "Specialist in Wealth Planning & Risk Management",
    ],
    bio: "Together with Satish, our co-founder brings complementary expertise in portfolio strategy and client relationships — focused on improving lives, not selling products.",
    initials: "PN",
  },
] as const;

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Families Guided" },
  { value: "₹1 Cr+", label: "Assets Under Advisory" },
  { value: "4.9", suffix: "/5", label: "Client Satisfaction" },
] as const;

export const features = [
  {
    number: "1",
    title: "Built for clarity and simplicity",
    description:
      "Goal-based planning, SIP advisory, insurance, and portfolio reviews — all guided by one team. No jargon, no confusion, no switching between advisors.",
  },
  {
    number: "2",
    title: "Honest, transparent guidance",
    description:
      "Your goals come before products. Every recommendation is explained clearly, with full disclosure — so you always know why we suggest what we suggest.",
  },
  {
    number: "3",
    title: "A partner for your financial journey",
    description:
      "We watch over your finances as if they were our own. Periodic reviews, rebalancing, and ongoing support keep your plan aligned with your life.",
  },
  {
    number: "4",
    title: "Support that moves at your speed",
    description:
      "Questions answered promptly. Reviews on schedule. Whether you're starting your first SIP or planning retirement — we're here when you need us.",
  },
] as const;

export const services = [
  {
    title: "Goal-Based Financial Planning",
    description:
      "Map your income, expenses, and life goals into a clear roadmap for wealth creation and protection.",
  },
  {
    title: "Mutual Fund & SIP Advisory",
    description:
      "Disciplined SIP planning, lumpsum strategies, and portfolio reviews aligned to your objectives.",
  },
  {
    title: "Insurance Solutions",
    description:
      "Health, term, and life insurance to protect your family from financial uncertainty.",
  },
  {
    title: "Retirement & Wealth Planning",
    description:
      "Build a secure retirement corpus and long-term wealth through evidence-based allocation.",
  },
] as const;

export const amcPartners = [
  "HDFC Mutual Fund",
  "SBI Mutual Fund",
  "ICICI Prudential",
  "Axis Mutual Fund",
  "Kotak Mutual Fund",
  "Nippon India",
  "Mirae Asset",
  "DSP Mutual Fund",
] as const;

export const testimonials = [
  {
    quote:
      "Scuba Capital helped me plan my finances with clarity. Their goal-based approach gave me confidence to invest for the long term.",
    author: "Sumit Kumar Sharma",
    role: "International Business Head",
  },
  {
    quote:
      "As a business owner, I needed someone who understands my priorities. They simplified everything and helped us protect and grow our wealth.",
    author: "Daksh Madan",
    role: "Business Owner, Haridwar",
  },
  {
    quote:
      "Satish understands the financial needs of working professionals. He helped me plan my investments and insurance in a way that aligns perfectly with my goals.",
    author: "Ravi Kagre",
    role: "Manager Logistics, DHL Mumbai",
  },
] as const;

export const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
