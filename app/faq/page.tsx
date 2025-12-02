import type { Metadata } from "next";
import FaqComp from "./FaqComp";

export const metadata: Metadata = {
  title: "FAQ | Stone Concepts — Granite & Quartz Countertops",
  description:
    "Find answers to common questions about granite and quartz countertop installation, fabrication, maintenance, and service areas across Massachusetts.",
  alternates: {
    canonical: "https://www.stoneconcepts.net/faq",
  },
  openGraph: {
    title: "FAQ — Granite & Quartz Countertops | Stone Concepts",
    description:
      "Expert answers about countertop materials, installation, fabrication, pricing, and service areas.",
    url: "https://www.stoneconcepts.net/faq",
    siteName: "Stone Concepts",
    type: "website",
  },
};

const FAQPage = () => {
  return <FaqComp />;
};

export default FAQPage;
