"use client"
import Image from "next/image"

const TermCondition = () => {
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
              Stone Concepts Terms & Conditions
            </h1>
            <p className="mt-6 text-lg leading-8">Effective Date: October 2025</p>
          </div>
        </div>
      </section>

      <article className="bg-white px-20 py-10 rounded-lg shadow-sm space-y-6">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 border-b pb-2">
            Introduction
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms & Conditions (“Terms”) govern your use of our website, communications, and any contract with Stone Concepts, Inc. (“Stone Concepts,” “we,” “us,” or “our”) for stone fabrication, installation, or related services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please refrain from using our site or services. These Terms apply to both residential and commercial clients unless otherwise stated in writing.
          </p>
        </section>

        {/* Definitions & Interpretation */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Definitions & Interpretation</h2>
          <p className="text-slate-700 leading-relaxed">
            “We,” “Us,” “Our,” or “Stone Concepts” refers to Stone Concepts, Inc., its affiliates, employees, and agents.
            “Services” include consultation, measurement, fabrication, installation, delivery, and any associated work we perform.
            “Contract” means any written or electronic agreement between Stone Concepts and the Client, including proposals, quotes, or work orders, incorporating these Terms.
            If any inconsistency exists between these Terms and a signed contract, the signed contract prevails.
          </p>
        </section>

        {/* Acceptance & Order Process */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Acceptance & Order Process</h2>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Quotations & Estimates:</strong> All quotations are valid for 30 days unless otherwise stated. Pricing may change if project specifications, materials, or measurements differ after templating.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Deposit & Payment Terms:</strong> A non-refundable deposit of 30–50% (as stated in the quote) is required before work commences. The remaining balance is due before or at installation. Payment must be made by cash, check, or approved electronic transfer.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Changes & Cancellations:</strong> Requests for changes must be made in writing prior to fabrication. Once fabrication begins, cancellations are subject to material and labor costs incurred. Custom materials cannot be returned.
          </p>
        </section>

        {/* Materials, Fabrication & Installation */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Materials, Fabrication & Installation</h2>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Material Variations:</strong> Natural stone and quartz surfaces may vary in color, veining, and texture. These variations are inherent characteristics, not defects.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Inspection & Approval:</strong> Clients are encouraged to view and approve slabs in person before cutting. Once cutting begins, changes cannot be made.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Site Conditions:</strong> Cabinets, appliances, and fixtures must be level and properly installed before templating. Additional trips or delays caused by incomplete site readiness may incur additional charges.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Warranty & Limitations:</strong> Stone Concepts warrants its fabrication and installation workmanship for one (1) year from the installation date under normal residential use. This warranty excludes damage caused by misuse, abuse, chemical exposure, impact, or structural movement. Natural characteristics such as pits, fissures, and color variations are not covered. Proof of purchase and payment in full are required for warranty service.
          </p>
        </section>

        {/* Delivery, Risk & Title */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Delivery, Risk & Title</h2>
          <p className="text-slate-700 leading-relaxed">
            Ownership of all materials remains with Stone Concepts until full payment is received. Risk of loss passes to the client upon delivery. Clients must inspect all materials within 48 hours of delivery and notify Stone Concepts of any visible damage. Delays due to weather, supply chain, or causes beyond our control shall not constitute breach of contract.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Intellectual Property & Use of Content</h2>
          <p className="text-slate-700 leading-relaxed">
            All materials on our website, including designs, images, text, and logos, are protected by copyright and trademark laws. You may not reproduce or commercially use any content without prior written consent. We may use photographs of completed projects for marketing purposes unless you request otherwise in writing before project completion.
          </p>
        </section>

        {/* Comments, Feedback & User Content */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Comments, Feedback & User Content</h2>
          <p className="text-slate-700 leading-relaxed">
            If you provide feedback, testimonials, or photos, you grant Stone Concepts a non-exclusive, royalty-free license to use, reproduce, and publish such content for marketing purposes. We reserve the right to remove or edit content that is unlawful, defamatory, or infringes others’ rights. Opinions expressed in reviews are those of the individual and do not necessarily reflect the views of Stone Concepts.
          </p>
        </section>

        {/* Limitation of Liability & Indemnity */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Limitation of Liability & Indemnity</h2>
          <p className="text-slate-700 leading-relaxed">
            To the maximum extent permitted by law, Stone Concepts’ liability for any claim shall not exceed the total amount paid under the applicable contract. We are not liable for indirect, incidental, or consequential losses, including loss of profit or business interruption.
          </p>
          <p className="text-slate-700 leading-relaxed">
            You agree to indemnify and hold harmless Stone Concepts, its employees, and contractors from claims arising from misuse of products, unsafe site conditions, or breach of these Terms.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Termination</h2>
          <p className="text-slate-700 leading-relaxed">
            Either party may terminate the contract in writing for cause if the other party materially breaches the agreement and fails to remedy within seven (7) days of written notice. Stone Concepts reserves the right to suspend or terminate work if unsafe site conditions exist or if payment is not made as agreed.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Governing Law & Dispute Resolution</h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms are governed by the laws of the Commonwealth of Massachusetts. Any disputes shall first be submitted to mediation. If unresolved, disputes may proceed to binding arbitration or litigation in Middlesex County, Massachusetts. You waive any right to participate in a class-action lawsuit related to these Terms.
          </p>
        </section>

        {/* Miscellaneous */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Miscellaneous</h2>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Force Majeure:</strong> We are not liable for delays or non-performance due to circumstances beyond our control, including natural disasters, labor strikes, or supply chain disruptions.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Severability:</strong> If any provision of these Terms is deemed invalid, the remaining provisions remain in effect.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Waiver:</strong> Our failure to enforce any right does not waive that right.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Assignment:</strong> You may not assign these Terms without written consent. We may assign them to affiliates or successors.
          </p>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>Notices:</strong> All notices must be sent to the contact details provided in the Contract or as listed on our website.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h2>
          <ul className="list-none text-slate-700 space-y-1">
            <li><span className="font-medium">Company:</span> Stone Concepts, Inc.</li>
            <li><span className="font-medium">Address:</span> 10 Technology Dr, Hudson, MA 01749</li>
            <li><span className="font-medium">Email:</span> <a href="mailto:bill@stoneconcepts.net" className="text-sky-600 hover:underline">bill@stoneconcepts.net</a></li>
            <li><span className="font-medium">Phone:</span> +1(978) 568-1911</li>
            <li><span className="font-medium">Website:</span> <a href="https://www.stoneconcepts.net" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.stoneconcepts.net</a></li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default TermCondition
