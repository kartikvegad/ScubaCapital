export const siteConfig = {
  legalName: "SCUBA CAPITAL PVT LTD",
  name: "SCUBA CAPITAL",
  tagline: "Dive Deep. Invest Smart. Achieve More.",
  brandStatement: "Your goals deserve more than a product. They deserve a plan.",
  headline: "Your Wealth. Your Goals. Your Future.",
  subheadline: "Plan with Clarity. Grow with Confidence.",
  philosophyLine: "Strategy. Clarity. Understanding. Balance. Achievement.",
  footerDescriptor:
    "Financial Planning | Mutual Fund Solutions | Protection Solutions | Fixed Income Solutions | Portfolio Review",
  email: "connect@scubacapital.in",
  emails: [
    "connect@scubacapital.in",
    "satish@scubacapital.in",
    "subhash@scubacapital.in",
  ] as const,
  phone: "8527633669",
  phoneDisplay: "+91 85276 33669",
  whatsapp: "918527633669",
  website: "www.scubacapital.in",
  address:
    "2nd Floor, SK Solutions Co-working Space, Kohinoor Plaza Building, Tata Power, Above Ambika Pure Veg, Dombivli East – 421201",
  amfiArn: "ARN-288339",
  social: {
    instagram: "https://www.instagram.com/scubacapital",
    facebook: "https://www.facebook.com/scubacapital",
  },
  founderQuote:
    "Financial planning is not about predicting the future. It is about preparing for it.",
  disclaimer:
    "Mutual fund investments are subject to market risks. Read all scheme related documents carefully. The information provided on this website is for general informational and educational purposes and should not be construed as investment advice, a guarantee of returns or a solicitation to buy or sell any financial product. Investment decisions should be made after considering individual financial circumstances, objectives, risk profile and applicable product documentation. Past performance is not indicative of future results. Product availability and suitability are subject to applicable laws, regulations, eligibility criteria and the terms and conditions of the respective product provider.",
} as const;

export const siteImages = {
  about: "/images/about-planning.jpg",
  philosophy: "/images/ocean-depth.jpg",
  approach: "/images/team-approach.jpg",
  whyUs: "/images/family-protect.jpg",
  founder: "/founder-satish.jpg",
  segments: {
    "personal-finance": "/images/invest-grow.jpg",
    "risk-management": "/images/family-protect.jpg",
    retirement: "/images/retirement.jpg",
    succession: "/images/legacy-home.jpg",
  },
} as const;

export const heroContent = {
  eyebrow: "FINANCIAL PLANNING • INVESTMENT SOLUTIONS • WEALTH STRATEGY",
  headline: "Your Wealth. Your Goals. Your Future.",
  supporting: "Dive Deep. Invest Smart. Achieve More.",
  line1: "India's",
  line2: "Financial Advisors for",
  body: [
    "Financial decisions become more important as your ambitions grow.",
    "At SCUBA CAPITAL, we look beyond individual financial products to understand the bigger picture — your goals, your existing finances, your protection needs, your future priorities and the path required to bring them together.",
    "We help individuals, families, professionals, entrepreneurs and business owners approach their financial journey with greater clarity, structure and discipline.",
  ],
  primaryCta: "Book a Consultation",
  secondaryCta: "Talk to Our Wealth Team",
  supportingLine: "Plan with Clarity. Grow with Confidence.",
} as const;

/** Rotating audience labels for Path-style hero */
export const heroAudiences = [
  "Individuals",
  "Families",
  "Professionals",
  "Entrepreneurs",
  "Business Owners",
  "HNI Families",
] as const;

export const guidesSection = {
  eyebrow: "YOUR FINANCIAL GUIDES",
  headline: "We help you move forward with confidence.",
  paragraphs: [
    "It's not just about building a strong portfolio or retirement plan — it's about clear guidance, honest conversations, and making sure you understand every decision along the way.",
    "We're advisors focused on your objectives first — and we take this journey seriously because your financial future matters.",
  ],
  cta: "See why SCUBA",
} as const;

