import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | SCUBA CAPITAL PVT LTD",
  description:
    "Get in touch with SCUBA CAPITAL for financial planning, mutual fund solutions, portfolio review and wealth guidance.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
