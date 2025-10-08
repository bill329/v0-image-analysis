"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Bill helped me all the way, especially in the most daunting part of the process: selecting the right stone. He took me to visit a warehouse where I was mesmerized by the amount and variety of selections. I could have spent literally days there, without being able to come to a decision. By looking at my reactions in front of the slabs, and with few well targeted questions, Bill was able to understand what I was looking for. His input was invaluable in pointing out to me possible choices that I would have totally overlooked. When I fell in love with a particular kind of granite that was already sold, he helped me find the same stone at another vendor. He finally crafted it beautifully into my kitchen countertops. Thank you so much Bill!",
    author: "Tiziana",
  },
  {
    id: 2,
    quote:
      "Everyone who sees the superb granite countertops in our kitchen can't believe the workmanship that went into the seamless beauty of the project. The product is the greatest quality we have seen, the workmanship was seamless, the workers were courteous and extremely knowledgeable, and the assistance you gave us in walking through the process step-by-step was matchless with other vendors we contacted. I would recommend your services to friends and family and would definitely be a repeat customer if the opportunity presents itself.",
    author: "C. Caunt",
  },
  {
    id: 3,
    quote:
      "I absolutely LOVED working with Bill at Stone Concepts!! He walked us through the process! Helped us find locations to view different stone in person and helped us understand what would be in our budget! Installation went smoothly as well. Thank you so much, we would highly recommend!",
    author: "Jenna Sarosi",
  },
  {
    id: 4,
    quote:
      "I recently had the pleasure of working with Stone Concepts for my new countertops, and I can't say enough about the experience! From start to finish, it was seamless, professional, and incredibly cost-effective. I'm located in Barre, VT, which is outside of their typical service area, but they went above and beyond to make it happen. Despite the distance, they still managed to save me 30% compared to the local quotes I received—and that's even after factoring in the trip charge! But the real highlight? The countertops themselves. They are STUNNING. Absolutely gorgeous.",
    author: "Fran Olsen",
  },
  {
    id: 5,
    quote:
      "Extremely happy with the product, service and installation. Bill was great to work with coordinating easily with my contractor to get the job done.",
    author: "Carol Simpson",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative">
      <Card className="border-0 shadow-none">
        <CardContent className="p-6 text-center">
          <blockquote className="space-y-2">
            <p className="text-lg italic text-gray-700">"{testimonials[currentIndex].quote}"</p>
            <footer className="mt-4 text-sm font-medium text-gray-500">— {testimonials[currentIndex].author}</footer>
          </blockquote>
        </CardContent>
      </Card>

      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
