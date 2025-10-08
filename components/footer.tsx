import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          <h2 className="text-2xl font-bold">STONE CONCEPTS</h2>
          <p className="max-w-md text-gray-300">
            Affordable luxury countertops expertly delivered. Every project supports the fight against child
            trafficking.
          </p>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:9785681911" className="hover:text-white">
                (978) 568-1911
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:bill@stoneconcepts.net" className="hover:text-white">
                bill@stoneconcepts.net
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Gallery", href: "/gallery" },
              { name: "Testimonials", href: "/testimonials" },
              { name: "About", href: "/about" },
              { name: "Pricing", href: "/pricing" },
              { name: "Service Area", href: "/service-area" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-gray-300 hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-gray-800 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Stone Concepts, Inc. All rights reserved.
        </div>
        <div className="mt-4 text-sm text-gray-400 md:mt-0">
          <Link href="/" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="/" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
