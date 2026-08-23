import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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
  title: "Scuba Capital | Financial Planning & Investment Advisory",
  description:
    "Scuba Capital helps professionals and families build, protect, and grow wealth through goal-based financial planning, mutual fund advisory, and insurance solutions.",
  keywords: [
    "financial planning",
    "mutual funds",
    "SIP",
    "investment advisory",
    "AMFI registered",
    "Mumbai",
    "Scuba Capital",
  ],
  openGraph: {
    title: "Scuba Capital | Financial Planning & Investment Advisory",
    description:
      "Financial clarity at every depth. Goal-based planning for professionals at every stage of life.",
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
      </body>
    </html>
  );
}
