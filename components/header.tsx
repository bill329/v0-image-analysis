"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Service Area", href: "/service-area" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-6" aria-label="Global">
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Stone Concepts</span>
            <Image
              src="/images/stone-concepts-logo.png"
              alt="Stone Concepts, Inc."
              width={200}
              height={80}
              className="h-auto w-auto max-h-[50px] sm:max-h-[70px]"
              priority
              unoptimized
            />
            <div className="ml-2 sm:ml-3 text-lg sm:text-2xl font-semibold tracking-tight text-gray-900 hidden sm:block font-['Georgia_Pro']">
              Stone Concepts, Inc.
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-1.5 inline-flex items-center justify-center rounded-md p-3 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          <div className="text-center">
            <div className="text-xs text-gray-500">Call or Text</div>
            <a href="tel:9785681911" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              (978) 568-1911
            </a>
          </div>
          <Button asChild size="sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-gray-200 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Stone Concepts</span>
              <Image
                src="/images/stone-concepts-logo.png"
                alt="Stone Concepts, Inc."
                width={150}
                height={60}
                className="h-auto w-auto max-h-[40px]"
                priority
                unoptimized
              />
              <div className="ml-2 text-lg font-semibold tracking-tight text-gray-900 font-['Georgia_Pro']">
                Stone Concepts
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <div className="-mx-3 block rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors">
                  <div className="text-sm font-medium text-gray-500">Call or Text</div>
                  <a
                    href="tel:9785681911"
                    className="text-lg font-semibold leading-7 text-gray-900 block mt-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    (978) 568-1911
                  </a>
                </div>
                <div className="px-3">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
