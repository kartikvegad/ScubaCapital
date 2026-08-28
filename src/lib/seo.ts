import type { Metadata } from "next";
import { blogPosts, siteConfig } from "@/lib/constants";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scubacapital.in";

const defaultDescription =
  "SCUBA CAPITAL PVT LTD — AMFI-registered Mutual Fund Distributor (ARN-288339). Goal-based mutual fund distribution, SIP planning, portfolio review, protection and retirement planning in Dombivli East, Mumbai.";

export const defaultKeywords = [
  "SCUBA CAPITAL",
  "SCUBA CAPITAL PVT LTD",
  "mutual fund distributor Mumbai",
  "mutual fund distributor Dombivli",
  "AMFI registered MFD",
  "ARN-288339",
  "SIP planning",
  "portfolio review",
  "retirement planning",
  "financial goal planning",
  "mutual fund solutions",
  "wealth planning India",
] as const;

type CreatePageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "",
  image = "/scuba-capital-logo.svg",
  type = "website",
  publishedTime,
}: CreatePageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.legalName,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.legalName} | Mutual Fund Distributor`,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [...defaultKeywords],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.legalName} | Mutual Fund Distributor`,
    description: defaultDescription,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/scuba-capital-logo.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.legalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} | Mutual Fund Distributor`,
    description: defaultDescription,
    images: [`${siteUrl}/scuba-capital-logo.svg`],
  },
  authors: [{ name: siteConfig.legalName, url: siteUrl }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Finance",
  icons: {
    icon: "/scuba-capital-logo-white.svg",
    apple: "/scuba-capital-logo-white.svg",
  },
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/scuba-capital-logo.svg`,
    image: `${siteUrl}/scuba-capital-logo.svg`,
    description: defaultDescription,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, SK Solutions Co-working Space, Kohinoor Plaza Building, Tata Power, Above Ambika Pure Veg",
      addressLocality: "Dombivli East",
      addressRegion: "Maharashtra",
      postalCode: "421201",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: Object.values(siteConfig.social),
    identifier: siteConfig.amfiArn,
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.legalName,
    url: siteUrl,
    description: defaultDescription,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };
}

export function getArticleJsonLd(post: (typeof blogPosts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/scuba-capital-logo.svg`,
      },
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    url: post.mediumUrl,
  };
}

export function getFaqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
