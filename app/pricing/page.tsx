import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Flame, Droplets, Wrench, Eye, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"

// Material data
const materials = [
  {
    name: "Level 1 Granite",
    costRange: "$900–$1,200",
    costMin: 900,
    costMax: 1200,
    durability: 5,
    heatResistance: 5,
    stainResistance: 3,
    maintenance: "Seal yearly",
    appearance: "Varied",
    needsSealing: true,
  },
  {
    name: "Level 2 Granite",
    costRange: "$1,300–$2,400",
    costMin: 1300,
    costMax: 2400,
    durability: 5,
    heatResistance: 5,
    stainResistance: 3,
    maintenance: "Seal yearly",
    appearance: "Varied",
    needsSealing: true,
  },
  {
    name: "Level 3 Granite",
    costRange: "$2,500–$5,000",
    costMin: 2500,
    costMax: 5000,
    durability: 5,
    heatResistance: 5,
    stainResistance: 3,
    maintenance: "Seal yearly",
    appearance: "Varied",
    needsSealing: true,
  },
  {
    name: "Level 1 Quartz",
    costRange: "$1,450–$1,850",
    costMin: 1450,
    costMax: 1850,
    durability: 5,
    heatResistance: 3,
    stainResistance: 5,
    maintenance: "None",
    appearance: "Uniform",
    needsSealing: false,
  },
  {
    name: "Level 2 Quartz",
    costRange: "$1,950–$2,550",
    costMin: 1950,
    costMax: 2550,
    durability: 5,
    heatResistance: 3,
    stainResistance: 5,
    maintenance: "None",
    appearance: "Uniform",
    needsSealing: false,
  },
  {
    name: "Level 3 Quartz",
    costRange: "$2,650–$5,100",
    costMin: 2650,
    costMax: 5100,
    durability: 5,
    heatResistance: 3,
    stainResistance: 5,
    maintenance: "None",
    appearance: "Uniform",
    needsSealing: false,
  },
  {
    name: "Quartzite",
    costRange: "$3,600–$6,900",
    costMin: 3600,
    costMax: 6900,
    durability: 5,
    heatResistance: 5,
    stainResistance: 3,
    maintenance: "Seal yearly",
    appearance: "Varied",
    needsSealing: true,
  },
  {
    name: "Porcelain",
    costRange: "$1,450–$2,500",
    costMin: 1450,
    costMax: 2500,
    durability: 5,
    heatResistance: 5,
    stainResistance: 5,
    maintenance: "None",
    appearance: "Uniform",
    needsSealing: false,
  },
]

// Rating component
function Rating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <div key={i} className={`w-3 h-3 rounded-full ${i < value ? "bg-green-500" : "bg-gray-300"}`} />
      ))}
    </div>
  )
}


export const metadata = {
  title: "Affordable Countertop Installation Pricing | Stone Concepts",
  description:
    "Discover clear pricing for granite and quartz countertop installation with Stone Concepts. Plan your kitchen project with real examples and expert service.",
  keywords:
    "stone concepts pricing, countertop costs, granite pricing, quartz countertop estimate, quartzite installation, kitchen remodel cost, Massachusetts",
  openGraph: {
    title: "Affordable Countertop Installation Pricing | Stone Concepts",
    description:
      "Discover clear pricing for granite and quartz countertop installation with Stone Concepts. Plan your kitchen project with real examples and expert service.",
    url: "https://stoneconcepts.net/pricing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://stoneconcepts.net/images/fantasy-brown-kitchen-lexington.webp",
        width: 1200,
        height: 630,
        alt: "Stone Concepts Pricing Page - Granite Countertop Example",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://stoneconcepts.net/pricing",
  },
}

