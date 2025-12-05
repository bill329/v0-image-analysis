import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-xl font-bold">STONE CONCEPTS</h2>
          <p className="max-w-md text-sm text-gray-300">
            Affordable luxury countertops expertly delivered. Every project supports the fight against child
            trafficking.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:9785681911" className="hover:text-white">
                (978) 568-1911
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:bill@stoneconcepts.net" className="hover:text-white">
                bill@stoneconcepts.net
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-1.5">
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
                <Link href={item.href} className="text-sm text-gray-300 hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-gray-800 px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Stone Concepts, Inc. All rights reserved.
        </div>
        <div className="mt-2 text-xs text-gray-400 md:mt-0">
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
