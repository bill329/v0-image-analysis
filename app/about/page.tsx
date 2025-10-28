import type { Metadata } from "next"
import AboutPageNew from "./AboutPage"

// ✅ SEO Metadata (Server Component)
export const metadata: Metadata = {
  title: "About Granite & Quartz Countertop Services | Stone Concepts",
  description:
    "Learn about Stone Concepts, a trusted provider of granite and quartz countertop installations in Massachusetts. Committed to quality and customer satisfaction.",
  alternates: {
    canonical: "https://www.stoneconcepts.net/about",
  },
  openGraph: {
    title: "About Stone Concepts | Granite & Quartz Countertop Experts in Massachusetts",
    description:
      "Learn about our story, values, and dedication to precision craftsmanship and purpose-driven design at Stone Concepts.",
    url: "https://www.stoneconcepts.net/about",
    siteName: "Stone Concepts",
    images: [
      {
        url: "https://www.stoneconcepts.net/images/family-kitchen-countertop.webp",
        width: 1200,
        height: 630,
        alt: "Stone Concepts - About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Stone Concepts | Granite & Quartz Countertop Experts in Massachusetts",
    description:
      "A story of purpose, craftsmanship, and community — discover how Stone Concepts began and what drives our mission today.",
    images: ["https://www.stoneconcepts.net/images/family-kitchen-countertop.webp"],
  },
}

export default function aboutPage() {
  return <AboutPageNew />
}