export const pillarsIntro = {
  heading: "A Deeper Approach to Your Financial Journey",
  intro: [
    "Your financial life is connected.",
    "Investments influence liquidity. Protection supports your family's security. Retirement requires long-term preparation. Wealth built today may eventually need to be transferred to the next generation.",
    "SCUBA CAPITAL brings these considerations together through four core areas.",
  ],
} as const;

export const pillars = [
  {
    id: "build",
    label: "BUILD",
    title: "Build",
    subtitle: "Personal Finance & Investment Planning",
    description:
      "Build a financial foundation around the goals that matter to you. From investment planning and mutual fund solutions to children's education and long-term wealth creation, we help bring structure to your financial priorities.",
    items: [
      "Financial goal planning",
      "Investment planning & asset allocation",
      "Mutual fund & SIP planning",
      "Portfolio review & optimisation",
      "Children's education planning",
      "Tax-efficient financial planning",
      "Wealth creation & financial independence",
    ],
    cta: "Explore Investment Planning",
    href: "/services",
    image: siteImages.segments["personal-finance"],
  },
  {
    id: "protect",
    label: "PROTECT",
    title: "Protect",
    subtitle: "Risk Management",
    description:
      "Wealth creation is only one part of financial planning. Protecting what you have built is equally important. We help evaluate protection needs, financial risks and potential gaps so that your broader financial strategy is not built on an incomplete foundation.",
    items: [
      "Life insurance & protection planning",
      "Health insurance planning",
      "Insurance portfolio review",
      "Emergency fund planning",
      "Liability & financial risk assessment",
      "Protection-gap analysis",
      "Family financial security planning",
    ],
    cta: "Explore Protection Planning",
    href: "/services",
    image: siteImages.segments["risk-management"],
  },
  {
    id: "retire",
    label: "RETIRE",
    title: "Retire",
    subtitle: "Retirement & Early Retirement Planning",
    description:
      "Retirement planning is about more than reaching a number. It is about preparing for the lifestyle you want, creating an appropriate corpus, considering inflation and longevity, and planning how your wealth can support you through the years ahead.",
    items: [
      "Retirement goal planning",
      "Retirement corpus calculation",
      "Early retirement planning",
      "Financial independence planning",
      "Post-retirement income planning",
      "Inflation & longevity planning",
      "Retirement portfolio review",
      "SWP / income planning",
    ],
    cta: "Explore Retirement Planning",
    href: "/services",
    image: siteImages.segments.retirement,
  },
  {
    id: "preserve",
    label: "PRESERVE",
    title: "Preserve",
    subtitle: "Succession & Legacy Planning",
    description:
      "Building wealth is one journey. Preserving and transferring it is another. We help families and business owners think ahead about wealth transfer, succession, estate liquidity and the continuity of their financial legacy.",
    items: [
      "Will & estate planning coordination",
      "Wealth transfer planning",
      "Nomination review",
      "Business succession planning",
      "Inter-generational wealth transfer",
      "Legacy planning",
      "Estate liquidity planning",
    ],
    cta: "Explore Succession Planning",
    href: "/services",
    image: siteImages.segments.succession,
  },
] as const;

export const whoWeAre = {
  title: "Financial Planning With a Deeper Perspective",
  paragraphs: [
    "Financial decisions rarely exist in isolation.",
    "Investments, protection, taxation, liquidity, retirement and family goals can all influence one another. A decision that looks appropriate in isolation may not always fit the bigger picture.",
    "SCUBA CAPITAL takes a structured approach to understanding where you are today, where you want to go and what needs to be considered along the way.",
    "Whether you are beginning your investment journey, building wealth, planning for your family's future or reviewing an existing portfolio, our objective is simple:",
  ],
  closing:
    "Bring clarity to complexity. Create structure around your goals. Help you move forward with confidence.",
} as const;

export const philosophyIntro = {
  heading: "The SCUBA Framework",
  intro:
    "Our name represents the way we approach financial planning. We believe better financial decisions begin by going deeper — understanding the person, the objective and the context before discussing solutions.",
  closing: "SCUBA = Strategy • Clarity • Understanding • Balance • Achievement",
} as const;

