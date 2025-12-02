import Image from "next/image"
import FaqComponent from "@/components/faqComponent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Granite & Quartz Countertop Services Near Me | Stone Concepts",
  description:
    "Stone Concepts proudly serves over 140 communities across Eastern and Central Massachusetts with expert granite and quartz countertop fabrication and installation.",
  alternates: {
    canonical: "https://www.stoneconcepts.net/service-area/hopkinton",
  },
}

const blogs = [
    {
        id: 1,
        para: "Our slab gallery displays hundreds of granite options—not photos, actual full slabs. You'll see how the veining flows across the surface. How the colors shift in different lighting. How certain patterns work with your cabinets while others clash. We guide you toward choices that still look brilliant ten years from now, not just on installation day.",
        title: "Selection That Matters",
    },
    {
        id: 2,
        para: "We measure your space digitally, accounting for every outlet, corner, and quirk that makes Hopkinton homes charming but challenging to work with. Our templates are accurate to the millimeter, which means installation day goes smoothly instead of becoming a problem-solving session.",
        title: "Precision You Can See",
    },
    {
        id: 3,
        para: "Our fabricators have been cutting stone longer than most contractors have been in business. They understand granite's natural grain patterns, stress points, and how to make seams nearly invisible. The result? Edges that feel smooth. Cutouts that fit perfectly. Seams you have to look for to find.",
        title: "Fabrication That Shows",
    },
    {
        id: 4,
        para: "We treat your Hopkinton home like our own. Floors get protected. Walls don't get dinged. Everything gets cleaned up thoroughly. Most installations take just one day, and you'll be cooking dinner on your new granite surface that same evening.",
        title: "Installation That Respects Your Home",
    },
];

