"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            height: "calc(100% + 200px)",
            top: "-150px",
          }}
        >
          <Image
            src="/images/family-kitchen-countertop.webp"
            alt="Family gathering around a stone countertop in a modern kitchen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized // Use unoptimized for better compatibility with parallax effect
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About Stone Concepts</h1>
            <p className="mt-6 text-lg leading-8">
              More than countertops — a story of purpose, craftsmanship, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              More Than Countertops — A Story of Purpose
            </h2>
            <div className="mt-10 flex flex-col gap-x-8 gap-y-12 lg:flex-row">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-lg leading-8 text-gray-600">
                  I started this business in 2002 after working in the stone industry for 16 years.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  Early on, I worked for a guy named Scott who ran a small store in Framingham. He taught me something
                  simple: treat every customer like family. Work hard. Care about the details. Help people get it right.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  I loved that. But as I moved through bigger companies, I saw that approach disappear. It became about
                  volume, pressure, commissions. I wanted to get back to what Scott showed me.
                </p>

                <p className="text-lg leading-8 text-gray-600">So, I started Stone Concepts.</p>

                <p className="text-lg leading-8 text-gray-600">
                  For over 20 years now, we've done one thing: help people choose and install the right countertops.
                  We're not a showroom trying to move inventory. We're a small team that knows stone—how it looks, how
                  it performs, how the veins will flow across your kitchen.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  We'll show you your options, answer your questions honestly, and help you feel confident in your
                  choice.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  That's it. No pressure. No gimmicks. Just straightforward guidance from people who've been doing this
                  a long time.
                </p>

                <p className="text-lg leading-8 text-gray-600 font-medium">— Bill Carey, Founder</p>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/images/fantasy-brown-kitchen-hudson.webp"
                  alt="Stone Concepts craftsmanship"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover"
                  loading="eager" // Change to eager loading
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to work with our team?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to schedule a consultation and get started on your custom countertop project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