export const philosophy = [
  {
    letter: "S",
    title: "Strategy",
    description:
      "Create a financial strategy aligned with your objectives, priorities and time horizon.",
  },
  {
    letter: "C",
    title: "Clarity",
    description:
      "Simplify complex financial decisions and help you understand the choices available to you.",
  },
  {
    letter: "U",
    title: "Understanding",
    description:
      "Understand your financial situation, goals, risk considerations and investment requirements before making decisions.",
  },
  {
    letter: "B",
    title: "Balance",
    description:
      "Maintain an appropriate balance between growth, protection, liquidity and long-term objectives.",
  },
  {
    letter: "A",
    title: "Achievement",
    description:
      "Track progress towards your financial goals and make informed adjustments as circumstances evolve.",
  },
] as const;

export const servicesIntro = {
  heading: "Comprehensive Financial Solutions",
  intro:
    "Different stages of life require different financial decisions. SCUBA CAPITAL provides access to a range of financial solutions designed to support investment, protection, liquidity, retirement and long-term wealth objectives.",
} as const;

export const services = [
  {
    id: "mutual-funds",
    label: "Investments",
    title: "Mutual Fund Solutions",
    subtitle: "Invest with purpose. Plan with perspective.",
    description:
      "Mutual funds can play an important role in a long-term investment strategy. We help investors approach mutual fund investing through the lens of their goals, time horizon, portfolio structure and broader financial plan.",
    items: [
      "Mutual fund portfolio review",
      "Portfolio consolidation",
      "SIP planning",
      "Goal-based investment planning",
      "Portfolio monitoring",
      "Investment review and rebalancing considerations",
      "Long-term wealth creation planning",
    ],
    note: "AMFI Registration Number: ARN-288339. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.",
  },
  {
    id: "financial-planning",
    label: "Planning",
    title: "Financial Planning",
    subtitle:
      "Know where you are. Define where you want to go. Plan the path between them.",
    description:
      "A strong financial plan begins with understanding. We look at your financial priorities, goals and requirements to help create a more structured view of your financial journey.",
    items: [
      "Financial goal identification",
      "Goal prioritisation",
      "Investment planning",
      "Cash-flow planning",
      "Risk assessment",
      "Retirement planning",
      "Children's education planning",
      "Wealth accumulation planning",
      "Succession and legacy considerations",
    ],
  },
  {
    id: "portfolio-review",
    label: "Review",
    title: "Portfolio Review & Financial Health Check",
    subtitle: "One Portfolio. One View. Better Clarity.",
    description:
      "Your financial portfolio should evolve as your life changes. An investment portfolio accumulated over time can become difficult to evaluate as products, goals and financial priorities change. A structured review can help you understand what you own, why you own it and whether it continues to fit your broader financial objectives.",
    items: [
      "Existing investments",
      "Portfolio concentration",
      "Goal alignment",
      "Risk considerations",
      "Liquidity requirements",
      "Duplication of investments",
      "Gaps in financial planning",
    ],
    cta: "Request a Portfolio Review",
  },
  {
    id: "protection",
    label: "Protection",
    title: "Protection Solutions",
    subtitle: "Protect the people, priorities and progress that matter most.",
    description:
      "Financial planning is incomplete without considering protection. We help clients evaluate their protection requirements and understand whether existing arrangements adequately address important financial risks.",
    items: [
      "Health insurance",
      "Term insurance",
      "Insurance portfolio review",
      "Policy requirement analysis",
      "Protection gap assessment",
      "Claim-related assistance and coordination",
    ],
    note: "Insurance products are subject to the terms, conditions and exclusions of the respective insurance policy.",
  },
  {
    id: "fixed-income",
    label: "Fixed Income",
    title: "Fixed Income & Corporate Investment Solutions",
    subtitle: "Access fixed-income-oriented opportunities with clarity.",
    description:
      "For investors seeking opportunities across fixed-income-oriented solutions, SCUBA CAPITAL can facilitate access to suitable products based on eligibility, availability and applicable regulations.",
    items: ["Corporate Fixed Deposits", "Bonds", "Fixed-income opportunities"],
    note: "All products are subject to their respective issuer/product terms, conditions and risks.",
  },
  {
    id: "loan-against",
    label: "Liquidity",
    title: "Loan Against Investments",
    subtitle:
      "Explore liquidity without automatically disrupting your broader financial strategy.",
    description:
      "Where appropriate and subject to eligibility and lender terms, clients may explore financing solutions against eligible investments. This can provide an additional liquidity option while allowing clients to evaluate their financing needs alongside their broader financial strategy.",
    items: [
      "Financing against eligible investments",
      "Liquidity without necessarily selling holdings",
      "Evaluated alongside your broader strategy",
    ],
    note: "Loan availability, interest rates, collateral requirements and terms are determined by the respective lending institution.",
  },
] as const;

