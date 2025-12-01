
import { BusinessConfig } from "@/app/business/data";
import { AwardsSection } from "./AwardsSection";
import { InnovationSlider } from "./InnovationSlider";
import { OfferingsSection } from "./OfferingsSection";
import { SustainabilitySection } from "./SustainabilitySection";
import Keypeople from "./keypeople";
import AccreditationsSlider from "../accredition";
import { CaseStudySection } from "./case-studies";

type Props = {
  business: BusinessConfig;
};

export function BusinessDetail({ business }: Props) {
  return (
    <div className=" space-y-10 md:space-y-12">
      <OfferingsSection
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
      {business.keypeople && (
        <Keypeople
          title={business.keypeople.title}
          people={business.keypeople.details}
        />
      )}
      {business.caseStudies && business.caseStudies.length > 0 && (
      <CaseStudySection
        sectionTitle="Case Studies"
        imageSrc="/images/chemcase.png" // Replace with actual image path
        items={business.caseStudies}
      />
      )}
      <AwardsSection data={business.awards} />

      <AccreditationsSlider items={business.accreditation ?? []} />;

    </div>
  );
}

