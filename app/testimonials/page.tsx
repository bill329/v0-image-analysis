import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Replace the testimonials array with the actual testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Bill helped me all the way, especially in the most daunting part of the process: selecting the right stone. He took me to visit a warehouse where I was mesmerized by the amount and variety of selections. I could have spent literally days there, without being able to come to a decision. By looking at my reactions in front of the slabs, and with few well targeted questions, Bill was able to understand what I was looking for. His input was invaluable in pointing out to me possible choices that I would have totally overlooked. When I fell in love with a particular kind of granite that was already sold, he helped me find the same stone at another vendor. He finally crafted it beautifully into my kitchen countertops. Thank you so much Bill!",
    author: "Tiziana",
    location: "",
  },
  {
    id: 2,
    quote:
      "Everyone who sees the superb granite countertops in our kitchen can't believe the workmanship that went into the seamless beauty of the project. The product is the greatest quality we have seen, the workmanship was seamless, the workers were courteous and extremely knowledgeable, and the assistance you gave us in walking through the process step-by-step was matchless with other vendors we contacted. I would recommend your services to friends and family and would definitely be a repeat customer if the opportunity presents itself.",
    author: "C. Caunt",
    location: "",
  },
  {
    id: 3,
    quote:
      "I absolutely LOVED working with Bill at Stone Concepts!! He walked us through the process! Helped us find locations to view different stone in person and helped us understand what would be in our budget! Installation went smoothly as well. Thank you so much, we would highly recommend!",
    author: "Jenna Sarosi",
    location: "",
  },
  {
    id: 4,
    quote:
      "I recently had the pleasure of working with Stone Concepts for my new countertops, and I can't say enough about the experience! From start to finish, it was seamless, professional, and incredibly cost-effective. I'm located in Barre, VT, which is outside of their typical service area, but they went above and beyond to make it happen. Despite the distance, they still managed to save me 30% compared to the local quotes I received—and that's even after factoring in the trip charge! But the real highlight? The countertops themselves. They are STUNNING. Absolutely gorgeous. I've caught myself just standing there staring at them, not wanting to put a single thing on top of them because they're truly a masterpiece. The quality and craftsmanship are second to none. It's clear that Stone Concepts has an eye for detail and takes pride in delivering perfection.",
    author: "Fran Olsen",
    location: "Barre, VT",
  },
  {
    id: 5,
    quote:
      "Extremely happy with the product, service and installation. Bill was great to work with coordinating easily with my contractor to get the job done.",
    author: "Carol Simpson",
    location: "",
  },
  {
    id: 6,
    quote:
      "Couldn't be happier with the results of our granite counter top installation! Our first experience with granite and Bill made the process very easy for us. After the installers were done, they cleaned up and took away all the trash. Our kitchen looks amazing! Thanks guys.",
    author: "Neil Phaneuf",
    location: "",
  },
  {
    id: 7,
    quote: "These guys are top notch! Extremely professional, fast and deliver quality product and work!",
    author: "Jessica Saart",
    location: "",
  },
  {
    id: 8,
    quote: "Responsive, quick turnaround time and smooth install, extremely pleased with our new kitchen counter!",
    author: "John Alpers",
    location: "",
  },
  {
    id: 9,
    quote:
      "Bill and the Stone Concepts team made our entire countertop selection, templating, and installation process a breeze! Everything was timely and well communicated. We're very happy with the results!",
    author: "Paulina Scarlata",
    location: "",
  },
  {
    id: 10,
    quote:
      "From start to finish, Bill at Stone Concepts made the process easy and fast. The crew that came out to install was very meticulous with an eye for every last detail. I would highly recommend Stone Concepts to anyone looking for new countertops.",
    author: "Frank Lombardo",
    location: "",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/quartzite-island-west-newton.webp"
            alt="Luxury kitchen with quartzite island and backsplash in West Newton"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">What Our Clients Say</h1>
            <p className="mt-6 text-lg leading-8">
              Don't just take our word for it. Hear from our satisfied customers about their experience working with
              Stone Concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're proud of the relationships we've built with our clients and the beautiful spaces we've helped
              create.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="text-lg italic text-gray-700">"{testimonial.quote}"</div>
                    <div className="mt-4">
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to join our satisfied customers?
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
              <Button asChild variant="outline" size="lg" className="group bg-transparent text-white hover:bg-white/10">
                <Link href="/gallery">
                  View Our Gallery
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
