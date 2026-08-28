import type { Metadata } from "next";
import { BlogPageContent } from "@/components/sections/BlogPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Insights",
  description:
    "Educational articles on financial goal planning, SIP discipline and portfolio review from SCUBA CAPITAL — also on Medium.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogPageContent />;
}