export const products = [
  "Mutual Funds",
  "Specialised Investment Funds",
  "Health Insurance",
  "Term Insurance",
  "Alternate Investment Funds",
  "Corporate FDs",
  "NPS",
  "Loan Against Mutual Funds",
  "Will Planning",
  "Private Family Trust",
  "Portfolio Management Services",
] as const;

export const servicesPageIntro = {
  eyebrow: "Our Services",
  heading: "Four Pillars of Financial Planning",
  intro:
    "SCUBA CAPITAL organises its advisory approach across four core segments — personal finance, risk management, retirement, and succession — so every recommendation fits within a structured, goal-oriented financial plan.",
} as const;

export const serviceSegments = [
  {
    id: "personal-finance",
    shortLabel: "Invest",
    title: "Personal Finance & Investment Planning",
    image: siteImages.segments["personal-finance"],
    intro:
      "Build a financial foundation around the goals that matter to you. From investment planning and mutual fund solutions to children's education and long-term wealth creation, we help bring structure to your financial priorities.",
    services: [
      {
        title: "Financial goal planning",
        description:
          "We help you identify, prioritise and timeline your financial objectives — whether buying a home, funding education, building wealth or preparing for major life events — so every decision connects back to what matters most.",
      },
      {
        title: "Investment planning & asset allocation",
        description:
          "A structured approach to how your money is invested across asset classes, aligned to your goals, time horizon and risk comfort — rather than chasing products in isolation.",
      },
      {
        title: "Mutual fund & SIP planning",
        description:
          "We facilitate mutual fund solutions and systematic investment plans aligned to your financial goals, portfolio structure and long-term strategy. AMFI Registration Number: ARN-288339. Mutual fund investments are subject to market risks.",
      },
      {
        title: "Portfolio review & optimisation",
        description:
          "A structured review of your existing investments to understand what you own, whether holdings remain aligned to your goals, and where concentration, duplication or gaps may need attention.",
      },
      {
        title: "Children's education planning",
        description:
          "Planning and investing toward education goals with appropriate time horizons, inflation considerations and liquidity needs — so you can prepare with greater clarity and discipline.",
      },
      {
        title: "Tax-efficient financial planning",
        description:
          "Evaluating how tax considerations fit within your broader financial structure, so investment and planning decisions are made with a more complete picture in mind.",
      },
      {
        title: "Wealth creation & financial independence",
        description:
          "Long-term strategies focused on disciplined wealth building and moving toward greater financial independence — structured around your priorities, not short-term market noise.",
      },
    ],
  },
  {
    id: "risk-management",
    shortLabel: "Protect",
    title: "Risk Management",
    image: siteImages.segments["risk-management"],
    intro:
      "Wealth creation is only one part of financial planning. Protecting what you have built is equally important. We help evaluate protection needs, financial risks and potential gaps so your broader strategy is not built on an incomplete foundation.",
    services: [
      {
        title: "Life insurance & protection planning",
        description:
          "Evaluating life insurance requirements based on your financial responsibilities, dependents and long-term obligations — so protection levels reflect your actual needs.",
      },
      {
        title: "Health insurance planning",
        description:
          "Understanding health cover requirements and reviewing whether existing arrangements adequately address medical and hospitalisation risks for you and your family.",
      },
      {
        title: "Insurance portfolio review",
        description:
          "A consolidated look at your existing insurance policies — coverage, overlaps, gaps and relevance — so you know what protection you actually have in place.",
      },
      {
        title: "Emergency fund planning",
        description:
          "Building and maintaining an appropriate liquidity buffer for unforeseen expenses, income disruptions or short-term financial needs without disrupting long-term investments.",
      },
      {
        title: "Liability & financial risk assessment",
        description:
          "Reviewing loans, obligations and financial exposures to understand how liabilities interact with your overall financial position and protection strategy.",
      },
      {
        title: "Protection-gap analysis",
        description:
          "Identifying areas where current protection arrangements may fall short of your financial responsibilities — helping you address gaps before they become problems.",
      },
      {
        title: "Family financial security planning",
        description:
          "A holistic view of how investments, protection and liquidity work together to safeguard your family's financial wellbeing across different life stages.",
      },
    ],
  },
  {
    id: "retirement",
    shortLabel: "Retire",
    title: "Retirement Planning",
    image: siteImages.segments.retirement,
    intro:
      "Retirement planning is about more than reaching a number. It is about preparing for the lifestyle you want, creating an appropriate corpus, considering inflation and longevity, and planning how your wealth can support you through the years ahead.",
    services: [
      {
        title: "Retirement goal planning",
        description:
          "Defining what retirement looks like for you — lifestyle, expenses, timelines and priorities — and translating that vision into a structured financial objective.",
      },
      {
        title: "Retirement corpus calculation",
        description:
          "Estimating the corpus required to sustain your desired lifestyle, factoring in inflation, expected expenses and the years you plan to rely on your retirement savings.",
      },
      {
        title: "Early retirement planning",
        description:
          "For those aiming to retire before conventional age, structuring a plan that accounts for a longer retirement horizon, healthcare needs and sustained income requirements.",
      },
      {
        title: "Financial independence planning",
        description:
          "Building a path toward financial independence where your assets and income streams can increasingly support your lifestyle without active employment income.",
      },
      {
        title: "Post-retirement income planning",
        description:
          "Planning how to generate steady income from your retirement corpus — through systematic withdrawals, interest, dividends or other suitable structures.",
      },
      {
        title: "Inflation & longevity planning",
        description:
          "Accounting for rising costs over decades of retirement and the possibility of living longer than expected, so your plan remains resilient over time.",
      },
      {
        title: "Retirement portfolio review",
        description:
          "Periodic assessment of your retirement investments to ensure asset allocation, risk levels and holdings remain appropriate as you approach and enter retirement.",
      },
      {
        title: "SWP / income planning",
        description:
          "Exploring systematic withdrawal strategies from mutual fund and investment portfolios to create regular post-retirement income while managing longevity risk.",
      },
    ],
  },
  {
    id: "succession",
    shortLabel: "Preserve",
    title: "Estate / Succession Planning",
    image: siteImages.segments.succession,
    intro:
      "Building wealth is one journey. Preserving and transferring it is another. We help families and business owners think ahead about wealth transfer, succession, estate liquidity and the continuity of their financial legacy.",
    services: [
      {
        title: "Will & estate planning coordination",
        description:
          "Coordinating with appropriate legal professionals to ensure your estate planning documents align with your financial arrangements and wealth transfer intentions.",
      },
      {
        title: "Wealth transfer planning",
        description:
          "Structuring how assets will be passed to the next generation — considering timing, tax implications and the financial readiness of beneficiaries.",
      },
      {
        title: "Nomination review",
        description:
          "Reviewing nominations across financial accounts, investments and insurance policies to ensure they reflect your current intentions and family structure.",
      },
      {
        title: "Business succession planning",
        description:
          "Helping business owners evaluate how ownership, control and value will transition — whether to family, partners or external parties — with financial continuity in mind.",
      },
      {
        title: "Inter-generational wealth transfer",
        description:
          "Planning the orderly transfer of wealth across generations while preserving family harmony, financial literacy and the long-term stewardship of assets.",
      },
      {
        title: "Legacy planning",
        description:
          "Going beyond numbers to define the values, intentions and structures through which you want your wealth to benefit your family and causes you care about.",
      },
      {
        title: "Estate liquidity planning",
        description:
          "Ensuring sufficient liquid assets are available to meet estate obligations, taxes and family needs without forcing a distress sale of investments or property.",
      },
    ],
  },
] as const;

