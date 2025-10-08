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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About Us</h1>
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
              <div className="lg:w-1/2">
                <h3 className="text-xl font-semibold text-gray-900">Why I Started Stone Concepts</h3>
                <p className="mt-2 text-sm italic text-gray-600">By Bill Carey, Founder</p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  It was 3:00 a.m. on December 29, 2001. My boys, Tyler and Jared, were asleep—tired from the holidays.
                  The phone rang.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">It was my mother. Her voice trembled.</p>
                <p className="mt-4 text-lg italic leading-8 text-gray-600">
                  "Todd's been killed. I'm worried about your father."
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  My younger brother. My best friend. My best man. Gone in an instant—killed in a snowmobile accident.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  That call shattered me. And it shattered something else, too: the excuses I'd been using to stay in a
                  job that drained the life out of me.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  I'd been drifting for years—college, the maritime academy, photography—searching for purpose. Then in
                  1986, I took a job at a little marble-and-tile shop on Route 9 in Framingham. That's where I met
                  Scott. He worked me hard—65-hour weeks—but he also taught me how to take care of people. Really take
                  care of them. Like they were family.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">I loved it. I thought I'd found my place.</p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  But after a year and a half, I moved on to manage a franchise location. The culture was toxic. I
                  switched to wholesale, hoping it would be better. It wasn't.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Twelve years went by. I loved helping clients—but I hated everything else. Fear of failure, and the
                  pressure to provide for my kids, kept me stuck.
                </p>
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
                <p className="mt-6 text-lg leading-8 text-gray-600">Then that phone call came.</p>
                <p className="mt-4 text-lg leading-8 text-gray-600">Two months later, I started Stone Concepts.</p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  My mission was simple: get back to what Scott taught me.
                </p>
                <p className="mt-4 text-lg font-medium leading-8 text-gray-800">
                  Be real. Care deeply. Help people create spaces they love.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  That's what we do at Stone Concepts.
                  <br />
                  We're not a showroom. We're not salespeople.
                  <br />
                  We're guides—here to help you craft a space that reflects your story.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Every project we take on reminds me of Todd.
                  <br />
                  And the moment I decided to stop surviving—and start building something that matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Homes. Restoring Hope.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every project supports the fight against child trafficking.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Our Mission: Building Homes. Restoring Hope.</h3>

              <p className="text-lg leading-8 text-gray-600">The kitchen is where life happens.</p>
              <p className="text-lg leading-8 text-gray-600">Homework on the counter.</p>
              <p className="text-lg leading-8 text-gray-600">Pizza boxes after baseball.</p>
              <p className="text-lg leading-8 text-gray-600">Late-night talks with someone you love.</p>

              <p className="mt-4 text-lg leading-8 text-gray-600">We believe the countertop is more than stone.</p>
              <p className="text-lg leading-8 text-gray-600">It's the surface where real life unfolds.</p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                So we help contractors build beautiful, lasting spaces—
              </p>
              <p className="text-lg leading-8 text-gray-600">
                places where families gather, stories are told, and memories settle in for good.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 font-medium">
                But there's a deeper reason we do what we do.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Because not every child gets to grow up in a safe kitchen.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                Not every child gets home-cooked meals or bedtime stories.
              </p>
              <p className="text-lg leading-8 text-gray-600">Some are trapped in the unthinkable: child trafficking.</p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                That's why we give part of every project to fight it.
              </p>
              <p className="text-lg leading-8 text-gray-600 font-medium">Rescue. Protection. Awareness.</p>

              <p className="mt-4 text-lg leading-8 text-gray-600">We're not just building homes.</p>
              <p className="text-lg leading-8 text-gray-600">We're fighting for the kids who don't have one.</p>

              <p className="mt-4 text-lg leading-8 text-gray-600">We believe in craftsmanship that matters—</p>
              <p className="text-lg leading-8 text-gray-600">for families who gather</p>
              <p className="text-lg leading-8 text-gray-600">and children who deserve to be free.</p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                When you work with us, you're not just improving a home.
              </p>
              <p className="text-lg leading-8 text-gray-600">You're helping change the world.</p>

              <p className="mt-6 text-lg leading-8 text-gray-600 font-medium">
                Let's build something worth remembering.
              </p>
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
