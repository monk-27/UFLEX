import Image from "next/image";
import { ReactNode } from "react";

type SustainabilityItem = {
  title: string;
  description: string;
};

type ReusablePropsCOMMCompProps = {
  image: string;
  heading: string;
  introText: string;
  tagline?: ReactNode | string;
  items: SustainabilityItem[];
};

export default function ReusablePropsCOMMComp({
  image,
  heading,
  introText,
  tagline,
  items,
}: ReusablePropsCOMMCompProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* ===== IMAGE - Left on Desktop, Top on Mobile ===== */}
        <figure className="order-1 lg:order-1">
          <div className="bg-white overflow-hidden rounded-xl shadow-lg">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[620px] w-full">
              <Image
                src={image}
                alt="Sustainability"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            
          </div>
        </figure>

        {/* ===== TEXT - Right on Desktop, Below Image on Mobile ===== */}
        <div className="order-2 lg:order-2 lg:flex lg:flex-col lg:justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl manrope-700 text-[#117ABA] leading-tight">
            {heading}
          </h3>

          <p className="mt-4 text-base sm:text-lg text-slate-600 manrope-500 max-w-2xl">
            {introText}
          </p>

          <ul className="mt-8 space-y-7">
            {items.map((item, index) => (
              <li key={index} className="flex gap-5">
                {/* Invisible spacer for perfect alignment */}
                <div className="mt-2 w-8 h-8 flex-shrink-0" aria-hidden="true" />

                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl manrope-600 text-slate-700 leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-slate-500 manrope-400 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}