export const productsIntro = {
  heading: "Solutions Across Your Financial Journey",
  intro:
    "From building wealth to protecting it and planning its eventual transfer, SCUBA CAPITAL can facilitate access to a range of financial products and solutions, subject to suitability, eligibility, availability and applicable regulations.",
} as const;

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "We understand your financial position, objectives, priorities and requirements.",
  },
  {
    step: "02",
    title: "Analyse",
    description:
      "We review your existing financial arrangements and identify opportunities, gaps and areas requiring attention.",
  },
  {
    step: "03",
    title: "Strategise",
    description:
      "We develop a structured approach based on your goals, time horizon and financial considerations.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "We help facilitate implementation of suitable financial solutions through the appropriate channels.",
  },
  {
    step: "05",
    title: "Review",
    description:
      "We encourage periodic reviews so that your financial strategy can evolve as your circumstances and objectives change.",
  },
] as const;

export const approachIntro = {
  heading: "We Don't Start With a Product. We Start With You.",
  intro:
    "Every client has a different financial journey. Our process is designed to understand the person behind the portfolio and create a structured path around their objectives.",
} as const;

export const whyUs = [
  {
    title: "Client-Centric Approach",
    description:
      "We begin by understanding the client's objectives before discussing financial solutions.",
  },
  {
    title: "Structured Financial Thinking",
    description:
      "We use a systematic framework to bring greater clarity and structure to financial decisions.",
  },
  {
    title: "Long-Term Perspective",
    description:
      "Our focus is on disciplined financial planning rather than reacting to short-term market noise.",
  },
  {
    title: "Simplified Communication",
    description:
      "Financial concepts should be understandable. We aim to explain complex ideas in clear, practical language.",
  },
  {
    title: "Relationship Driven",
    description:
      "We aim to build long-term relationships based on transparency, communication and trust.",
  },
  {
    title: "Periodic Review",
    description:
      "Financial circumstances change. Regular reviews help keep financial strategies aligned with evolving goals.",
  },
] as const;