export default function ServiceAreaPage() {

    const faqs = [
        {
            question: "Can you put hot pans on granite countertops?",
            answer:
                "Yes, granite is naturally heat-resistant and can handle brief contact with hot pans without damage. However, we still recommend using trivets or hot pads as a best practice—not because granite will immediately crack, but because extreme, prolonged direct heat (like a 500-degree pan sitting in one spot for minutes) could potentially cause thermal shock in rare cases. Think of it this way: granite can handle it, but why risk it when a $5 trivet gives you complete peace of mind? The real advantage is that if you occasionally forget and set down a hot pot, your granite won't show a burn mark like laminate would.",
        },
        {
            question: "How often do granite countertops need to be sealed?",
            answer:
                "Most granite countertops need sealing every 12-24 months, though this varies by stone type—some dense granites need it annually, while more porous varieties might need it twice a year. Here's the good news: sealing takes about 15 minutes and costs around $20 for a DIY bottle of sealer. That's the entire 'maintenance' people worry about. We show you how to do it during installation, and we're always available if you have questions. Many of our Hopkinton clients tell us, 'I thought maintenance would be a hassle, but it's literally easier than cleaning my oven.' We also test your granite during installation and let you know exactly how often your specific stone will need sealing."
        },
        {
            question: "Which is more expensive, granite or quartz countertops?",
            answer:
                "It depends on the specific materials you're comparing, but generally, mid-range granite and mid-range quartz cost roughly the same. Here's the real question: which offers better value for your situation? Granite requires periodic sealing but offers unique natural patterns—no two slabs are identical. Quartz requires zero maintenance but has more uniform patterns. For busy Hopkinton families who want set-it-and-forget-it performance, quartz often delivers better long-term value despite similar upfront costs. For Hopkinton homeowners who love natural stone's organic beauty and don't mind 15 minutes of sealing once a year, granite is worth every penny. We'll never push you toward the more expensive option—we'll push you toward the right option for your lifestyle and budget.",
        },
        {
            question: "Does quartz stain easily?",
            answer:
                "High-quality quartz (which is all we install) is highly stain-resistant, not stain-proof—there's a difference. Here's what that means in real life: Coffee, wine, tomato sauce, oil—normal kitchen spills wipe right up, even if they sit for a few hours. Where quartz can potentially stain is from things like permanent markers, hair dye, or strong chemical solvents left on the surface for extended periods. A Hopkinton client once asked us, 'What if my kids use markers on it?' We told her, 'Wipe it up within a day or two and you're fine. Let Sharpie sit for a week and you might have an issue.' After three years with three kids, she reports zero stains. The key? Quartz is incredibly forgiving for normal daily use, which is why busy families love it.",
        },

    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/fantasy-brown-kitchen-lexington.webp"
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
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Your Home Deserves More Than "Builder Grade"</h1>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">

                            {/* Left Content */}
                            <div className="md:w-1/2 space-y-6">
                                <p className="text-gray-600 leading-relaxed">
                                    You've invested in your Hopkinton home. Fresh landscaping. Updated fixtures. Quality appliances. But every time you prep dinner or get ready in the morning, those countertops remind you there's unfinished business.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    The laminate is chipping at the corners. The grout lines in the tile have turned gray no matter how much you scrub. That burn mark from when someone set down a hot pan three years ago? It's still there, catching your eye every single day.
                                </p>

                                <h3 className="font-semibold"> What if your countertops could be something you show off instead of explain away?</h3>

                                <p className="text-gray-600 leading-relaxed">
                                    Stone Concepts brings premium stone countertops in Hopkinton, MA that transform kitchens and bathrooms from functional spaces into showpieces. From virtually indestructible quartz to timeless granite countertops near Hopkinton, MA to elegant natural stone, we handle everything from selection through installation—so you get the excitement of a renovation without the chaos.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Here's why Hopkinton homeowners trust us: we've been perfecting this process for decades. We know which stones work with your home's style. We understand the layout challenges of everything from historic Colonials to modern open concepts. We source from suppliers who deliver quality, not excuses.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    When you're ready for countertops that elevate your home instead of lowering it, we're ready to help.
                                </p>
                            </div>


                            <div className="md:w-1/2 relative mt-10 md:mt-0">
                                <Image
                                    src="/images/taj-mahal-quartzite-island-brookline.webp"
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
                                Granite Countertops Near Hopkinton, MA: The Gold Standard for a Reason
                            </h3>
                            <div className="text-sm uppercase tracking-widest text-gray-600 font-medium mt-2">
                                Granite isn't trendy. It's proven.
                            </div>
                            <div className="text-sm uppercase tracking-widest font-medium mt-6">
                                For 30+ years, granite has remained the benchmark for kitchen countertops because it delivers on its promises. Natural beauty that makes every slab unique. Heat resistance that handles hot pans without panic. Durability that stands up to daily life without showing its age.
                            </div>
                            <p className="text-gray-600 leading-relaxed mt-2">Last month, we installed Steel Grey granite in a Hopkinton kitchen that had been living with laminate for 15 years. The homeowner told us, "I didn't realize how much I was compromising until I saw what I should have had all along."
                                That's the granite difference—it changes how you experience your kitchen every single day.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">When you choose granite countertops near Hopkinton, MA through Stone Concepts, you're getting more than slabs of stone:</p>
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
                        <p className="text-gray-600 leading-relaxed mt-10 text-center">The end result? A countertop that looks so natural in your kitchen, guests assume it came with the house.</p>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">

                            {/* Left Content */}

                            <div className="md:w-1/2 relative mt-10 md:mt-0">
                                <Image
                                    src="/images/taj-mahal-quartzite-splash-brookline.webp"
                                    alt="Yoga Studio"
                                    width={600}
                                    height={400}
                                    className=" w-full object-cover"
                                />

                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Stone Countertops in Hopkinton, MA: Beyond Granite
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Maybe granite isn't your style. Maybe you're drawn to the timeless elegance of marble. Maybe you need the extreme durability of quartzite. Or perhaps you want something entirely unique like soapstone or limestone.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We offer it all.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Our stone countertops in Hopkinton, MA service gives you complete flexibility in materials, colors, patterns, and finishes. From classic natural veining to contemporary solid colors, from polished surfaces to honed finishes—we create countertop solutions tailored to how you live.
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
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Marble: The Luxury Statement</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Perfect for bathroom vanities, decorative islands, or spaces where beauty trumps heavy-duty use. Marble offers that luminous finish and sophisticated veining that no other stone replicates. Yes, it requires more care than granite. But marble owners consistently tell us, "I'd make the same choice again in a heartbeat."
                                    </p>

                                </div>
                            </div>

                            <div className="relative">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Quartzite: Nature's Workhorse</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Think of quartzite as granite's tougher cousin. Natural beauty with extreme durability. Heat-resistant. Scratch-resistant. Low-maintenance. One Hopkinton family told us their quartzite countertops "survived three teenagers and still look brand new five years later."</p>
                                </div>
                            </div>

                            <div className="relative ">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Soapstone: The Understated Classic</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Smooth, matte finish. Naturally non-porous (no sealing required). Develops a rich patina over time. Perfect for farmhouse or traditional kitchens where you want character, not shine.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-gray-600 leading-relaxed">Each stone has its personality. We help you find the one that matches yours.</p>
                        </div>

                    </div>
                </section>

                <section className="py-16 bg-black text-white">
                    <div className=" sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-2">
                                <h3 className="text-3xl font-bold text-white mb-4">Quartz Installers Near Hopkinton: Modern Performance Meets Premium Aesthetics</h3>
                                <p className=" leading-relaxed">Engineered quartz is what happens when you solve every problem natural stone has while keeping all the beauty.</p>
                                <ul className="mt-6 list-disc list-inside  mb-4">
                                    <li className="mt-4">Non-porous? Check. (No sealing. Ever.)</li>
                                    <li className="mt-2 ">Stain-resistant? Check. (Coffee, wine, marinara—bring it.)</li>
                                    <li className="mt-2 ">Consistent color? Check. (What you see is exactly what gets installed.)</li>
                                    <li className="mt-2 ">Heat-resistant? Check. (Within reason—still use trivets.)</li>
                                    <li className="mt-2 ">Scratch-resistant? Check. (Daily use won't show wear.)</li>
                                    <li className="mt-2 ">Virtually maintenance-free? Check. (Soap and water. That's it.)</li>
                                </ul>

                                <p className=" leading-relaxed  mb-4">A Hopkinton homeowner with four kids told us their quartz countertops "are the only surfaces in the house that still look new after three years of chaos."</p>
                                <p className=" leading-relaxed">That's the quartz promise: premium appearance with zero-drama performance.</p>

                            </div>
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold  mb-4">Our quartz installers near Hopkinton guide you through the entire process:</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fa fa-bug text-blue-600" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xl font-semibold mb-2">Color Selection Without Regret</div>
                                                <p >Quartz offers hundreds of options—classic marble looks, bold contemporary patterns, subtle neutrals, even colors that don't exist in nature. We help you choose based on your lighting, cabinet color, and lifestyle—not just what's trending on Pinterest.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                <i className="fa fa-clock-o text-green-600" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xl font-semibold  mb-2">Digital Precision</div>
                                                <p>We use digital templating technology that captures your space with accuracy you can't achieve with cardboard templates. This matters especially for quartz, which doesn't forgive measurement errors.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <i className=" text-purple-600" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xl font-semibold ">Expert Fabrication and Installation</div>
                                                <p>Quartz is engineered to be incredibly strong, but it's also unforgiving during cutting and installation. Our fabricators and installers have completed hundreds of quartz projects in Hopkinton. They know how to handle undermount sinks, complex edge profiles, and inside corners without issues.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 ">
                            <div className="text-xl font-semibold mb-2">The Result:</div>
                            <p>A countertop that looks high-end, performs flawlessly, and requires nothing more than basic cleaning to maintain. It's the practical choice that doesn't look practical at all.</p>
                        </div>

                    </div>
                </section>

                <section className="py-16 ">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Our 3-Step Process: From First Meeting to Finished Kitchen in Weeks
                            </h2>
                            <p className="text-sm tracking-widest text-gray-600 font-medium mt-2">
                                Getting new stone countertops in Hopkinton, MA shouldn't mean living in construction limbo for months. We've streamlined everything so the process is enjoyable instead of stressful.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">

                            <div className="relative">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <div className=" flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                                        <span className="text-2xl font-bold text-white">1</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Free Consultation & Precise Measurement</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We have a call about your Hopkinton home and we actually listen. How do you use your kitchen? Do you bake regularly? Do kids do homework at the island? Do you entertain often? Your answers shape which stone we recommend—not our profit margin. We take precise measurements of your space, discuss timeline and budget openly, and answer every question honestly.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                                        <span className="text-2xl font-bold text-white">2</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Material Selection & Off-Site Fabrication</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Visit our slab gallery and choose from our wide selection of granite, quartz, and natural stone slabs. See full pieces, not tiny samples. Touch the surface. Compare options in different lighting. Once you've selected your material, we create a digital template (no messy cardboard) and fabricate your countertops at our facility. Your home stays clean and livable while we work.</p>
                                </div>
                            </div>

                            <div className="relative ">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                                        <span className="text-2xl font-bold text-white">3</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Professional Installation & Clean Finish</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Our installers arrive on schedule, fit your countertop with precision, seal if necessary (granite and some natural stones), clean up completely, and hand you a kitchen that's ready to use immediately. Most installations take just one day. You'll be making dinner on your new surface that same evening.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-gray-600 leading-relaxed">No surprises. No excuses. No ghosting between steps.</p>
                        </div>

                    </div>
                </section>

                <section className="py-16 bg-gray-100 px-20">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Why Hopkinton Homeowners Choose Stone Concepts
                            </h2>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Free Consultation in Hopkinton</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">
                            We measure your space. We discuss your needs. No pressure. No obligation. Just honest guidance from people who've been doing this for decades.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">A Showroom That Actually Helps</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6"> We don't hand you a binder of photos and wish you luck. Our slab gallery displays hundreds of full granite and quartz slabs. You see the actual stone. You touch it. You compare options side-by-side. You make a confident choice.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">Expert Fabrication Without the Drama</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6"> Our fabricators have been cutting stone longer than most homeowners have owned their homes. They understand material properties, stress points, and how to make seams disappear. The difference shows in the final product.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">Installation That Respects Your Schedule</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">We show up when promised. We work efficiently. We clean up thoroughly. We don't leave your kitchen unusable for days or weeks. Most projects go from template to installation in 2-3 weeks, and installation itself takes just one day.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">Quality and Satisfaction Guaranteed</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">We don't consider the job done until you're genuinely thrilled. Tight seams, precise cutouts, smooth edges, and a polished final product aren't aspirations—they're guarantees.
                        </p>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">

                            {/* Left Content */}
                            <div className="md:w-1/2 space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Stop Settling for Countertops That Disappoint You
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    Every morning you wake up to those countertops is another day of settling for less than your home deserves. Another dinner party where you catch yourself apologizing for your kitchen. Another year of living with surfaces that make you cringe instead of smile.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Whether you need timeless granite countertops near Hopkinton, MA, modern quartz surfaces from expert quartz installers near Hopkinton, or elegant natural stone countertops in Hopkinton, MA, Stone Concepts transforms your vision into reality.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We handle every detail from selection through installation, so you can focus on planning that first dinner party in your transformed kitchen.
                                </p>

                                <h3 className="font-semibold">Call us today for your free consultation and quote.</h3>

                                <p className="text-gray-600 leading-relaxed">
                                    Let's create something you'll love for decades.
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

                            </div>
                        </div>
                    </div>
                </section>

                <FaqComponent nycFaqs={faqs} />

            </div>

        </div>
    )
}




