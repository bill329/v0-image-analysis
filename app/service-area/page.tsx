import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

// ✅ SEO Metadata for Service Area page
export const metadata: Metadata = {
  title: "Granite & Quartz Countertop Services Near Me | Stone Concepts",
  description:
    "Stone Concepts proudly serves over 140 communities across Eastern and Central Massachusetts with expert granite and quartz countertop fabrication and installation.",
  alternates: {
    canonical: "https://www.stoneconcepts.net/service-area",
  },
};

// Service area towns organized alphabetically
const serviceAreaTowns = [
  "Acton",
  "Andover",
  "Arlington",
  "Ashburnham",
  "Ashby",
  "Ashland",
  "Athol",
  "Auburn",
  "Ayer",
  "Barre",
  "Bedford",
  "Bellingham",
  "Belmont",
  "Berlin",
  "Billerica",
  "Blackstone",
  "Boxborough",
  "Boylston",
  "Brookline",
  "Burlington",
  "Cambridge",
  "Carlisle",
  "Charlton",
  "Chelmsford",
  "Chelsea",
  "Clinton",
  "Concord",
  "Dedham",
  "Douglas",
  "Dover",
  "Dracut",
  "Dudley",
  "Dunstable",
  "Everett",
  "Fitchburg",
  "Foxborough",
  "Framingham",
  "Franklin",
  "Gardner",
  "Grafton",
  "Groton",
  "Hardwick",
  "Harvard",
  "Holden",
  "Holliston",
  "Hopedale",
  "Hopkinton",
  "Hubbardston",
  "Hudson",
  "Lancaster",
  "Leicester",
  "Leominster",
  "Lexington",
  "Lincoln",
  "Littleton",
  "Lowell",
  "Lunenburg",
  "Malden",
  "Marlborough",
  "Maynard",
  "Medfield",
  "Medford",
  "Medway",
  "Melrose",
  "Mendon",
  "Milford",
  "Millbury",
  "Millis",
  "Millville",
  "Natick",
  "Needham",
  "New Braintree",
  "Newton",
  "Norfolk",
  "North Andover",
  "North Reading",
  "Northborough",
  "Northbridge",
  "Norwood",
  "Oakham",
  "Oxford",
  "Paxton",
  "Pepperell",
  "Petersham",
  "Phillipston",
  "Plainville",
  "Princeton",
  "Reading",
  "Revere",
  "Royalston",
  "Rutland",
  "Sharon",
  "Sherborn",
  "Shirley",
  "Shrewsbury",
  "Somerville",
  "Southbridge",
  "Spencer",
  "Sterling",
  "Stoneham",
  "Stow",
  "Sudbury",
  "Templeton",
  "Tewksbury",
  "Townsend",
  "Tyngsborough",
  "Upton",
  "Uxbridge",
  "Wakefield",
  "Waltham",
  "Warren",
  "Watertown",
  "Wayland",
  "Webster",
  "Wellesley",
  "West Boylston",
  "West Newbury",
  "Westborough",
  "Westford",
  "Westminster",
  "Westwood",
  "Wilmington",
  "Winchendon",
  "Winchester",
  "Winthrop",
  "Woburn",
  "Worcester",
  "Wrentham",
];

// Bold + Link towns list
const specialTownLinks: Record<string, string> = {
  Bolton: "/service-area/bolton",
  Berlin: "/service-area/berlin",
  Hopkinton: "/service-area/hopkinton",
  Northborough: "/service-area/northborough",
};

// Organize towns into columns for better display
const townsPerColumn = Math.ceil(serviceAreaTowns.length / 4);
const townColumns = [
  serviceAreaTowns.slice(0, townsPerColumn),
  serviceAreaTowns.slice(townsPerColumn, townsPerColumn * 2),
  serviceAreaTowns.slice(townsPerColumn * 2, townsPerColumn * 3),
  serviceAreaTowns.slice(townsPerColumn * 3),
];

export default function ServiceAreaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/quartzite-island-newton.webp"
            alt="Stone countertops in service area"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Service Area
            </h1>
            <p className="mt-6 text-lg leading-8">
              Proudly serving Eastern and Central Massachusetts with premium
              countertop installation and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Where We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our service area covers a wide region across Massachusetts. The
              red outline on the map below shows our primary service area.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-TUfmEeZWxogEjsPHtwCd7vaC8Bd8Ho.jpeg"
                alt="Stone Concepts service area map showing Eastern and Central Massachusetts with red border outline"
                width={1200}
                height={900}
                className="w-full"
                unoptimized
              />
              <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Service Area Coverage
                  </h3>
                </div>
                <p className="text-gray-600">
                  The red border indicates our primary service area covering
                  Eastern and Central Massachusetts. We serve over 140
                  communities in this region with professional countertop
                  installation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Towns List */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Communities We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We proudly serve the following {serviceAreaTowns.length}{" "}
              communities across Massachusetts:
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Service Area Towns (Alphabetical)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {townColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-1">
                      {column.map((town) => {
                        const isSpecial =
                          Object.keys(specialTownLinks).includes(town);
                        return (
                          <div
                            key={town}
                            className="text-sm text-gray-700 py-1"
                          >
                            {isSpecial ? (
                              <Link
                                href={specialTownLinks[town]}
                                className="font-bold hover:underline"
                              >
                                {town}
                              </Link>
                            ) : (
                              town
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discuss your countertop project. We're here to
              help you every step of the way.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call or Text
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:9785681911"
                  className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  (978) 568-1911
                </a>
                <p className="mt-2 text-gray-600">
                  Available Monday - Friday, 8:00 AM - 5:00 PM
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:bill@stoneconcepts.net"
                  className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                >
                  bill@stoneconcepts.net
                </a>
                <p className="mt-2 text-gray-600">
                  We typically respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't See Your Town Listed?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              We may still be able to serve your area. Contact us to discuss
              your project and we'll let you know if we can help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/gallery">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
