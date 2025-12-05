import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Update metadata with more image-friendly configurations
export const metadata: Metadata = {
  title: "Stone Concepts - Affordable Luxury Countertops",
  description:
    "Get high-end countertops without the showroom markup. Expert guidance, precision layout previews, and quality installation.",
  keywords: "countertops, granite, quartz, quartzite, kitchen remodel, stone installation, Massachusetts",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  robots: "index, follow",
  openGraph: {
    title: "Stone Concepts - Affordable Luxury Countertops",
    description:
      "Get high-end countertops without the showroom markup. Expert guidance, precision layout previews, and quality installation.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* No external lightbox libraries needed */}</head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        {/* Add Google Analytics to all pages */}
        <GoogleAnalytics gaId="G-22P7YS3G6G" />
      </body>
    </html>
  )
}
