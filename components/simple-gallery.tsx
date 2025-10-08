"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  caption: string
}

interface SimpleGalleryProps {
  images: GalleryImage[]
}

export function SimpleGallery({ images }: SimpleGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    } else if (e.key === "ArrowRight") {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <div
              className="cursor-pointer"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View ${image.caption}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image container */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <Image
              src={images[currentImageIndex].src || "/placeholder.svg"}
              alt={images[currentImageIndex].caption}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto object-contain"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center text-white">
              <p>{images[currentImageIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
