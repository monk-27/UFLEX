// // src/app/businesses/BusinessDetail.tsx

// import { BusinessConfig } from "@/app/business/data";
// import { AwardsSection } from "./AwardsSection";
// import { InnovationSlider } from "./InnovationSlider";
// import { OfferingsSection } from "./OfferingsSection";
// import { SustainabilitySection } from "./SustainabilitySection";


// type Props = {
//   business: BusinessConfig;
// };

// export function BusinessDetail({ business }: Props) {
//   return (
//     <div className="space-y-10 md:space-y-12">
//       <OfferingsSection
//         heading={business.offerings.heading}
//         items={business.offerings.items}
//         subheading={business.subofferings?.heading}
//         subitems={business.subofferings?.subitems}
//         businessKey={business.key}
//       />
//       <InnovationSlider
//         heading={business.innovations.heading}
//         items={business.innovations.items}
//       />
//       <SustainabilitySection data={business.sustainability} />
//       <AwardsSection data={business.awards} />
//     </div>
//   );
// }

// src/app/businesses/BusinessDetail.tsx
import { BusinessConfig } from "@/app/business/data";
import { AwardsSection } from "./AwardsSection";
import { InnovationSlider } from "./InnovationSlider";
import { OfferingsSection } from "./OfferingsSection";
import { SustainabilitySection } from "./SustainabilitySection";

type Props = {
  business: BusinessConfig;
};

export function BusinessDetail({ business }: Props) {
  return (
    <div className="space-y-10 md:space-y-12">
      <OfferingsSection
        heading={business.offerings.heading}
        items={business.offerings.items}
        subheading={business.subofferings?.heading}
        subitems={business.subofferings?.subitems}
        business={business}         
      />
      <InnovationSlider
        heading={business.innovations.heading}
        items={business.innovations.items}
      />
      <SustainabilitySection data={business.sustainability} />
      <AwardsSection data={business.awards} />
    </div>
  );
}

