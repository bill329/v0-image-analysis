import Image from "next/image";
import FaqComponent from "@/components/faqComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Granite, Quartz & Stone Countertops Bolton MA | Stone Concepts",
  description:
    "Premium granite, quartz & stone countertops in Bolton, MA. Expert fabrication and installation without showroom markup. Free consultation: (978) 568-1911",
  alternates: {
    canonical: "https://www.stoneconcepts.net/service-area/bolton",
  },
};

const blogs = [
  {
    id: 1,
    para: "Walk through the slab gallery and see hundreds of granite options in person. Not photos in a catalog. Not two-inch samples. Full slabs where you can see how the veining flows, how colors shift in different lighting, and how certain patterns complement your cabinets while others clash. We guide you toward choices that still look brilliant in ten years, not just trendy today.",
    title: "In-Store Slab Selection That Actually Helps",
  },
  {
    id: 2,
    para: "We've completed hundreds of installations in Bolton. We know which stones work with Federal-style architecture. We understand the quirks of older homes—uneven walls, unusual angles, spaces that look square but aren't. We know which suppliers deliver premium granite on time and which ones make promises they can't keep.",
    title: "Local Expertise That Shows",
  },
  {
    id: 3,
    para: "We measure your space digitally, accounting for every outlet, corner, and architectural detail that makes Bolton homes beautiful but challenging. Our templates capture accuracy to the millimeter, which means installation day is smooth, not stressful.",
    title: "Precision Templating",
  },
  {
    id: 4,
    para: "Our fabricators have been cutting granite longer than most contractors have been in business. They understand how granite's natural grain affects strength. How to make seams nearly invisible. How to create edges that feel smooth and cutouts that fit perfectly the first time.",
    title: "Expert Fabrication",
  },
  {
    id: 5,
    para: "We treat your Bolton home with respect. Floors get protected. Walls don't get damaged. Everything gets cleaned thoroughly. Most installations take just one day, and you'll be making dinner on your new granite surface that same evening.",
    title: "Careful Installation",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are quartz countertops made of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quartz countertops are engineered stone made from 90-95% crushed natural quartz crystals combined with polymer resins, pigments, and sometimes recycled glass or mirror flecks. Here's what that means in real life: The quartz provides incredible hardness and durability. The resins bind everything together and create a non-porous surface (unlike natural stone, which has microscopic pores). The pigments allow for consistent color and pattern—you get exactly what you selected, with no surprises. The result is a surface that doesn't need sealing, resists stains and scratches, and comes in hundreds of color options that natural stone can't match. One Bolton client described it as all the benefits of stone without any of the hassle.",
      },
    },
    {
      "@type": "Question",
      name: "Do granite countertops come in different color options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely—granite offers an incredible range of naturally occurring colors. Light options like Colonial White and Kashmir White. Medium tones like Uba Tuba and Tan Brown. Dark dramatic options like Absolute Black and Blue Pearl. Exotic patterns with blues, greens, or reds. Here's what makes granite special: no two slabs are identical. Even within the same quarry batch, you'll see variation in veining, speckling, and color intensity. That's the beauty of natural stone—your countertop is truly one-of-a-kind. When you visit our showroom for granite countertops in Bolton, you're not choosing from a catalog—you're selecting the actual slab that will be cut and installed in your home. You see the exact veining pattern. The specific color variations. What you see is what you get.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better, granite or quartz countertops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The honest answer? Neither is universally 'better'—they're different tools for different needs. Granite is natural stone with unique patterns, excellent heat resistance, and character that develops over time. It requires periodic sealing (about 15 minutes once or twice a year). Quartz is engineered for consistent appearance, zero maintenance, and extreme stain resistance. It can't handle direct high heat as well as granite. Here's how we help Bolton clients decide: If you love natural materials, don't mind minimal maintenance, and want a one-of-a-kind surface, granite is extraordinary. If you want set-it-and-forget-it performance, consistent appearance, and maximum stain resistance, quartz is brilliant. Both are beautiful. Both are durable. Both will last decades. The 'better' choice depends entirely on your lifestyle and priorities. We'll never push you toward the more expensive option—we'll push you toward the right option for how you live.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide countertop installation in Bolton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes—and installation is included as part of our complete service, not an extra charge you discover later. Here's how it works: Once you select your stone and we fabricate your countertops at our facility, our professional installers schedule a convenient time to come to your Bolton home. They arrive with all necessary tools and materials, install your countertops with precision, seal if needed (for granite and certain natural stones), clean up thoroughly, and walk you through any care instructions before leaving. Most installations take just one day. You're not coordinating between a stone supplier and a separate installer hoping they communicate properly—we handle everything under one roof for a seamless experience from consultation to completion. Our installers have decades of experience specifically with Bolton homes, so they understand the unique challenges of working in both historic properties and modern constructions.",
      },
    },
  ],
};
export default function ServiceAreaPage() {
  const faqs = [
    {
      question: "What are quartz countertops made of?",
      answer:
        "Quartz countertops are engineered stone made from 90–95% crushed natural quartz crystals combined with polymer resins, pigments, and sometimes recycled glass or mirror flecks. Here's what that means in real life: The quartz provides incredible hardness and durability. The resins bind everything together and create a non-porous surface (unlike natural stone, which has microscopic pores). The pigments allow for consistent color and pattern—you get exactly what you selected, with no surprises. The result is a surface that doesn't need sealing, resists stains and scratches, and comes in hundreds of color options that natural stone can't match. One Bolton client described it as 'all the benefits of stone without any of the hassle.'",
    },
    {
      question: "Do granite countertops come in different color options?",
      answer:
        "Absolutely—granite offers an incredible range of naturally occurring colors. Light options like Colonial White and Kashmir White. Medium tones like Uba Tuba and Tan Brown. Dark dramatic options like Absolute Black and Blue Pearl. Exotic patterns with blues, greens, or reds. Here's what makes granite special: no two slabs are identical. Even within the same quarry batch, you'll see variation in veining, speckling, and color intensity. That's the beauty of natural stone—your countertop is truly one-of-a-kind. When you visit our showroom for granite countertops in Bolton, you're not choosing from a catalog—you're selecting the actual slab that will be cut and installed in your home. You see the exact veining pattern. The specific color variations. What you see is what you get.",
    },
    {
      question: "Which is better, granite or quartz countertops?",
      answer:
        "The honest answer? Neither is universally 'better'—they're different tools for different needs. Granite is natural stone with unique patterns, excellent heat resistance, and character that develops over time. It requires periodic sealing (about 15 minutes once or twice a year). Quartz is engineered for consistent appearance, zero maintenance, and extreme stain resistance. It can't handle direct high heat as well as granite. Here's how we help Bolton clients decide: If you love natural materials, don't mind minimal maintenance, and want a one-of-a-kind surface, granite is extraordinary. If you want set-it-and-forget-it performance, consistent appearance, and maximum stain resistance, quartz is brilliant. Both are beautiful. Both are durable. Both will last decades. The 'better' choice depends entirely on your lifestyle and priorities. We'll never push you toward the more expensive option—we'll push you toward the right option for how you live.",
    },
    {
      question: "Do you provide countertop installation in Bolton?",
      answer:
        "Yes—and installation is included as part of our complete service, not an extra charge you discover later. Here's how it works: Once you select your stone and we fabricate your countertops at our facility, our professional installers schedule a convenient time to come to your Bolton home. They arrive with all necessary tools and materials, install your countertops with precision, seal if needed (for granite and certain natural stones), clean up thoroughly, and walk you through any care instructions before leaving. Most installations take just one day. You're not coordinating between a stone supplier and a separate installer hoping they communicate properly—we handle everything under one roof for a seamless experience from consultation to completion. Our installers have decades of experience specifically with Bolton homes, so they understand the unique challenges of working in both historic properties and modern constructions.",
    },
  ];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/white-quartz-vanity-newton.webp"
            alt="Stone countertops in service area"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              The Countertops That Finally Match Your Standards
            </h1>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              {/* Left Content */}
              <div className="md:w-1/2 space-y-6">
                {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    The Countertops That Finally Match Your Standards
                                </h2> */}
                <p className="text-gray-600 leading-relaxed">
                  You've put years into making your Bolton home exactly what you
                  want. Careful paint selections. Thoughtful furniture choices.
                  Quality appliances that work the way they should.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  But every time you walk into your kitchen, those countertops
                  undermine everything else you've done.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The laminate edges are peeling. The tile grout has gone gray
                  despite endless scrubbing. That seam in the middle of the
                  island draws your eye every single time you pass it. And when
                  guests come over, you find yourself making excuses: "We're
                  planning to upgrade eventually."
                </p>

                <h3 className="font-semibold">
                  Eventually can be three weeks from now.
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Stone Concepts transforms Bolton homes with premium stone
                  countertops in Bolton, MA that don't just look impressive on
                  installation day—they look impressive a decade later. From
                  heat-resistant granite countertops in Bolton to virtually
                  maintenance-free quartz installed by expert quartz installers
                  near Bolton, we handle everything from selection through
                  installation.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Here's what sets us apart: we've been perfecting this process
                  for decades in Bolton. We know the architectural styles of
                  your neighborhood. We understand the layout challenges of
                  Colonial homes and modern open concepts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you're ready for countertops that elevate your home
                  instead of apologizing for it, we're here.
                </p>
              </div>

              <div className="md:w-1/2 relative mt-10 md:mt-0">
                <Image
                  src="/images/fantasy-brown-kitchen-hudson.webp"
                  alt="Yoga Studio"
                  width={600}
                  height={400}
                  className=" w-full object-cover"
                />
                <Image
                  src="/images/logo.png"
                  alt="Yoga Thumbnail"
                  width={160}
                  height={120}
                  className="absolute top-8 left-[-40px] border-4 border-gray  shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 px-20">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 ">
                Granite Countertops in Bolton: Timeless for a Reason
              </h3>
              <div className="text-sm uppercase tracking-widest text-gray-600 font-medium mt-2">
                There's a reason granite has remained the benchmark for kitchen
                countertops for 30+ years—it delivers on every promise.
              </div>

              <p className="text-gray-600 leading-relaxed mt-2">
                Natural beauty with patterns that make every slab unique. Heat
                resistance that lets you set down hot pans without panic.
                Durability that stands up to knife slips, dropped dishes, and
                the daily chaos of real life. Elegance that doesn't fade after
                the first year or the tenth. Last month, we replaced laminate
                countertops in a Bolton kitchen that had been there since 1998.
                The homeowner's first reaction when we finished? "I can't
                believe I waited this long. This changes everything about how
                this room feels." That's the granite difference—it transforms
                your daily experience of your own kitchen.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                When you choose granite countertops in Bolton through Stone
                Concepts, you're not just buying stone—you're getting a proven
                process refined over decades:
              </p>
            </div>

            {/* Blog List */}
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className="border border-gray-700 border-dashed  p-6 flex flex-col"
                >
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="text-lg font-semibold text-gray-800 mb-4">
                      {blog.title}
                    </div>
                    <p className="text-gray-600 flex-grow">{blog.para}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-10 text-center">
              The result? A countertop so perfectly integrated into your kitchen
              that visitors assume it's always been there.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              {/* Left Content */}

              <div className="md:w-1/2 relative mt-10 md:mt-0">
                <Image
                  src="/images/fantasy-brown-kitchen-hudson.webp"
                  alt="Yoga Studio"
                  width={600}
                  height={400}
                  className=" w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Stone Countertops in Bolton, MA: Beauty Beyond Granite
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Maybe granite isn't your vision. Maybe you're drawn to
                  marble's luminous elegance. Maybe you need quartzite's extreme
                  durability for a busy household. Or perhaps you want
                  soapstone's understated sophistication.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We offer them all.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Our stone countertops in Bolton, MA service provides complete
                  flexibility in materials, colors, patterns, and finishes. From
                  classic natural veining to contemporary solid colors, from
                  polished surfaces that shine to honed finishes with subtle
                  texture—we create countertop solutions tailored to both your
                  aesthetic vision and how you actually use your space.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
              <div className="relative">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Marble: Luxury That Makes a Statement
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Perfect for bathroom vanities where you want that spa-like
                    feeling, decorative islands that become conversation pieces,
                    or baking stations where marble's naturally cool surface is
                    a genuine advantage. Yes, marble requires more care than
                    granite—it can etch from acidic liquids, it needs periodic
                    sealing. But marble owners consistently tell us, "I knew
                    what I was getting into, and I'd choose it again without
                    hesitation."
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Quartzite: Nature's Most Durable Stone
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Think of quartzite as granite with superpowers. Natural
                    beauty with extreme resistance to heat, scratches, and daily
                    wear. One Bolton family with three teenagers told us their
                    quartzite countertops "survived five years of absolute chaos
                    and still look perfect."
                  </p>
                </div>
              </div>

              <div className="relative ">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Soapstone: The Timeless Alternative
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Smooth, matte finish that develops character over time.
                    Naturally non-porous, so no sealing required. Perfect for
                    traditional New England homes where you want sophistication
                    without shine.
                  </p>
                </div>
              </div>

              <div className="relative ">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Limestone, Travertine, and More
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Unique stones for unique visions. We help you understand the
                    tradeoffs and choose what actually works for your lifestyle,
                    not just what looks good in photos.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 leading-relaxed">
                Each natural stone has its own personality. We help you find the
                one that matches yours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black text-white">
          <div className="sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Quartz Installers Near Bolton: Modern Performance Without
                  Compromise
                </h3>
                <p className="leading-relaxed">
                  Engineered quartz is what happens when you solve every
                  practical problem natural stone has while keeping all the
                  beauty.
                </p>
                <ul className="mt-6 list-disc list-inside mb-4">
                  <li className="mt-4">
                    Non-porous surface? Check. (No sealing. Ever.)
                  </li>
                  <li className="mt-2">
                    Stain-resistant? Check. (Coffee, wine, tomato sauce—wipe and
                    go.)
                  </li>
                  <li className="mt-2">
                    Heat-resistant? Check. (Within reason—trivets are still
                    smart.)
                  </li>
                  <li className="mt-2">
                    Scratch-resistant? Check. (Daily use won't show wear.)
                  </li>
                  <li className="mt-2">
                    Consistent color and pattern? Check. (What you see is what
                    gets installed.)
                  </li>
                  <li className="mt-2">
                    Virtually zero maintenance? Check. (Soap and water. That's
                    it.)
                  </li>
                </ul>
                <p className="leading-relaxed mb-4">
                  A Bolton homeowner told us their quartz countertops "are the
                  only surface in the house that still looks brand new after
                  four years with two kids and a dog."
                </p>
                <p className="leading-relaxed">
                  That's the quartz promise: premium aesthetics with zero-drama
                  performance.
                </p>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold mb-4">
                  Our quartz installers near Bolton guide you through the entire
                  process with expertise earned over decades:
                </h3>
                <ul className="space-y-6">
                  <li>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i
                          className="fa fa-paint-brush text-blue-600"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold mb-2">
                          Color Selection You'll Love in Ten Years
                        </div>
                        <p>
                          Quartz offers hundreds of options—classic marble
                          looks, bold contemporary patterns, subtle neutrals,
                          even colors that don't exist in nature. We help you
                          choose based on your lighting, cabinet color, and
                          daily lifestyle—not just what's trending on design
                          blogs that will feel dated in three years.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <i
                          className="fa fa-cube text-green-600"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold mb-2">
                          Quality Materials Only
                        </div>
                        <p>
                          Not all quartz is created equal. We handpick
                          manufacturers who use premium materials and proven
                          engineering. The difference shows in performance—no
                          warping, no discoloration, no surprises five years
                          down the line.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <i
                          className="fa fa-laptop text-yellow-600"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold mb-2">
                          Digital Precision Templating
                        </div>
                        <p>
                          We use technology that captures your space with
                          accuracy you can't achieve with cardboard templates.
                          This matters especially for quartz, which doesn't
                          forgive measurement errors during cutting.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <i
                          className="fa fa-cogs text-purple-600"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-xl font-semibold mb-2">
                          Expert Installation
                        </div>
                        <p>
                          Quartz is engineered to be incredibly strong, but it's
                          also unforgiving during installation. Our installers
                          have completed hundreds of quartz projects in Bolton
                          homes. They know how to handle undermount sinks,
                          complex edge profiles, and inside corners without
                          issues.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Result Section */}
            <div className="mt-12">
              <div className="text-xl font-semibold mb-2">The Result</div>
              <p>
                A countertop that looks high-end, performs flawlessly, and
                requires nothing more than basic cleaning to maintain. It's the
                practical choice that doesn't look or feel practical.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our 3-Step Process: From Consultation to Completion in Weeks,
                Not Months
              </h2>
              <p className="text-sm tracking-widest text-gray-600 font-medium mt-2">
                Getting new stone countertops in Bolton, MA shouldn't mean
                living in construction chaos. We've streamlined everything so
                the experience is actually enjoyable.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Free Consultation & Precise Measurement
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We have a consultation call about your Bolton home and we
                    actually listen. How do you use your kitchen? Do you bake
                    often? Do kids do homework at the island? Do you entertain
                    regularly?
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your answers shape which stone we recommend—not our profit
                    margins. We take detailed measurements, discuss timeline and
                    budget transparently, and answer every question honestly.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    No pressure. No obligation. Just guidance from people who've
                    done this thousands of times.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Material Selection & Off-Site Fabrication
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Visit our slab gallery and choose from our extensive slab
                    library of granite, quartz, and natural stone. See full
                    pieces, not samples. Touch the actual surface. Compare
                    options in different lighting conditions. Ask questions.
                    Take your time.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Once you've selected your material, we create a digital
                    template of your space (no messy cardboard) and fabricate
                    your countertops at our facility. Your home stays clean and
                    livable while we work.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                  <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Professional Installation & Clean Finish
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our installers arrive exactly when promised, fit your
                    countertop with precision, seal if necessary (granite and
                    certain natural stones), clean up completely, and hand you a
                    kitchen that's ready to use immediately.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Most installations take just one day. You'll be preparing
                    dinner on your new surface that same evening.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-8">
              <p className="text-gray-600 leading-relaxed">
                No surprises. No disappearing for weeks. No excuses.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 px-20">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Northborough Homeowners Choose Stone Concepts
              </h2>
            </div>
            <h3 className="text-xl font-bold text-gray-800">
              Decades of Local Experience
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2 mb-6">
              We're not new to this. We've been installing countertops in
              Northborough, MA for years. We know the architectural styles. We
              understand the layout challenges of older homes. We're familiar
              with local building requirements. That experience shows in every
              installation.
            </p>
            <h3 className="text-xl font-bold text-gray-800">
              A Showroom Worth Visiting
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2 mb-6">
              {" "}
              Our slab library isn't a binder of photos—it's hundreds of actual
              granite, marble, and quartz slabs you can see and touch. Make a
              confident choice based on the real material, not a two-inch
              sample.
            </p>
            <h3 className="text-xl font-bold text-gray-800">
              A Showroom Worth Visiting
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2 mb-6">
              {" "}
              We give you fixed pricing upfront. No hidden fees. No surprise
              charges. You know exactly what you're paying before we start.
            </p>
            <h3 className="text-xl font-bold text-gray-800">
              A Team That Actually Communicates
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2 mb-6">
              We answer our phones. We show up when promised. We keep you
              informed at every step. Revolutionary? No. Rare in this industry?
              Unfortunately, yes.
            </p>
            <h3 className="text-xl font-bold text-gray-800">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-gray-600 leading-relaxed mt-2 mb-6">
              We don't consider the job done until you're thrilled with the
              result. Tight seams, precise cutouts, clean edges, and a polished
              final product aren't goals—they're guarantees.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              {/* Left Content */}
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Stop Living with Countertops That Don't Measure Up
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Every morning you wake up to those disappointing countertops
                  is another day of settling for less than your home deserves.
                  Another dinner party where you apologize for your kitchen
                  instead of showcasing it. Another year of living with surfaces
                  that make you cringe instead of smile.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Whether you need timeless granite countertops in Bolton,
                  modern quartz surfaces from expert quartz installers near
                  Bolton, or elegant natural stone countertops in Bolton, MA,
                  Stone Concepts transforms your vision into reality.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We handle every detail from selection through installation, so
                  you can focus on planning that first dinner party in your
                  transformed kitchen.
                </p>

                <h3 className="font-semibold">
                  Call us today for your free consultation and quote.
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Let's create something you'll love for decades.
                </p>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2 relative mt-10 md:mt-0">
                <Image
                  src="/images/fantasy-brown-kitchen-hudson.webp"
                  alt="Modern kitchen with elegant stone countertops"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <FaqComponent nycFaqs={faqs} />
      </div>
    </div>
  );
}
