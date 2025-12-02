// "use client"
// import { BusinessConfig } from "@/app/business/data";
// import { AwardsSection } from "./AwardsSection";
// import { InnovationSlider } from "./InnovationSlider";
// import { SustainabilitySection } from "./SustainabilitySection";
// import Keypeople from "./keypeople";
// import AccreditationsSlider from "../accredition";
// import { CaseStudySection } from "./case-studies";
// import { OfferingadvSection } from "./OfferingsSection";

// type Props = {
//   business: BusinessConfig;
// };

// export function BusinessDetail({ business }: Props) {
//   return (
//     <div className=" space-y-10 md:space-y-12">
//       <OfferingadvSection
//         heading={business.offerings.heading}
//         items={business.offerings.items}
//         subheading={business.subofferings?.heading}
//         subitems={business.subofferings?.subitems}
//         business={business}
//       />
//       {business.innovations && (
//       <InnovationSlider
//         heading={business.innovations.heading}
//         items={business.innovations.items}
//       />
//       )}
//       <SustainabilitySection data={business.sustainability} />
//       {business.keypeople && (
//         <Keypeople
//           title={business.keypeople.title}
//           people={business.keypeople.details}
//         />
//       )}
//       {business.caseStudies && business.caseStudies.length > 0 && (
//       <CaseStudySection
//         sectionTitle="Case Studies"
//         imageSrc="/images/chemcase.png" // Replace with actual image path
//         items={business.caseStudies}
//       />
//       )}
//       <AwardsSection data={business.awards} />

//       <AccreditationsSlider items={business.accreditation ?? []} />

//     </div>
//   );
// }
// src/components/buissnessreusbales/BusinessDetail.tsx
"use client"

import { BusinessConfig } from "@/app/business/data";
import { OfferingadvSection } from "./OfferingsSection";
import { InnovationSlider } from "./InnovationSlider";
import { SustainabilitySection } from "./SustainabilitySection";
import Keypeople from "./keypeople";
import { CaseStudySection } from "./case-studies";
import { AwardsSection } from "./AwardsSection";
import AccreditationsSlider from "../accredition";


type Props = {
  business: BusinessConfig;
};

export function BusinessDetail({ business }: Props) {
  if (!business) return null;

  return (
    <div className="space-y-10 md:space-y-12">
      {/* Offerings – guard items */}
      {business.offerings?.items?.length ? (
        <OfferingadvSection
          heading={business.offerings.heading}
          items={business.offerings.items}
          subheading={business.subofferings?.heading}
          subitems={business.subofferings?.subitems}
          business={business}
        />
      ) : null}

      {/* Innovations – guard and ensure there are slides */}
      {/* {business.innovations?.items?.length ? (
        <InnovationSlider
          heading={business.innovations.heading}
          items={business.innovations.items}
        />
      ) : null} */}

      {/* Sustainability – data can be missing on some businesses */}
      {/* {business.sustainability && (
        <SustainabilitySection data={business.sustainability} />
      )} */}

      {/* Key People */}
      {/* {business.keypeople && business.keypeople.details?.length ? (
        <Keypeople
          title={business.keypeople.title}
          people={business.keypeople.details}
        />
      ) : null} */}

      {/* Case Studies */}
      {/* {business.caseStudies && business.caseStudies.length > 0 && (
        <CaseStudySection
          sectionTitle="Case Studies"
          imageSrc="/images/chemcase.png"
          items={business.caseStudies}
        />
      )} */}

      {/* Awards – this is very likely where it was crashing if awards is missing */}
      {/* {business.awards && <AwardsSection data={business.awards} />} */}

      {/* Accreditations */}
      {/* {business.accreditation && business.accreditation.length > 0 && (
        <AccreditationsSlider items={business.accreditation} />
      )} */}
    </div>
  );
}

