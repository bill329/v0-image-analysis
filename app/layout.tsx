import type React from "react";
import type { Metadata, Viewport } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Update metadata with more image-friendly configurations
export const metadata: Metadata = {
  title: "Granite & Quartz Countertops Installation | Stone Concepts",
  description:
    "Upgrade your kitchen with affordable luxury granite and quartz countertops. Expert fabrication and installation across Massachusetts by Stone Concepts.",
  keywords:
    "countertops, granite, quartz, quartzite, kitchen remodel, stone installation, Massachusetts",
  robots: "index, follow",
  openGraph: {
    title: "Granite & Quartz Countertops Installation | Stone Concepts",
    description:
      "Upgrade your kitchen with affordable luxury granite and quartz countertops. Expert fabrication and installation across Massachusetts by Stone Concepts.",
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL("https://www.stoneconcepts.net"),
  alternates: {
    canonical: "/", // root; Next.js auto-resolves for each page
  },
  generator: "v0.app",
};

// ✅ Export viewport separately (new Next.js 15 syntax)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Organization schema (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stone Concepts, Inc.",
  url: "https://www.stoneconcepts.net/",
  logo: "https://www.stoneconcepts.net/images/stone-concepts-logo.png",
  sameAs: [
    "https://www.facebook.com/StoneConceptsGranite/",
    "https://x.com/IncConcept22776",
    "https://www.instagram.com/stoneconcepts_inc/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-978-568-1911",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 Technology Dr, Unit 40",
    addressLocality: "Hudson",
    addressRegion: "MA",
    postalCode: "01749",
    addressCountry: "US",
  },
  description:
    "Get high-end countertops without the showroom markup. Expert guidance, precision layout previews, and quality installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* No external lightbox libraries needed */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
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
  );
}
