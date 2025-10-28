"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  loading?: "lazy" | "eager"
  style?: React.CSSProperties
  unoptimized?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = "lazy",
  style,
  unoptimized = true,
  placeholder = "empty",
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      // priority={priority}
      loading={loading}
      style={style}
      unoptimized={unoptimized}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  )
}
