
"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
    XMarkIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function ReportsGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedMainImage, setSelectedMainImage] = useState(0);


    const images = [
        {
            main: {
                src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2023-2418.jpg",
                title: "2023-2024",
                alt: "Government Building",
                className: "col-span-1",
                description: "",
            },
            gallery: [
                {
                    alt: "Government Building",
                    src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2023-2418.jpg",
                    title: "2023-2024",
                    description: "We have been a forerunner in sustainable innovation and commitment toward the ‘Circular Economy’ via its technologies, diverse product portfolio, and processes. Our threefold sustainable solution – source substitution, source reduction and bio-degradable packaging solutions, are contributing to our efforts of achieving a sustainable circular economy.",

                },

            ],
        },
        {
            main: {
                src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2022-2341.jpg",
                alt: "Group of people",
                className: "col-span-2",
                title:
                    "2022-2023",
                description: "",
            },
            gallery: [
                {
                   src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2022-2341.jpg",
                    alt: "Group of people",
                    title: "2022-2023",
                    description:
                        "Sustainability is deeply ingrained in the DNA of UFlex. We recognize the critical role businesses play in environmental conservation, and therefore, we strive to minimize our ecological footprint through an array of sustainability initiatives.",
     },
                
            ],
        },
        {
            main: {
                src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2021-2200.jpg",
                alt: "Government Building Wide",
                className: "col-span-2",
                title:
                    "2021-2022",
                description:
                    "",
            },
            gallery: [
                {
                src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/blog/images/2021-2200.jpg",

                    alt: "Government Building Wide",
                    title: "2021-2022",
                    description:
                        "We have been a forerunner in sustainable innovation and commitment toward the ‘Circular Economy’ via its technologies, diverse product portfolio, and processes. Our threefold sustainable solution – source substitution, source reduction and bio-degradable packaging solutions, are contributing to our efforts of achieving a sustainable circular economy.",
                },

            ],
        },
        {
            main: {
                src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image49.webp",
                alt: "",
                className: "col-span-1",
                title:
                    "Vision 2035",
                description: "",
            },
            gallery: [
                {
                src: "https://uflex.wpdevstudio.site/HTML/uploaded-files/page-images/image49.webp",

                    alt: "Meeting Session",
                    title: "Vision 2035",
                    description:
                        " Committed to achieving carbon neutrality by 2035. Sustainability and environmental stewardship are at the forefront of our business practices.   Our business strategies align with our ESG vision, and we consistently strive to deliver innovative and responsible packaging solutions.",
                },
                
            ],
        },
    ];

    const openModal = (mainIndex: SetStateAction<number>, galleryIndex = 0) => {
        setSelectedMainImage(mainIndex);
        setCurrentIndex(galleryIndex);
        setIsOpen(true);
    };

    const nextImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % images[selectedMainImage].gallery.length,
        );
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + images[selectedMainImage].gallery.length) %
                images[selectedMainImage].gallery.length,
        );
    };

    return (
        <section className="mx-auto max-w-7xl px-4 py-10 text-center xl:px-0">
            <motion.h2
                className="poppins-800 mb-6 mt-6 text-3xl text-[#255994] sm:text-6xl md:mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                Sustainability
            </motion.h2>

            <motion.div
                className="mt-6 grid grid-cols-3 gap-4 sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`group relative cursor-pointer overflow-hidden ${image.main.className}`}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(index)}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        style={{ transformOrigin: "left" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img
                            src={image.main.src}
                            alt={image.main.alt}
                            width={500}
                            height={500}
                            className="h-full max-h-96 w-full object-cover object-top grayscale filter transition duration-300 group-hover:grayscale-0"
                        />
                        <motion.div
                            className=" absolute inset-0 mx-4 flex items-end justify-center pb-4 text-center text-white opacity-0 transition-opacity duration-300"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="poppins-700 w-full bg-white px-4 py-2 text-green-700">
                                {image.main.title}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
                {/* Modal */}
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
                >
                    <motion.div
                        className="relative mx-auto w-full max-w-[1100px] rounded-xl bg-white p-4 sm:p-8"
                        initial={{ x: "60%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {/* Close */}
                        <button
                            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                        >
                            <XMarkIcon className="h-5 w-5 text-black" />
                        </button>

                       


                        {/* ================= Desktop / Tablet ================= */}
                        <div className="hidden sm:grid sm:grid-cols-[1fr_100px] sm:gap-4">
                            {/* Left column: title (centered), image, description */}
                            <div className="flex flex-col items-center">
                                {/* Title large & centered at top */}
                                <motion.h2
                                    className="poppins-700 mb-4 w-full text-center text-2xl md:text-3xl text-green-900"
                                    initial={{ opacity: 0, y: -12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    {images[selectedMainImage].gallery[currentIndex].title}
                                </motion.h2>

                                {/* Main image */}
                                <Image
                                    src={images[selectedMainImage].gallery[currentIndex].src}
                                    alt={images[selectedMainImage].gallery[currentIndex].alt}
                                    width={900}
                                    height={600}
                                    className="max-h-[60vh] w-auto max-w-full object-contain"
                                />

                                {/* Description under image */}
                                <motion.p
                                    className="font-helvetica-regular mt-4 w-full text-left text-base md:text-lg text-gray-900"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    {images[selectedMainImage].gallery[currentIndex].description}
                                </motion.p>
                            </div>

                            {/* Right column: vertical thumbnails */}
                            {/* <div className="flex max-h-[80vh] flex-col gap-2 overflow-y-auto p-1">
                                {images[selectedMainImage].gallery.map((image, index) => (
                                    <button key={index} onClick={() => setCurrentIndex(index)} aria-label={`Open ${image.alt}`}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            width={80}
                                            height={80}
                                            className={`h-16 w-16 rounded border-2 object-cover transition-all duration-200 ${index === currentIndex ? "border-gray-900" : "border-transparent"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div> */}
                        </div>

                        {/* ================= Mobile (exact layout you provided) ================= */}
                        <div className="sm:hidden"
                            onClick={() => setIsOpen(false)}
                        >
                            {/* Hero image */}
                            <div className="relative h-[40vh] w-full overflow-hidden rounded">
                                <Image
                                    src={images[selectedMainImage].gallery[currentIndex].src}
                                    alt={images[selectedMainImage].gallery[currentIndex].alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Small title row */}
                            <div className="mobsubheads mt-4 w-full py-2">
                                <h2 className="subheadtext text-[14px] text-center">
                                    <span>{images[selectedMainImage].gallery[currentIndex].title}</span>
                                </h2>
                            </div>

                            {/* White card with description */}
                            <div className="w-full rounded-lg bg-white p-4 text-[#2A2A2A] shadow-lg">
                                <p className="mb-2 text-[16px] leading-relaxed text-[#333]">
                                    {images[selectedMainImage].gallery[currentIndex].description}
                                </p>
                            </div>

                            {/* Optional: mobile thumb strip (horizontal). Delete if not needed. */}
                            {/* <div className="mt-3 flex gap-2 overflow-x-auto">
        {images[selectedMainImage].gallery.map((image, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} aria-label={`Open ${image.alt}`}>
            <img
              src={image.src}
              alt={image.alt}
              className={`h-16 w-16 rounded object-cover border-2 ${
                index === currentIndex ? "border-gray-900" : "border-transparent"
              }`}
            />
          </button>
        ))}
      </div> */}
                        </div>
                    </motion.div>
                </Dialog>

            </motion.div>
        </section>
    );
}
