"use client"
import Image from "next/image"

const PrivacyPolicy = () => {

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Stone Concepts Privacy Policy </h1>
            <p className="mt-6 text-lg leading-8">Last Updated: October 2025 </p>
          </div>
        </div>
      </section>

      <article className=" bg-white px-20 py-10 rounded-lg shadow-sm">
        <section
          id="introduction"
        >
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 border-b pb-2">
            Introduction
          </h2>
          <p className="text-slate-700 leading-relaxed">
            At <span className="font-medium">Stone Concepts, Inc.</span> (“Stone Concepts,” “we,” “us,” or
            “our”), your privacy matters. This Privacy Policy explains how we collect, use,
            disclose, and protect your personal information when you visit our website{" "}
            <a
              href="https://www.stoneconcepts.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              www.stoneconcepts.net
            </a>
            , request a quote, or otherwise interact with us. By using our website or services,
            you consent to the practices described below. If you do not agree, please discontinue
            use of our website.
          </p>
        </section>

        <section
          id="information"
        >
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            1. Information We Collect
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            We collect information in two main ways — information you provide voluntarily and
            information collected automatically.
          </p>

          <h3 className="text-lg font-medium text-slate-800 mb-2">
            a- Information You Provide Voluntarily
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            When you contact us, request a quote, or interact through our forms, you may provide:
          </p>

          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-3">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Project details (such as job site address or material preferences)</li>
            <li>Any additional information included in your messages or requests</li>
          </ul>

          <p className="text-slate-700 leading-relaxed mb-4">
            Providing this information is voluntary, though certain features (like quote requests)
            may require it. We may also receive limited information about you from trusted partners,
            referral sources, or social media interactions.
          </p>

          <h3 className="text-lg font-medium text-slate-800 mb-2">
            b- Information Collected Automatically
          </h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            When you visit our site, our servers may automatically collect “log data,” including
            your IP address, browser type, device information, pages visited, timestamps, and usage
            statistics. This helps us understand site performance and improve your experience.
          </p>
      
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            2. How We Use Your Information
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            We use the information we collect for legitimate business purposes, including:
          </p>

          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
            <li>Responding to inquiries and requests</li>
            <li>Scheduling consultations or site visits</li>
            <li>Improving our website, services, and customer experience</li>
            <li>Sending updates, promotions, or offers (if you have opted in)</li>
            <li>Detecting, preventing, or addressing fraud or security issues</li>
          </ul>

          <p className="text-slate-700 leading-relaxed mb-6">
            You may opt out of promotional communications at any time by following the unsubscribe
            link included in our emails or by contacting us directly.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            3. How We Share Your Information
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            We do not sell your personal information. We may share it only as needed with service providers,
            business partners, legal authorities, or in business transfers. Aggregated, non-identifiable
            data may also be shared for analytics or research.
          </p>
      
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            4. International Data Transfers
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            If your information is transferred outside your country (for example, to a service provider located abroad), we take appropriate safeguards such as standard contractual clauses to ensure equivalent protection.
          </p>
   
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            5. Cookies and Tracking Technologies
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            We use cookies and similar technologies to maintain session status, recognize returning users,
            analyze site usage, and deliver personalized content. You can disable cookies via browser
            settings, though some features may be affected. A cookie banner may appear on your first visit
            to manage preferences.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            We retain personal information only as long as necessary to fulfill the purposes described above
            or comply with legal obligations. For example, quote requests and project communications are
            typically retained for up to three years.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Children’s Privacy</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Our website is not directed at children under 13. We do not knowingly collect personal data from
            children. If we discover that a child has submitted information, we will delete it promptly (in
            compliance with COPPA).
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Data Security</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            We use commercially reasonable technical, administrative, and physical safeguards — including
            encryption, secure servers, and access controls — to protect your personal data. If a breach
            occurs, we will notify affected individuals and authorities as required by law.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Your Rights and Choices</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Depending on your location, you may have the right to access, correct, delete, or restrict the
            use of your data. To exercise these rights, please contact us (see Section 13). We may verify
            your identity before fulfilling requests and will respond within 30 days.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            We may update this policy periodically to reflect changes in our business practices or
            applicable laws. The revised version will be posted on this page with a new “Last Updated” date.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Third-Party Links</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Our website may contain links to external sites (e.g., suppliers, partners, or social media). We
            are not responsible for their content or data practices. Please review their privacy policies
            before providing information.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            While we take reasonable precautions to protect your personal data, we cannot guarantee absolute
            security and are not responsible for incidents beyond our control, to the extent permitted by
            law.
          </p>
       
          <h2 className="text-xl font-semibold text-slate-900 mb-4">13. Contact Us</h2>

          <p className="text-slate-700 leading-relaxed mb-2">
            If you have any questions, requests, or concerns about this Privacy Policy, please contact us:
          </p>

          <ul className="list-none text-slate-700 space-y-1">
            <li><span className="font-medium">Company:</span> Stone Concepts, Inc.</li>
            <li><span className="font-medium">Address:</span> 10 Technology Dr, Hudson, MA 01749</li>
            <li><span className="font-medium">Email:</span> <a href="mailto:bill@stoneconcepts.net" className="text-sky-600 hover:underline">bill@stoneconcepts.net</a></li>
            <li><span className="font-medium">Phone:</span> +1(978) 568-1911</li>
            <li><span className="font-medium">Website:</span> <a href="https://www.stoneconcepts.net" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.stoneconcepts.net</a></li>
          </ul>
        </section>

      </article>

    </div >
  )
}

export default PrivacyPolicy
