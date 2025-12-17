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
    { desc: "Every package we create has a story. It's about protecting the food families love, reducing waste, and building a more sustainable future.", title: "Making a difference", image: "/images/careers/c1.png" },
    { desc: "We don't just follow trends, we set them. Our commitment to quality innovation means you will be surrounded by brilliant minds, pushing the boundaries of what's possible in packaging.", title: "Innovation", image: "/images/careers/c2.png" },
    { title: "Growth", desc: "We believe in investing in our people. You'll have the opportunity to learn, grow, and lead, taking on challenging projects and shaping your career alongside industry experts.", image: "/images/careers/growth.png" },
    { title: "Building relationships", desc: "At UFlex, we're more than just colleagues, we're a family. We foster a culture of collaboration, support, and mutual respect, creating a workplace where you can thrive.", image: "/images/careers/c4.png" },
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
            <section className="bg-gradient-to-b from-white to-slate-50 ">
                <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden">
                    <Image
                        src="/images/careers/main.png"
                        alt="Notices and Announcements"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] lato-700 mb-1">
                            Careers
                        </h1>
                    </div>
                </section>

                {/* <div className="max-w-7xl mx-auto w-full px-4 sm:px-0 grid  items-center gap-10  py-12  lg:grid-cols-2 lg:gap-14 lg:py-20"> */}
                <div className="max-w-7xl mx-auto px-4">
                    <p className="lato-400 text-[15px] leading-relaxed text-[#6B6B6B] text-left mt-6">
                        At UFlex, we pride ourselves on fostering an inclusive, caring, and productive environment for our people. As a leading player in the flexible packaging industry, we engage and retain purpose-driven talent through a fair and consistent HR framework. Our entrepreneurial culture empowers employees to drive UFlex’s growth and success.
                        <span className="text-[#117ABA]">
                            Join us, and be part of a movement that's changing the world, one package at a time.
                        </span>
                        UFlex offers job seekers more than a job. It offers them a lifetime of growth with a number of opportunities for continuous development and growth in assorted fields of business.
                    </p>

                    <p className="lato-400 text-[15px] leading-relaxed text-[#6B6B6B] text-left mt-6">
                        If you are looking for a rewarding career, you may write to us at:
                        <span className="text-[#117ABA]">hr@uflexltd.com</span>
                    </p>

                    <p className="lato-400 text-[15px] leading-relaxed text-[#6B6B6B] text-left mt-6">
                        All current openings can be viewed at the link below. Click the button to submit your application.
                    </p>
                    {/* </div> */}



                </div>
                <div className='mt-8 w-full px-4 sm:px-0 text-center'>

                    <a
                        href="https://aa193.taleo.net/careersection/ex/jobsearch.ftl?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center rounded-sm texts-md lato-600 bg-[#117ABA] text-white w-auto mx-2 py-2 px-12 inline-block"
                    >
                        Apply Now
                    </a>

                </div>
                <motion.section
                    className="max-w-7xl mx-auto w-full px-4 sm:px-0 text-start "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="pt-8 text-[24px] lato-600 text-[#117ABA] md:text-[28px] md:text-5xl mb-2"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Why UFlex
                    </motion.h3>

                    <motion.h2
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-[#6B6B6B] lato-400 py-[2px] text-[16px] leading-relaxed md:text-[16px] mb-1"
                    >
                        At UFlex, we're not just shaping the future of packaging, we're revolutionizing it. For over three decades, we've been at the forefront of innovation, developing advanced solutions that preserve products, protect our planet, and empower our people.
                    </motion.h2>

                </motion.section>
                <AnimatedSection>
                    <div className="py-16 max-w-7xl mx-auto w-full px-4 sm:px-0 lg:py-4">
                        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
                            {items.map((it, idx) => {
                                const c = cardColors[idx % cardColors.length]
                                return (
                                    <motion.div
                                        key={it.desc}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={` relative overflow-hidden p-0  transition`}
                                    >
                                        <div className="relative h-75 w-[286px] sm:h-[369px] overflow-hidden">
                                            <Image
                                                src={it.image ?? "/images/whatwedo/placeholder.jpg"}
                                                alt={it.title}
                                                fill
                                                className="h-75 w-[286px] sm:h-[369px] rounded-b-none object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                        </div>

                                        <div className="space-y-2 p-1">
                                            <h3 className="text-center text-lg lato-400 text-[#117ABA]">{it.title}</h3>
                                            <p className={`lato-400 text-sm text-slate-700`}>
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
