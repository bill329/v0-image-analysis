
export const metadata = {
  title: "Contact Stone Concepts | Affordable Luxury Countertops",
  description:
    "Learn about Stone Concepts, a trusted provider of granite and quartz countertop installations in Massachusetts. Committed to quality and customer satisfaction.",
  keywords:
    "contact stone concepts, countertop quote, stone installation, granite countertops, quartz, Massachusetts",
  openGraph: {
    title: "Contact Stone Concepts | Affordable Luxury Countertops",
    description:
      "Learn about Stone Concepts, a trusted provider of granite and quartz countertop installations in Massachusetts. Committed to quality and customer satisfaction.",
    url: "https://www.stoneconcepts.net/contact",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.stoneconcepts.net/contact",
  },
}

import ContactForm from "./ContactFormClient"

export default function ContactPage() {
  return <ContactForm />
}
