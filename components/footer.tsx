import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Twitter, MapPin } from "lucide-react"

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
            {/* Location Added Below */}
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="hover:text-white">
                10 Technology Dr, Unit 40, Hudson, MA, 01749
              </span>
            </div>

            {/* Service Area Links */}
            <div className="mt-4 text-gray-300">
              {[
                { name: "bolton", href: "/service-area/bolton" },
                { name: "berlin", href: "/service-area/berlin" },
                { name: "hopkinton", href: "/service-area/hopkinton" },
                { name: "northborough", href: "/service-area/northborough" },
              ].map((loc, index, arr) => (
                <span key={loc.name}>
                  <Link
                    href={loc.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {loc.name}
                  </Link>
                  {index < arr.length - 1 && <span className="mx-1 text-gray-500">|</span>}
                </span>
              ))}
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
          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <Link
              href="https://www.facebook.com/StoneConceptsGranite/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Facebook className="h-5 w-5" />
            </Link>

            <Link
              href=" https://www.instagram.com/stoneconcepts_inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </Link>

            <Link
              href="https://x.com/IncConcept22776"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-gray-800 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Stone Concepts, Inc. All rights reserved.
        </div>
        <div className="mt-4 text-sm text-gray-400 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="/term-condition" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
