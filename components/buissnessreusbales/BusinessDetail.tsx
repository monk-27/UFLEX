"use client"
import { BusinessConfig, businesses } from "@/app/business/data";
import { AwardsSection } from "./AwardsSection";
import { InnovationSlider } from "./InnovationSlider";
import { SustainabilitySection } from "./SustainabilitySection";
import Keypeople from "./keypeople";
import AccreditationsSlider from "../accredition";
import { CaseStudySection } from "./case-studies";
import { OfferingadvSection } from "./OfferingsSection";
import PackagingKeypeople from "./packagingkey";

type Props = {
  business: BusinessConfig;
};

console.log("business",businesses)
export function BusinessDetail({ business }: Props) {
  return (
    <div className=" space-y-10 md:space-y-12">
      <OfferingadvSection
        heading={business.offerings.heading}
        items={business.offerings.items}
        subheading={business.subofferings?.heading}
        subitems={business.subofferings?.subitems}
        business={business}
      />
      {business.innovations && (
      <InnovationSlider
        heading={business.innovations.heading}
        items={business.innovations.items}
      />
      )}
      <SustainabilitySection data={business.sustainability} />
      {(business.keypeople) && (business.key!=="packaging-films") &&(
        <Keypeople
          title={business.keypeople.title}
          people={business.keypeople.details}
        />
      )}
      {(business.keypeople) && (business.key==="packaging-films") &&(
        <PackagingKeypeople
          title={business.keypeople.title}
          people={business.keypeople.details}
        />
      )}
      
      {business.caseStudies && business.caseStudies.length > 0 && (
      <CaseStudySection
        sectionTitle="Case Studies"
        imageSrc="/images/chemcase.png" 
        items={business.caseStudies}
      />
      )}
      <AwardsSection data={business.awards} />

      <AccreditationsSlider items={business.accreditation ?? []} />

    </div>
  );
}
