"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic";

const MapPage = dynamic(() => import("@/components/map"), { ssr: false });

export default function ContactPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    customerType: "homeowner",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, customerType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // console.log("Submitting form data:", formData)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // console.log("Response status:", response.status)

      const responseData = await response.json()
      // console.log("Response data:", responseData)

      if (!response.ok) {
        throw new Error(responseData.error || "Something went wrong")
      }

      // Show success state
      setIsSuccess(true)

      // Show success toast
      toast({
        title: "Quote Request Submitted",
        description: "We'll be in touch with you shortly!",
      })

      // Redirect immediately to thank-you page
      router.push("/thank-you")

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          customerType: "homeowner",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error: any) {
      console.error("Error submitting form:", error)

      setError(error.message || "There was a problem submitting your request. Please try again or call us directly.")

      toast({
        title: "Error",
        description: error.message || "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Function to handle direct email link as fallback
  const generateMailtoLink = () => {
    const subject = encodeURIComponent("Quote Request from Website")
    const body = encodeURIComponent(`
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        Customer Type: ${formData.customerType === "homeowner" ? "Homeowner" : "Contractor"}

        Message:
        ${formData.message}
    `)

    return `mailto:bill@stoneconcepts.net?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex flex-col">
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8">
              Ready to transform your space? Get in touch with us today to schedule a consultation or request a quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <div className="mt-10 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <Phone className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+19785681911" className="text-gray-600 hover:text-gray-900">
                          +1(978) 568-1911
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <Mail className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:bill@stoneconcepts.net" className="text-gray-600 hover:text-gray-900">
                          bill@stoneconcepts.net
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <div>Monday - Friday</div>
                      <div>8:00 AM - 5:00 PM</div>
                      <div>Saturday</div>
                      <div>By appointment</div>
                      <div>Sunday</div>
                      <div>Closed</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Request a Quote</h2>

              {isSuccess ? (
                <div className="mt-10 rounded-lg bg-green-50 p-6 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                  <h3 className="mt-4 text-xl font-medium text-green-800">Thank You!</h3>
                  <p className="mt-2 text-green-700">
                    Your quote request has been submitted successfully. We'll be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Are you a homeowner or contractor?</Label>
                    <RadioGroup
                      value={formData.customerType}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="homeowner" id="homeowner" />
                        <Label htmlFor="homeowner">Homeowner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contractor" id="contractor" />
                        <Label htmlFor="contractor">Contractor</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {error && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <div className="text-sm text-red-700">
                          <p>{error}</p>
                          <p className="mt-2">
                            If the issue persists, you can{" "}
                            <a href={generateMailtoLink()} className="font-medium underline hover:text-red-600">
                              email us directly
                            </a>{" "}
                            or call +1(978) 568-1911.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Get a Quote"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <MapPage />

      {/* Rest of page content... */}
      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        {/* Content remains the same */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to see our work?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Browse our gallery to see examples of our craftsmanship and get inspired for your project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="group">
                <Link href="/gallery">
                  View Our Gallery
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group bg-transparent text-white hover:bg-white/10">
                <Link href="/about">
                  Learn About Our Story
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
