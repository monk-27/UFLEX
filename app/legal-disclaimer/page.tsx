import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalParagraphs } from "@/components/legal-paragraphs";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "Legal disclaimer and copyrights for the UFlex Limited website.",
};

const paragraphs = [
  "This Web Site has been compiled in good faith by the UFlex Limited, but no representation is made or warranty given (either express or implied) as to the completeness or accuracy of the information it contains. You are therefore requested to verify this information before you act upon it by calling the concerned UFlex Limited office.",
  "By accessing this Web Site, it is assumed that you agree that UFlex Limited will not be liable for any direct or indirect loss arising from the use of the information and the material contained in this Web Site.",
  "All the Intellectual Property Rights solely remain with UFlex Limited. Your access to it does not imply a license to reproduce and/or distribute this information and you are not allowed to any such act without the prior approval of UFlex Limited.",
  "UFlex shall not be responsible for the fraudulent act related to cyber crime in respect of online content through improper disclosure of confidential details by third party who is unlawfully acting.",
];

export default function Page() {
  return (
    <div className="bg-white">
      <SiteHeader />

      <main className="bg-white">
        <h1 className="text-[24px] lato-700 text-[#173366] md:text-[42px] py-6 text-center">
          Legal disclaimer
        </h1>

        <div className="bg-[#EFEFEF]">
          <div className="max-w-7xl mx-auto h-12 flex items-center px-4">
            <nav className="text-sm lato-600 text-black flex flex-wrap items-center gap-1">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>&gt;</span>
              <span>Legal disclaimer</span>
            </nav>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-[16px] sm:text-[18px] lato-400 text-black leading-relaxed text-justify">
            <span className="float-left text-[52px] leading-[40px] pr-2 pt-1 lato-400 text-black">
              T
            </span>
            he information contained in this Web Site (http://www.uflexltd.com/) has been prepared solely for the
            purpose of providing information about UFlex Limited (UFlex Group), India to interested parties, and is
            not in any way binding on UFlex Limited.
          </p>

          <div className="mt-6 border-[3px] border-[#173366] bg-white clear-both">
            <Image
              src="/images/legal-disclaimer.jpg"
              alt="Legal Disclaimer"
              width={1200}
              height={252}
              className="w-full h-auto"
              priority
            />
          </div>

          <LegalParagraphs paragraphs={paragraphs} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
