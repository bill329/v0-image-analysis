"use client";

import Image from "next/image";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "1. What types of countertops do you offer?",
    answer: `We offer granite, quartz, quartzite, marble, porcelain, and soapstone countertops. You can choose from a range of colors, patterns, and finishes. Looking for the best match for your kitchen or bathroom’s style becomes easier with our team’s expert support.`,
  },
  {
    question: "2. How do I get started with my countertop project?",
    answer: `Getting started is simple—just give us a call to schedule a free consultation. During this meeting, we'll discuss your design preferences and review material options that fit your style and budget. From there, we'll guide you through every step of the process, from selection to installation, ensuring a smooth experience from start to finish.`,
  },
  {
    question: "3. Do you provide countertop installation services?",
    answer: `Yes, we do. Stone Concepts offers professional countertop installation services throughout Massachusetts. Our experienced team specializes in precise cutting, fitting, and finishing to ensure your granite or quartz countertops are installed flawlessly. Whether it's your kitchen or bathroom, we deliver expert craftsmanship and a perfect fit every time.`,
  },
  {
    question: "4. How long does the process take?",
    answer: `The timeline varies depending on the size of your project, material selection, and complexity of the installation. On average, the entire process—from initial consultation and measurements through fabrication to final installation—takes 1-2 weeks. Regardless of your project's scope, we're committed to delivering a flawless finish that's worth the wait.`,
  },
  {
    question: "5. Are your countertops sealed?",
    answer: `Yes, we seal all natural stone countertops during installation to protect against stains. Quartz countertops, on the other hand, are non-porous and don't require sealing. To maintain the beauty and longevity of any countertop, we recommend regular cleaning and proper care.`,
  },
  {
    question: "6. Can I install new countertops over my existing ones?",
    answer: `It depends on your specific situation. Our team will need to inspect your existing countertops and evaluate the structural integrity, condition, and proper fit before determining if this is possible. After the assessment, we'll recommend the best approach for your countertop upgrade—whether that means installing over your current surface or removing it first. Our goal is to ensure a seamless, long-lasting result.`,
  },
  {
    question:
      "7. What maintenance is required for granite and quartz countertops?",
    answer: `Granite countertops should be resealed every 1-2 years to maintain their protective barrier against stains. Quartz countertops are lower maintenance—simply clean them regularly with mild soap and water to keep them looking pristine. Both materials are durable and easy to care for with these simple steps.`,
  },
  {
    question: "8. Do you offer custom edge profiles for countertops?",
    answer: `Absolutely. We offer a range of edge profiles. You can choose from bullnose, ogee, and bevel. Our team will help you choose the right profile that complements the style of your space, giving your countertop a polished and elegant finish.`,
  },
  {
    question: "9. What should I do to prepare for countertop installation?",
    answer: `If you're replacing existing countertops, please disconnect the plumbing beforehand so we can remove the old counters. We also recommend removing drawers and emptying cabinets, as the removal process can create dust and debris. If you're installing countertops on new cabinets, no preparation is needed—we'll handle everything from there.`,
  },
  {
    question: "10. How do I get a quote for my countertop project?",
    answer: `Simply give us a call or send us an email to get started. One of our experts will discuss your requirements, preferences, and budget with you. We'll provide a detailed and transparent quote for your countertop.`,
  },
];

const FaqComp = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/stone-gallery-warehouse.webp"
            alt="Stone gallery warehouse with various marble and granite slabs"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              FAQs
            </h1>
            <p className="mt-6 text-lg leading-8">Your Questions Answered</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border  overflow-hidden shadow-sm">
            <button
              className="w-full text-left px-6 py-4 bg-white flex justify-between items-center font-medium hover:bg-gray-300 transition"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className=" font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-200 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComp;
