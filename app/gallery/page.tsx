"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SimpleGallery } from "@/components/simple-gallery"

// Gallery images with categories and captions
const galleryImages = [
  {
    src: "/images/quartzite-island-newton.webp",
    caption: "Quartzite island with mitered edge and porcelain splash - Newton, MA",
  },
  {
    src: "/images/white-quartz-vanity-newton.webp",
    caption: "White quartz master vanity - Newton, MA",
  },
  {
    src: "/images/danby-marble-backsplash-lexington.webp",
    caption: "Danby Marble backsplash - Lexington, MA",
  },
  {
    src: "/images/fantasy-brown-kitchen-hudson.webp",
    caption: "Fantasy Brown kitchen and backsplash - Hudson, MA",
  },
  {
    src: "/images/fantasy-brown-dolomite-hudson.webp",
    caption: "Fantasy Brown Dolomite with full height backsplash - Hudson, MA",
  },
  {
    src: "/images/fantasy-brown-dolomite-lexington.webp",
    caption: "Fantasy Brown Dolomite kitchen and splash - Lexington, MA",
  },
  {
    src: "/images/quartzite-island-brookline.webp",
    caption: "Quartzite Island and splash - Brookline, MA",
  },
  {
    src: "/images/fantasy-brown-kitchen-lexington.webp",
    caption: "Fantasy Brown kitchen and back splash - Lexington, MA",
  },
  {
    src: "/images/white-quartz-vanity-lexington.webp",
    caption: "White quartz vanity with wall faucets and apron - Lexington, MA",
  },
  {
    src: "/images/danby-marble-kitchen-lexington.jpeg",
    caption: "Danby Marble kitchen with white cabinets - Lexington, MA",
  },
  {
    src: "/images/taj-mahal-quartzite-splash-brookline.webp",
    caption: "Taj Mahal quartzite full height splash - Brookline, MA",
  },
  {
    src: "/images/taj-mahal-quartzite-island-brookline.webp",
    caption: "Taj Mahal quartzite island with waterfall leg - Brookline, MA",
  },
  {
    src: "/images/pure-white-quartz-vanity-brookline.webp",
    caption: "Pure White quartz vanity top - Brookline, MA",
  },
  {
    src: "/images/danby-marble-kitchen-island-lexington.webp",
    caption: "Danby Marble kitchen island and splash - Lexington, MA",
  },
  {
    src: "/images/porcelain-island-new-hampshire.jpeg",
    caption: "Porcelain Island - New Hampshire",
  },
  {
    src: "/images/absolute-black-granite-vanity-brookline.webp",
    caption: "Absolute Black granite vanity - Brookline, MA",
  },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/quartzite-island-newton.webp"
            alt="Stone countertops showcase"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Gallery</h1>
            <p className="mt-6 text-lg leading-8">
              Browse our portfolio of completed projects to see the quality and craftsmanship we bring to every
              installation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Showcase</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our completed projects. Click on any image to view details.
            </p>
          </div>

          {/* Gallery Grid with Lightbox */}
          <SimpleGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to create your own stunning space?
            </h2>
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