export default function PricingPage() {
  // const [selectedMaterial, setSelectedMaterial] = useState("Level 2 Granite")
  // const [squareFootage, setSquareFootage] = useState(40)
  // const [includeRemoval, setIncludeRemoval] = useState(false)
  // const [includeEdgeUpgrade, setIncludeEdgeUpgrade] = useState(false)
  // const [estimate, setEstimate] = useState({ min: 0, max: 0 })

  // Calculate estimate
  // useEffect(() => {
  //   const material = materials.find((m) => m.name === selectedMaterial)
  //   if (!material) return

  //   const fabricationCost = squareFootage * 25.5
  //   const installCost = squareFootage * 16.5
  //   const removalCost = includeRemoval ? squareFootage * 10 : 0

  //   const minMaterialCost = material.costMin
  //   const maxMaterialCost = material.costMax

  //   const minSubtotal = minMaterialCost + fabricationCost + installCost + removalCost
  //   const maxSubtotal = maxMaterialCost + fabricationCost + installCost + removalCost

  //   // MA sales tax on materials and fabrication only
  //   const minTax = (minMaterialCost + fabricationCost) * 0.0625
  //   const maxTax = (maxMaterialCost + fabricationCost) * 0.0625

  //   setEstimate({
  //     min: Math.round(minSubtotal + minTax),
  //     max: Math.round(maxSubtotal + maxTax),
  //   })
  // }, [selectedMaterial, squareFootage, includeRemoval])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/fantasy-brown-kitchen-lexington.webp"
            alt="Beautiful stone countertops in modern kitchen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get Your Dream Kitchen Without the Showroom Stress
            </h1>
            <p className="mt-6 text-xl leading-8">
              Explore material options, pricing ranges, and real project examples—so you can plan with confidence.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We believe in no-pressure, no-secrets pricing. You'll find everything you need to know below: what
              materials cost, what labor includes, and a sample breakdown from a real project. No fog. Just facts.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Your Personalized Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Material Comparison Table */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose the Right Material for Your Space
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every surface tells a story. This quick comparison helps you weigh cost, durability, maintenance, and
              look—so your countertops match your life.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost per Slab</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4" />
                      Durability
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <Flame className="h-4 w-4" />
                      Heat Resistance
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <Droplets className="h-4 w-4" />
                      Stain Resistance
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <Wrench className="h-4 w-4" />
                      Maintenance
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <div className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" />
                      Appearance
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {materials.map((material, index) => (
                  <tr key={material.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{material.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{material.costRange}</td>
                    <td className="px-6 py-4 text-center">
                      <Rating value={material.durability} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Rating value={material.heatResistance} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Rating value={material.stainResistance} />
                        {material.needsSealing && <span className="text-xs text-gray-500">*</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">{material.maintenance}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">{material.appearance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">*Stain resistance improves with proper sealing.</p>
        </div>
      </section>

      {/* Cost Breakdown Example */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Does a Real Project Look Like?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here's a real example using Level 2 Granite for a small kitchen.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Real Project Example - Level 2 Granite Kitchen</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="bg-gray-50 rounded-lg p-4 border">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-30%20at%2012.19.23%E2%80%AFPM-4DTWDzivbOKcenY8TkVotzgXoyHrjD.png"
                    alt="Kitchen layout drawing showing 62.8 sq ft of countertops with dimensions and sink cutouts"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium">Level 2 Granite Slabs</div>
                      <div className="text-sm text-gray-600">1 slab @ $1,300</div>
                    </div>
                    <div className="font-semibold">$1,300</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium">Templating & Fabrication</div>
                      <div className="text-sm text-gray-600">62.8 sq ft @ $25.50/sq ft</div>
                    </div>
                    <div className="font-semibold">$1,601.40</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium">Installation</div>
                      <div className="text-sm text-gray-600">62.8 sq ft @ $16.50/sq ft</div>
                    </div>
                    <div className="font-semibold">$1,036.20</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium">Standard Sink Cutout</div>
                      <div className="text-sm text-gray-600">Included</div>
                    </div>
                    <div className="font-semibold">$0</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <div>
                      <div className="font-medium">Edge Detail (Eased)</div>
                      <div className="text-sm text-gray-600">Included</div>
                    </div>
                    <div className="font-semibold">$0</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-300">
                    <div className="font-medium">Subtotal</div>
                    <div className="font-semibold">$3,937.60</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-300">
                    <div>
                      <div className="font-medium">MA Sales Tax (6.25%)</div>
                      <div className="text-sm text-gray-600">On materials & fabrication</div>
                    </div>
                    <div className="font-semibold">$181.34</div>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gray-50 rounded-lg px-4">
                    <div className="text-lg font-bold">TOTAL PROJECT COST</div>
                    <div className="text-lg font-bold text-green-600">$4,118.94</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-600 text-center">
                  This example assumes 62.8 sq ft and standard details. Final cost depends on size, material, and
                  special requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Cost Factors */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Else Might Affect the Price?
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Need your old counters removed?</h3>
                    <p className="text-gray-600">Add $10 per sq ft for removal and disposal.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Want an upgraded edge profile?</h3>
                    <p className="text-gray-600">
                      Options like ogee or bullnose are custom-priced. Let us know what you're thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 mb-2">What's Included</h3>
              <p className="text-green-700">
                Templating, Fabrication, Delivery and Installation, and All Cut-Outs for Sinks and Fixtures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's Design Something That Lasts.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Ready to move forward? Get a personalized quote.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Your Personalized Quote
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
