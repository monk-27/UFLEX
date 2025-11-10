import { motion } from 'framer-motion'
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { AnimatedSection } from './animated-section'




type Item = {
    desc: string
    title: string
    image?: string
    blurb?: string
}

const items: Item[] = [
    { desc: "Every package we create has a story. It's about protecting the food families love, reducing waste, and building a more sustainable future.", title: "Making a difference", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/home-pointer/image1_20250923095732.jpg" },
    { desc: "We don't just follow trends, we set them. Our commitment to quality innovation means you'll be surrounded by brilliant minds, pushing the boundaries of what's possible in packaging.", title: "Innovation", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/home-pointer/image2_20250923095732.jpg" },
    { title: "Growth", desc: "We believe in investing in our people. You'll have the opportunity to learn, grow, and lead, taking on challenging projects and shaping your career alongside industry experts.", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/home-pointer/image3_20250923095732.jpg" },
    { title: "Building relationships", desc: "At UFlex, we're more than just colleagues, we're a family. We foster a culture of collaboration, support, and mutual respect, creating a workplace where you can thrive.", image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/home-pointer/image4_20250923095732.jpg" },
]

// Same palette you used for Board/Key Management
const cardColors = [
    // { border: "border-green-400", bg: "bg-green-50/70", title: "text-green-700", ring: "ring-green-200", tint: "bg-green-100/70" },
    // { border: "border-blue-400", bg: "bg-blue-50/70", title: "text-blue-700", ring: "ring-blue-200", tint: "bg-blue-100/70" },
    // { border: "border-pink-400", bg: "bg-pink-50/70", title: "text-pink-700", ring: "ring-pink-200", tint: "bg-pink-100/70" },
    // { border: "border-purple-400", bg: "bg-purple-50/70", title: "text-purple-700", ring: "ring-purple-200", tint: "bg-purple-100/70" },
    // { border: "border-yellow-400", bg: "bg-yellow-50/70", title: "text-yellow-700", ring: "ring-yellow-200", tint: "bg-yellow-100/70" },
    // { border: "border-cyan-400", bg: "bg-cyan-50/70", title: "text-cyan-700", ring: "ring-cyan-200", tint: "bg-cyan-100/70" },
    // { border: "border-orange-400", bg: "bg-orange-50/70", title: "text-orange-700", ring: "ring-orange-200", tint: "bg-orange-100/70" },
    // { border: "border-red-400", bg: "bg-red-50/70", title: "text-red-700", ring: "ring-red-200", tint: "bg-red-100/70" },
    // { border: "border-indigo-400", bg: "bg-indigo-50/70", title: "text-indigo-700", ring: "ring-indigo-200", tint: "bg-indigo-100/70" },
    { border: "border-[#117ABA]", bg: "bg-gray-100", title: "text-[#117ABA] ", ring: "ring-[#117ABA]", tint: "", textOnTint: "text-green-900" },

]
const Careers = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-white to-slate-50">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl"
                        >
                            Careers
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="manrope-400 mt-5 space-y-4 text-slate-700"
                        >
                            <p>
                                At UFlex, we pride ourselves on fostering an inclusive, caring, and productive environment for our people. As a leading player in the flexible packaging industry, we engage and retain purpose-driven talent through a fair and consistent HR framework. Our entrepreneurial culture empowers employees to drive UFlex’s growth and success.
                            </p>
                            <p>
                                <span className='manrope-700'>Join us, and be part of a movement that's changing the world, {" "}</span> one package at a time.

                                UFlex offers job seekers more than a job. It offers them a lifetime of growth with a number of opportunities for continuous development and growth in assorted fields of business.

                                If you are looking for a rewarding career, <span className='manrope-700'> you may write to us at: hr@uflexltd.com</span>

                                All current openings can be viewed at the link below.

                                Click the button to submit your application</p>
                            <div>
                                <button className='rounded-sm texts-md manrope-600 bg-[#117ABA] text-white w-1/3 mx-2 py-2'>
                                    Apply Now
                                </button>

                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl "
                    >
                        <Image
                            src="https://uflex.wpdevstudio.site/HTML/uploaded-files/category/images/What-We-Do01.jpg"
                            alt="UFlex capabilities across the value chain"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
                    </motion.div>
                </div>
                <motion.section
                    className="mx-auto max-w-6xl px-6 text-center sm:px-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-[24px] manrope-600 text-[#117ABA] md:text-[42px] md:text-5xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Why UFlex
                    </motion.h3>

                    <motion.h2
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-gray-800 manrope-700 py-[2px] text-[18px] leading-tight md:text-[20px] mb-4"
                    >
                        At UFlex, we're not just shaping the future of packaging, we're revolutionizing it.{" "}<br />
                        <span className="text-gray-800 manrope-400">

                            For over  three decades, we've been at the forefront of innovation, developing advanced solutions that preserve products, protect our planet, and empower our people.</span>
                    </motion.h2>

                </motion.section>
                <AnimatedSection>
                    <div className="max-w-6xl px-4 py-12 sm:px-2 lg:py-16">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {items.map((it, idx) => {
                                const c = cardColors[idx % cardColors.length]
                                return (
                                    <motion.div
                                        key={it.desc}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`group relative overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg} p-0 shadow transition`}
                                    >
                                        <div className="relative h-75 sm:h-60 w-full overflow-hidden">
                                            <Image
                                                src={it.image ?? "/images/whatwedo/placeholder.jpg"}
                                                alt={it.title}
                                                fill
                                                className="rounded-b-none object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                        </div>

                                        <div className="space-y-2 p-5">
                                            <h3 className="text-lg manrope-800 text-gray-700">{it.title}</h3>
                                            <p className={`manrope-400 text-sm text-slate-700`}>
                                                {it.desc}
                                            </p>

                                        </div>

                                        {/* subtle color band on bottom to match theme */}
                                        <div className={`h-1 w-full ${c.tint}`} />
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    )
}

export default Careers