export const aboutCompany = {
  title: "Built on Trust. Driven by Purpose.",
  body: [
    "SCUBA CAPITAL PVT LTD was created with a simple objective: to make financial decision-making more structured, understandable and goal-oriented.",
    "We believe financial success is not created by chasing every opportunity. It is built through clarity, consistency, informed decisions and long-term discipline.",
    "Our philosophy is to build relationships rather than simply transactions.",
    "We aim to become a trusted financial partner for individuals, families, professionals, entrepreneurs and business owners as they navigate their financial journey.",
  ],
} as const;

export const founder = {
  id: "satish",
  label: "OUR FOUNDER",
  name: "Mr. Satishkumar Kagre",
  displayName: "Satishkumar Kagre",
  role: "Founder & Financial Planning Professional",
  initials: "SK",
  location: "Dombivli East, Mumbai Metropolitan Region",
  experience: "Banking & Financial Services",
  education:
    "Bachelor's in Banking & Insurance — Sydenham College, University of Mumbai",
  bio: [
    "Mr. Satishkumar Kagre is the founder of SCUBA CAPITAL PVT LTD, with professional experience spanning the banking and financial services industry.",
    "With a Bachelor's Degree in Banking & Insurance from Sydenham College of Commerce & Economics, University of Mumbai, Satishkumar has developed his professional journey around understanding financial products, client requirements and the practical challenges people face while making financial decisions.",
    "His vision behind SCUBA CAPITAL is to build a professional financial solutions platform that places the client's objectives, understanding and long-term financial well-being at the centre of the relationship.",
  ],
  quote:
    "Financial planning is not about predicting the future. It is about preparing for it.",
  qualities: [
    {
      title: "Clarity of Goals",
      description: "Know what you are working towards and why it matters.",
    },
    {
      title: "Discipline in Execution",
      description: "Turn a financial strategy into consistent action.",
    },
    {
      title: "Patience for Results",
      description: "Allow long-term plans the time they need to work.",
    },
  ],
  closing:
    "Through SCUBA CAPITAL, his objective is to build long-term relationships with clients and help them approach their financial journey with greater confidence and structure.",
  credentials: [
    "Bachelor's Degree in Banking and Insurance from Sydenham College of Commerce and Economics, Churchgate, Mumbai",
    "Professional Program in Financial Services & Management from BCIDS – S.P. Jain Institute of Management and Research, Andheri, Mumbai",
    "NISM V A for Mutual Fund Distribution",
    "NISM XIII – Common Derivatives for SIF",
  ],
  image: "/founder-satish.jpg",
} as const;

