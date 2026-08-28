import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SCUBA CAPITAL PVT LTD | Financial Planning & Wealth Solutions",
  description:
    "SCUBA CAPITAL PVT LTD helps individuals, families, professionals and business owners approach financial planning, mutual fund solutions, protection and wealth management with greater clarity and discipline.",
  keywords: [
    "SCUBA CAPITAL",
    "SCUBA CAPITAL PVT LTD",
    "financial planning",
    "wealth planning",
    "mutual fund distributor",
    "mutual fund solutions",
    "portfolio review",
    "SIP planning",
    "financial consultant",
    "investment planning",
    "retirement planning",
    "wealth solutions",
    "financial planning Mumbai",
  ],
  openGraph: {
    title: "SCUBA CAPITAL PVT LTD | Financial Planning & Wealth Solutions",
    description:
      "Dive Deep. Invest Smart. Achieve More. Plan with Clarity. Grow with Confidence.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
