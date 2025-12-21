"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessPage } from "@/components/business-page"
import { motion } from "framer-motion"
import AsepticComp from "@/components/aseptic"
import PackageComp from "@/components/packaging"
import ReusablePropsCOMMComp from "@/components/reusableoffering"
import DynamicHero from "@/components/dynamic-hero"
import DynamicCarouselModal from "@/components/dynamic-caraousal"
import SustainabilityTabs, { TabConfig } from "@/components/offeringstab"

import Image from "next/image"
import OfferingsTabs from "@/components/offeringstab"


const TAB_DATA = [
    {
        id: "offerings",
        label: "Our Offerings",
        items: [
            {
                image: "/images/bopet.png",
                title: "Biaxially Oriented Polyethylene Terepthalate (BOPET) films",
                description:
                    "BOPET is a type of polyester film made through biaxial orientation, which is the most preferred technology as it leads to improved properties, forming a thin, transparent, and uniform thermoplastic film. BOPET exhibits superior mechanical properties, improved resistance to chemicals, good barrier to oxygen, excellent receptivity to surface treatment and coatings, and high resistance to abrasion. BOPET films display higher performance characteristics, including high tensile strength, transparency, and barrier protection.",
            },
            {
                image: "/images/bopp.png",
                title: "Biaxially-Oriented Polypropylene (BOPP) films",
                description:"It is a thin, polypropylene film, having excellent tensile strength, optical clarity, and superior moisture resistance. The transparency, high rigidity, heat stability, and low cost of BOPP sheets make them an ideal option for packaging food, beverages, electronics. BOPP films are resistant against oils, grease, dangerous chemicals, and pollution. It is unaffected by moisture and does not shrink or wrinkle upon external environment changes."
                     },
            {
                image: "/images/cpp.png",
                title: "Cast Polypropylene (CPP) films",
                description: `CPP, or Cast Polypropylene, is manufactured through a cast extrusion process in which polypropylene resins are melted and extruded into a flat film. The film is then biaxially oriented—stretched in both the machine and transverse directions—enhancing its mechanical and optical properties. This process imparts excellent clarity, sealability, and strength, making CPP films ideal for a wide range of packaging.`
                    },
            {
                image: "/images/metallized.png",
                title: "Metalized films",
                description:
                    "UFlex’s decorative films and foils, developed using advanced metallization technology, involve the deposition of a thin layer of metal—typically aluminum—onto a film or foil substrate. This process not only enhances the material’s appearance but also imparts valuable functional properties, making it ideal for a wide range of applications such as packaging, labels, and other decorative finishes. These films offer excellent barrier properties against oxygen and water vapor, making them especially suitable for packaging products that require extended shelf life. Additionally, they are widely used in the textile and capacitor industries due to their aesthetic appeal and performance advantages." },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-06130321303.jpg",
                title: "AlOx-coated films",
                description:
                    "UFlex’s AlOx coated films feature a thin, transparent layer of aluminum oxide that offers excellent barrier properties against moisture and gases—comparable to aluminum foils and metalized films—while keeping the packaged product visible. Unlike traditional materials, these films are microwavable and retortable, making them ideal for processed and ready-to-eat foods. As one of the few manufacturers equipped with this advanced technology, UFlex delivers high-barrier, transparent packaging solutions with enhanced functionality." },
            {
                image: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item4-06130331303.jpg",
                title: "Speciality films",
                description:
                    "Our diverse range of specialty films delivers true value addition for converters by enhancing the quality, performance, and functionality of the final packaging—creating a win-win solution for both brands and consumers."  },
        ],
    },
    {
        id: "featured",
        label: "Featured Products",
        items: [

        ],
    },
    {
        id: "new",
        label: "New Arrivals",
        items: [

        ],
    },
] satisfies TabConfig[];


export default function Page() {
    return (
        <>
            <SiteHeader />
            <div className="bg-gradient-to-b from-white to-slate-50">
                <section className="relative w-full h-[260px] sm:h-[549px] overflow-hidden">
                    <Image
                        src="/images/sus/sp.png"
                        alt="Investors Relations"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/40" />


                </section>


                <OfferingsTabs tabs={TAB_DATA} />
            </div>



            <SiteFooter />

        </>
    )
}
