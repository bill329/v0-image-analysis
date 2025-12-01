import Image from "next/image"
import FaqComponent from "@/components/faqComponent"

const blogs = [
    {
        id: 1,
        para: "See hundreds of granite options in person. Not photos. Not samples. Full slabs. Touch the surface. See how the veining flows. Compare how different stones look under various lighting. We'll show you which granites work with your cabinet color and which ones will feel like a mistake in six months.",
        title: "Slab Selection That Matters",
    },
    {
        id: 2,
        para: "We measure your space with digital accuracy. Every outlet. Every corner. Every awkward angle that makes Northborough homes charming but challenging. Our templates account for it all, so installation day goes smoothly.",
        title: "Precision That Shows",
    },
    {
        id: 3,
        para: "Our fabricators have been cutting stone for more than a decade. They understand how granite moves, how it breaks, where stress points develop. The result? Tight seams. Clean edges. Precise cutouts that fit the first time.",
        title: "Fabrication You Can Trust",
    },
    {
        id: 4,
        para: "We treat your Northborough home like it's ours. Drop cloths protect your floors. Careful maneuvering prevents wall damage. Thorough cleanup means you're cooking dinner on your new granite countertop that same evening.",
        title: "Installation That Respects Your Home",
    },
];

export default function ServiceAreaPage() {

    const nycFaqs = [
        {
            question: "What are the negatives of quartz countertops?",
            answer:
                "We believe in honest advice, so here's the truth: Quartz costs more upfront than laminate or tile (though it's comparable to mid-range granite). It can't handle extreme direct heat—set a 500-degree pan directly on quartz and you might get a mark, so use trivets for safety. Also, quartz is best for indoor use; UV exposure can cause discoloration over time, so it's not ideal for outdoor kitchens. Finally, it's not a DIY-friendly material due to weight and precision required for cutting. But here's what quartz owners tell us: 'The lack of maintenance makes it worth every penny.' No sealing. No staining. No etching. Just clean and go.",
        },
        {
            question: "Are quartz countertops dishwashing soap safe?",
            answer:
                "Absolutely. Mild dish soap and water is the recommended cleaning method for quartz. No special cleaners needed. No sealing required. Just regular soap, a soft cloth, and you're done. It's one of the reasons busy Northborough families love quartz—there's no complicated maintenance routine to remember.",
        },
        {
            question: "Which is better, quartz or marble worktops?",
            answer:
                "The honest answer? It depends on where you're installing it and what you value most. Marble wins on pure aesthetics—nothing looks quite like Calacatta marble. But it scratches more easily, etches from acidic liquids, and requires periodic sealing. Quartz wins on practicality—it's virtually indestructible for daily use and needs zero maintenance. Here's our recommendation: Use marble in bathrooms, powder rooms, or decorative islands where beauty matters more than durability. Use quartz in busy kitchens, family spaces, or anywhere that gets heavy use. We'll never push you toward the most expensive option—we'll push you toward the right option for your lifestyle.",
        },
        {
            question: "Do you provide countertop installers in Northborough, MA?",
            answer:
                "Yes—installation is included when you order countertops through us, not an added expense. Here's how it works: Once you select your stone and we fabricate your countertops off-site, our expert installers schedule a convenient time to come to your Northborough home. They arrive with all necessary tools and materials, install your countertops with precision, clean up completely, and walk you through any care instructions before leaving. Most installations take just one day. You're not hiring a separate installer and hoping they communicate with the fabricator—we handle everything under one roof for a seamless experience from start to finish.",
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/quartzite-island-brookline.webp"
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
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">The Kitchen That Finally Matches Your Home</h1>
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
                                    The Kitchen That Finally Matches Your Home
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    You've upgraded everything else. New appliances. Fresh paint. Updated lighting.
                                    But every time you walk into your kitchen, those countertops remind you there's still work to do.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    The laminate shows every water stain. The tile grout never looks quite clean.
                                    That crack near the cooktop has been there so long, you've stopped noticing it—except
                                    when guests visit and you catch yourself making excuses.
                                </p>

                                <h3 className="font-semibold"> What if your countertops could be the showpiece instead of the apology?</h3>

                                <p className="text-gray-600 leading-relaxed">
                                    Stone Concepts transforms Northborough homes with premium countertops that don't
                                    just survive daily life—they elevate it. From heat-resistant granite countertops
                                    in Northborough to luxurious marble countertops in Northborough to virtually indestructible
                                    engineered quartz, we're the countertop installers in Northborough, MA who handle
                                    everything from selection through installation.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    And here's why Northborough homeowners keep recommending us: we've been doing this for decades.
                                    We know which stones work with Colonial-style homes. We understand the layout quirks of split-levels
                                    and raised ranches. We source from suppliers who deliver quality, not surprises.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    When you're ready to stop apologizing for your countertops and start showing them off, we're ready to help.
                                </p>
                            </div>


                            <div className="md:w-1/2 relative mt-10 md:mt-0">
                                <Image
                                    src="/images/fantasy-brown-kitchen-lexington.webp"
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
                                Granite Countertops in Northborough: Built for Real Life
                            </h3>
                            <div className="text-sm uppercase tracking-widest text-gray-600 font-medium mt-2">
                                Granite isn't trendy—it's timeless. And there's a reason it's remained the gold standard for kitchen countertops for 30+ years.
                            </div>
                            <div className="text-sm uppercase tracking-widest font-medium mt-6">
                                It works.
                            </div>
                            <p className="text-gray-600 leading-relaxed mt-2">Natural patterns that make every installation unique. Heat resistance that handles hot pans without panic. Durability that stands up to knife slips, dropped dishes, and the daily chaos of family life. Beauty that doesn't fade after the first year.
                                Last month, we installed Absolute Black granite in a Northborough kitchen. The homeowner told us, "I didn't realize how much mental energy I was spending worrying about my old countertops until they were gone."
                                That's the granite difference.</p>
                            <p className="text-gray-600 leading-relaxed mt-2">When you choose granite countertops in Northborough through Stone Concepts, you're not just buying slabs—you're getting a proven process:</p>
                        </div>

                        {/* Blog List */}
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            {blogs.map((blog) => (
                                <li
                                    key={blog.id}
                                    className="border border-[2px] border-gray-700 border-dashed  p-6 flex flex-col"
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
                        <p className="text-gray-600 leading-relaxed mt-10 text-center">The end result? A granite surface that looks so natural in your kitchen, visitors assume it's always been there.</p>
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
                                    Marble Countertops in Northborough: When Only Luxury Will Do
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Some stones demand attention. Marble is one of them.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Walk into a bathroom with Carrara marble, and you immediately feel the difference. The soft veining. The luminous finish. The unmistakable luxury that no engineered material can replicate.
                                </p>

                                <h5 className="font-semibold">Marble isn't practical for every space—but in the right application, nothing compares.</h5>

                                <p className="text-gray-600 leading-relaxed">
                                    We installed marble countertops in Northborough last week for a homeowner renovating a master bathroom. She'd been debating between quartz and marble for months. The moment she saw the Calacatta marble installed, she said, "I'm so glad I didn't play it safe."
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    That's marble's power. It elevates a space from "nice" to "stunning."
                                </p>

                                {/* 

                           */}
                            </div>
                        </div>
                        <div className="mt-12 px-20">
                            <h3 className="font-semibold">Where Marble Shines:</h3>
                            <ul className="mt-6 list-disc list-inside text-gray-600  mb-4">
                                <li className="mt-4">	Bathroom vanities that feel like a spa retreat</li>
                                <li className="mt-2 ">	Decorative islands that become conversation pieces</li>
                                <li className="mt-2 ">	Baking stations (marble's naturally cool surface is perfect for pastry work)</li>
                                <li className="mt-2 ">	Powder rooms where elegance matters more than durability</li>

                            </ul>

                            <h3 className="font-semibold">The Honest Truth About Marble:</h3>
                            <p className="text-gray-600 leading-relaxed mt-6">
                                It's softer than granite. It can etch from acidic liquids like lemon juice or wine. It requires periodic sealing and thoughtful care.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">
                                But here's what marble owners tell us: "I don't regret it for a second."
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">
                                When we install marble countertops in Northborough, we treat them with the craftsmanship they deserve. Precise cuts. Seamless joins. Expert sealing. And guidance on maintenance that keeps your marble looking beautiful for decades.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2">
                                If you're seeking sophistication that makes a statement, marble delivers.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-black text-white">
                    <div className=" sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-2">
                                <h3 className="text-3xl font-bold text-white mb-4">Quartz Installers Near Northborough: The Modern Performance Choice</h3>
                                <p className=" leading-relaxed">Engineered quartz is what happens when you take everything homeowners love about natural stone and solve all the problems.</p>
                                <ul className="mt-6 list-disc list-inside  mb-4">
                                    <li className="mt-4">Non-porous surface? Check. (No sealing. Ever.)</li>
                                    <li className="mt-2 ">Stain-resistant? Check. (Coffee, wine, turmeric—bring it on.)</li>
                                    <li className="mt-2 ">Heat-resistant? Check. (Within reason—use a trivet for very hot pans.)</li>
                                    <li className="mt-2 ">Scratch-resistant? Check. (Cutting boards are still smart, but daily use won't show wear.)</li>
                                    <li className="mt-2 ">Consistent color and pattern? Check. (What you see in the showroom is what gets installed.)</li>
                                </ul>
                                <p className=" leading-relaxed  mb-4">One Northborough family with three kids told us their quartz countertops "still look exactly like installation day three years later, and we're not gentle with them."</p>
                                <p className=" leading-relaxed">That's the quartz promise: premium appearance with zero-maintenance performance.</p>

                            </div>
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold  mb-4">Our quartz installers near Northborough guide you through the entire process:</h3>
                                <ul className="space-y-6">
                                    <li>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <i className="fa fa-bug text-blue-600" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xl font-semibold mb-2">Color Selection That Works</div>
                                                <p >Quartz offers hundreds of options—from classic marble looks to bold contemporary patterns to subtle neutrals. We help you choose based on your cabinets, lighting, and lifestyle, not just what looks good in the showroom.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                <i className="fa fa-clock-o text-green-600" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xl font-semibold  mb-2">Expert Template and Fabrication</div>
                                                <p>We use digital templating for precision you can't achieve with cardboard. Our fabricators understand how engineered stone behaves differently from natural stone, which matters for strength and longevity.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <i className=" text-purple-600" aria-hidden="true"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xl font-semibold ">Flawless Installation</div>
                                                <p>Quartz is heavy and unforgiving—there's no room for error. Our installers have completed hundreds of quartz projects in Northborough homes. They know how to handle inside corners, undermount sinks, and complex edge details without issues.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 ">
                            <div className="text-xl font-semibold mb-2">The Result:</div>
                            <p>A countertop that looks high-end, performs flawlessly, and requires nothing more than soap and water to maintain. It's the practical choice that doesn't look practical.</p>
                        </div>

                    </div>
                </section>

                <section className="py-16 ">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Our 3-Step Process: From Consultation to Cooking in Weeks, Not Months
                            </h2>
                            <p className="text-sm tracking-widest text-gray-600 font-medium mt-2">
                                Getting new granite countertops in Northborough shouldn't mean living in construction chaos for half a year. We've streamlined everything so the process is enjoyable.
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
                                        We have a phone consultation about your Northborough home and how you use your space. We listen to how you actually use your kitchen or bathroom.
                                    </p>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Do you bake regularly?
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Do you have kids doing homework at the island?
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 mr-2">•</span>
                                            Do you entertain often?
                                        </li>
                                    </ul>
                                    <p className="text-gray-600  mt-4">
                                        The answers shape which stone we recommend. We take precise measurements and discuss your timeline and budget openly.
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
                                        Visit our stone warehouse and choose your stone in person. See full slabs, not tiny samples. Touch the surface. Compare options side-by-side.
                                    </p>
                                    <p className="text-gray-600">
                                        Once you've selected your material, we create a digital template of your space (no messy cardboard anymore) and fabricate your countertops off-site. Your home stays livable and clean while we work.
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
                                        Our installers arrive on schedule, fit your countertop with precision, seal if necessary, clean up completely, and hand you a space that's ready to use immediately.
                                    </p>
                                    <p className="text-gray-600 ">
                                        Most installations take just one day. You'll be making dinner on your new surface that same evening.
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
                                Why Northborough Homeowners Choose Stone Concepts
                            </h2>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Decades of Local Experience</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">
                            We're not new to this. We've been installing countertops in Northborough, MA for years. We know the architectural styles. We understand the layout challenges of older homes. We're familiar with local building requirements. That experience shows in every installation.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">A Showroom Worth Visiting</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6"> Our slab library isn't a binder of photos—it's hundreds of actual granite, marble, and quartz slabs you can see and touch. Make a confident choice based on the real material, not a two-inch sample.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">A Showroom Worth Visiting</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6"> We give you fixed pricing upfront. No hidden fees. No surprise charges. You know exactly what you're paying before we start.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">A Team That Actually Communicates</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">We answer our phones. We show up when promised. We keep you informed at every step. Revolutionary? No. Rare in this industry? Unfortunately, yes.
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">100% Satisfaction Guarantee</h3>
                        <p className="text-gray-600 leading-relaxed mt-2 mb-6">We don't consider the job done until you're thrilled with the result. Tight seams, precise cutouts, clean edges, and a polished final product aren't goals—they're guarantees.
                        </p>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center md:space-x-8">

                            {/* Left Content */}
                            <div className="md:w-1/2 space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    Stop Living with Countertops You Apologize For
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    Every week you delay is another week of wiping down surfaces that never look quite right. Another dinner party where you catch yourself explaining, "We're planning to renovate eventually." Another year of living in a kitchen that doesn't match the home you've built.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Whether you need durable granite countertops in Northborough, elegant marble countertops in Northborough, or modern quartz surfaces installed by expert quartz installers near Northborough, Stone Concepts transforms your vision into reality.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We handle every detail from selection through installation so you can focus on planning that first dinner party in your transformed kitchen.
                                </p>

                                <h3 className="font-semibold">Contact us today for your free consultation and quote.</h3>



                                <p className="text-gray-600 leading-relaxed">
                                    Let's create something beautiful together.

                                </p>

                            </div>


                            <div className="md:w-1/2 relative mt-10 md:mt-0">
                                <Image
                                    src="/images/danby-marble-kitchen-lexington.jpeg"
                                    alt="Yoga Studio"
                                    width={600}
                                    height={400}
                                    className=" w-full object-cover"
                                />

                            </div>
                        </div>
                    </div>
                </section>

                <FaqComponent nycFaqs={nycFaqs} />

            </div>

        </div>
    )
}
