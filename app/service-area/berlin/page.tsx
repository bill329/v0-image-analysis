import Image from "next/image"
import FaqComponent from "@/components/faqComponent"

const blogs = [
    {
        id: 1,
        para: "See 200+ granite options in person. Touch them. Compare them under different lighting. See how the veining flows. We'll show you which stones work with your cabinets and which ones will make you second-guess your choice in six months.",
        title: "Slab Selection",
    },
    {
        id: 2,
        para: "We measure your space down to the millimeter. Every outlet, every corner, every awkward angle that makes Berlin homes charming but challenging—we account for it all.",
        title: "Precision Templating",
    },
    {
        id: 3,
        para: "Our fabricators have been cutting stone for more than a decade. Tight seams. Clean edges. Precise cutouts for sinks and cooktops that fit the first time.",
        title: "Expert Fabrication",
    },
    {
        id: 4,
        para: "We treat your home like it's ours. Drop cloths. Careful maneuvering. A final cleanup that leaves your space ready to use immediately.",
        title: "Careful Installation",
    },
];

export default function ServiceAreaPage() {

    const faqs = [
        {
            question: "Can a hot pan go on a granite countertop?",
            answer:
                "We get this question constantly—usually right after someone's seen their friend's countertop develop a heat mark. Here's the truth: Yes, granite handles heat. But we always recommend using a trivet. ",
        },
        {
            question: "Which is more expensive, quartz or marble?",
            answer:
                "Marble typically costs more upfront and requires more maintenance over time (periodic sealing, careful cleaning). Quartz costs less initially and requires almost zero maintenance. But here's what matters more than price: which one fits your lifestyle? If you love the natural variation of marble and don't mind a little upkeep, it's worth every penny. If you want set-it-and-forget-it performance, quartz delivers incredible value."
        },

        {
            question: "Who offers the best stone countertops in Berlin, MA?",
            answer:
                "We're obviously biased, but here's what our Berlin clients say: Stone Concepts offers the widest selection of materials in the area, complete guidance from selection through installation, and installers who show up when promised. We've completed many local projects and seen every possible layout challenge Berlin homes present. Check our reviews, talk to neighbors who've worked with us, and decide for yourself."
        },
        {
            question: "What is the downside of granite countertops?",
            answer:
                "Granite requires periodic sealing (every 1-2 years depending on the stone)—that's about 15 minutes of effort annually. It's also heavy, which matters during installation but not after. The reality? For most Berlin homeowners, granite's combination of durability, beauty, and heat resistance makes it the ideal choice despite the minimal maintenance."
        },

    ]

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
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Stone Concepts WPC (Berlin, MA)</h1>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">

                            {/* Left Content */}
                            <div className="md:w-1/2 space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Your Berlin Kitchen Deserves Better Than "Good Enough"
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    You know the feeling. You're wiping down countertops that never quite look clean. The grout lines are permanently stained. That chip near the sink catches your eye every single morning. You've been meaning to upgrade for years, but the thought of navigating contractors, making the wrong stone choice, or living through a kitchen demolition kept you putting it off.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Meanwhile, every dinner party comes with a quiet apology: "Sorry about the kitchen—we're planning to renovate someday."
                                </p>

                                <h3 className="font-semibold">That someday can be three weeks from now.</h3>

                                <p className="text-gray-600 leading-relaxed">
                                    Stone Concepts specializes in transforming Berlin homes with premium granite countertops, natural stone, and quartz surfaces that don't just look beautiful on installation day—they look beautiful ten years later. Whether you're finally upgrading that kitchen island, giving your bathroom the spa treatment, or creating an outdoor cooking area that becomes the neighborhood gathering spot, we handle everything from selection to installation.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    And here's what makes us different: We know the quirks of Colonial-era homes and split-level layouts. We know how to deliver on time and keep promises.
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
                                Granite Countertops in Berlin: Beauty That Outlasts Trends
                            </h3>
                            <div className="text-sm uppercase tracking-widest text-gray-600 font-medium mt-2">
                                There's a reason granite has remained the gold standard for 30+ years—it actually works.
                            </div>

                            <p className="text-gray-600 leading-relaxed mt-2">Natural veining that makes every slab one-of-a-kind. Rich color variations you can't replicate with manufactured materials. Exceptional strength that handles hot pans, knife marks, and the daily chaos of family life without showing wear.</p>
                            <p className="text-gray-600 leading-relaxed mt-2">When you choose granite countertops in Northborough through Stone Concepts, you're not just buying slabs—you're getting a proven process:</p>
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
                        <p className="text-gray-600 leading-relaxed mt-10 text-center">The result? A granite countertop that fits so seamlessly, visitors assume it's always been there.</p>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">
                            {/* Left Content */}

                            <div className="md:w-1/2 relative mt-10 md:mt-0">
                                <Image
                                    src="/images/danby-marble-kitchen-island-lexington.webp"
                                    alt="Yoga Studio"
                                    width={600}
                                    height={400}
                                    className=" w-full object-cover"
                                />

                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Stone Countertops in Berlin, MA: Beyond Granite
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Maybe granite isn't your style. Maybe you fell in love with the timeless elegance of marble. Maybe you need the indestructible durability of quartzite for your busy household. Or maybe you want the consistent, low-maintenance performance of engineered quartz.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We offer it all.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Our stone countertops in Berlin, MA service gives you complete flexibility in both aesthetics and function. From classic natural stone textures to modern edge profiles and contemporary finishes, we create fully integrated countertop solutions tailored to how you live.
                                </p>

                            </div>
                        </div>

                    </div>
                </section>

                <section className="pb-16">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Which Stone Is Right for Your Space?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">

                            <div className="relative">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Marble Countertops: The Luxury Choice</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Best for: Bathroom vanities, decorative islands, baking stations, low-traffic kitchens <br />
                                        Last month, we installed Carrara marble in a Berlin bathroom. The homeowner called it "the most
                                        spa-like space in the house." Marble offers that naturally cool surface bakers love, a luminous finish
                                        that catches light beautifully, and an unmistakable luxury aesthetic. <br />
                                        The tradeoff? It's softer than granite. It can etch from acidic liquids. But in the right application, nothing compares.

                                    </p>

                                </div>
                            </div>

                            <div className="relative">
                                  <div className="bg-gray-100 p-8 h-full border border-gray-400 ">

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quartzite Countertops: The Workhorse</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Best for: High-traffic kitchens, busy family homes, outdoor cooking areas. <br />
                                        Think of quartzite as granite's tougher older brother. It has the natural beauty of stone
                                        with extreme durability that handles everything from meal prep marathons to kids doing homework
                                        at the kitchen island. One Berlin family with four boys says their quartzite countertops
                                        "still look brand new after three years of absolute chaos." <br />
                                        Low-maintenance. Heat-resistant. Scratch-resistant. And gorgeous.
                                    </p>
                                </div>
                            </div>

                            <div className="relative ">
                                  <div className="bg-gray-100 p-8 h-full border border-gray-400 ">

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Engineered Stone (Quartz) Countertops: The Modern Solution</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Best for: Contemporary kitchens, commercial spaces, high-use family areas <br />
                                        Engineered quartz gives you consistent color and pattern (no surprises), non-porous surfaces that
                                        resist stains and bacteria, and virtually zero maintenance. No sealing. No special cleaners. Just
                                        wipe and go. <br />
                                        It's the practical choice that doesn't look practical.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>


                <section className="py-16 ">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Our 3-Step Process: From Consultation to Coffee on Your New Countertop
                            </h2>
                            <p className="text-sm tracking-widest text-gray-600 font-medium mt-2">
                                We've streamlined the process so getting granite countertops in Berlin doesn't mean living in construction chaos for months.
                            </p>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
                            <div className="relative">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                                        <span className="text-2xl font-bold text-white">1</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Consultation & Measure</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We have a quick call to learn how you use your space. This is where we ask the questions other contractors skip:
                                    </p>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Do you bake?
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Do you entertain?
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Do you have kids who do science experiments on the counter?
                                        </li>
                                    </ul>
                                    <p className="text-gray-600  mt-4">
                                        The answers shape which stone we recommend.
                                    </p>
                                </div>
                            </div>


                            <div className="relative">
                                 <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                                        <span className="text-2xl font-bold text-white">2</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Material Selection & Fabrication</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Visit the stone warehouse and choose your stone in person from full slabs. We template your space digitally (no more messy cardboard templates), then fabricate your countertops with state of the art machines in our shop. Your home stays livable while we work.
                                    </p>

                                </div>
                            </div>


                            <div className="relative ">
                               <div className="bg-gray-100 p-8 h-full border border-gray-400 ">
                                    <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                                        <span className="text-2xl font-bold text-white">3</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Installation & Finish</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Our installers arrive, fit your countertop with precision, clean up completely, and hand you the space ready to use. Most installations take just one day. You'll be making dinner on your new granite countertop that same evening.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="text-center mt-8">
                            <p className="text-gray-600 leading-relaxed"> No surprises. No excuses. No disappearing for weeks between steps.</p>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-100 px-20">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Why Berlin Homeowners Choose Stone Concepts
                            </h2>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">We Know Berlin Homes</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">
                            From the historic properties on Linden Street to the newer developments off Route 62, we've worked in Berlin neighborhoods for years. We know the layout challenges. We know which stones work with Colonial architecture. We understand local building requirements.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">200+ Slabs to Choose From</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6"> Our showroom isn't a catalog of photos—it's the gallery of actual slabs. See the veining. Feel the texture. Compare options side-by-side. Make a confident choice.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">Transparent Process, Zero Surprises</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">We give you clear pricing upfront. We show you exactly what to expect at each step. We don't disappear for weeks between templating and installation. We answer our phones.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">Obsessive Attention to Detail</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">Tight seams that are nearly invisible. Precise cutouts that fit perfectly around fixtures. Clean edges with no chips. A polished final product that exceeds expectations.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">A Countertop That Outlasts Your Mortgage</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">We're not interested in selling you the most expensive stone. We're interested in selling you the right stone—the one that still makes you smile in ten years.
                        </p>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">

                            {/* Left Content */}
                            <div className="md:w-1/2 space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Ready to Transform Your Space?
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    Every week you delay is another week of living with countertops that don't reflect the home you've built. Another season of apologizing for your kitchen when family visits. Another year of that chipped laminate catching your eye every morning.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Stone Concepts makes the process easy. From durable granite countertops in Berlin to elegant marble, quartzite, and quartz—we handle every detail so you can focus on planning your first dinner party in your transformed kitchen.
                                </p>

                                <h3 className="font-semibold">Call us today for your free consultation and quote.</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Let's create something beautiful together.</p>
                            </div>


                            <div className="md:w-1/2 relative mt-10 md:mt-0">
                                <Image
                                    src="/images/porcelain-island-new-hampshire.jpeg"
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