/** Team / guides cards — founder only until more team members are provided */
export const financialGuides = [founder] as const;

export const audiences = [
  {
    title: "Individuals",
    description:
      "Build disciplined financial habits and work towards important life goals.",
  },
  {
    title: "Families",
    description:
      "Plan for children's education, retirement, protection and long-term family wealth.",
  },
  {
    title: "Professionals",
    description:
      "Structure investments and financial priorities alongside career and lifestyle goals.",
  },
  {
    title: "Entrepreneurs & Business Owners",
    description:
      "Evaluate personal and business-related financial requirements with a long-term perspective.",
  },
  {
    title: "Affluent & HNI Families",
    description:
      "Develop structured wealth planning strategies around preservation, growth, liquidity and succession considerations.",
  },
] as const;

export const finalCta = {
  heading: "Your Financial Journey Starts With a Conversation.",
  body: "You don't need to have all the answers before speaking to us. Whether you want to review your existing portfolio, start investing, plan for a major financial goal or simply understand your current financial position, SCUBA CAPITAL can help you begin with greater clarity.",
  closing: "Let's Understand Your Goals. Let's Plan Your Future.",
  primaryCta: "Book a Financial Consultation",
  secondaryCta: "Contact SCUBA CAPITAL Today",
} as const;

export const faqs = [
  {
    question: "What does SCUBA CAPITAL do?",
    answer:
      "SCUBA CAPITAL PVT LTD helps individuals, families, professionals, entrepreneurs and business owners approach financial planning and investment decisions with greater clarity, structure and discipline.",
  },
  {
    question: "What areas of financial planning do you cover?",
    answer:
      "Our core areas are personal finance and investment planning, risk management, retirement planning and succession planning.",
  },
  {
    question: "Do you help with mutual fund investments?",
    answer:
      "Yes. SCUBA CAPITAL facilitates mutual fund solutions and provides services including SIP planning, portfolio review, portfolio consolidation, goal-based investment planning and ongoing investment reviews. AMFI Registration Number: ARN-288339.",
  },
  {
    question: "Can you review my existing investments?",
    answer:
      "Yes. A portfolio review can help you understand existing investments, concentration, duplication, goal alignment, liquidity requirements, risk considerations and potential gaps.",
  },
  {
    question: "Do you help with retirement planning?",
    answer:
      "Yes. Retirement planning can include retirement goal planning, corpus calculation, early retirement planning, financial independence planning, post-retirement income planning, inflation and longevity considerations, portfolio review and SWP/income planning.",
  },
  {
    question: "Do you help with insurance planning?",
    answer:
      "Yes. We help evaluate health insurance, term insurance, existing insurance arrangements and potential protection gaps. Insurance products remain subject to the respective policy's terms, conditions and exclusions.",
  },
  {
    question: "Do you help business owners?",
    answer:
      "Yes. Entrepreneurs and business owners can work with SCUBA CAPITAL to evaluate personal and business-related financial requirements from a long-term perspective, including succession considerations.",
  },
  {
    question: "Is financial planning only for wealthy investors?",
    answer:
      "No. Financial planning can be useful at different stages of life. The objective is to understand your current position, define your priorities and create a structured approach appropriate to your circumstances.",
  },
  {
    question: "Are returns guaranteed?",
    answer:
      "No. Investment returns are not guaranteed unless explicitly stated under the applicable product terms. Market-linked investments involve risk.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a conversation. Share your goals, current financial situation and the areas where you would like greater clarity. We can then understand whether and how SCUBA CAPITAL can assist.",
  },
] as const;

export const resourceCategories = [
  "Financial Planning",
  "Mutual Funds",
  "SIPs",
  "Retirement Planning",
  "Risk Management",
  "Insurance",
  "Wealth Planning",
  "Succession & Legacy",
  "Investor FAQs",
] as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Resources", href: "/#resources" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact" },
] as const;
