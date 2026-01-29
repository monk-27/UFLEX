"use client";

import { useEffect, useState } from "react";
import ProductCategorySection from "./product-reusable";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/breadcrumb";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
    const engineeringProductsData: any = {
        engineering: {
            title: "Products",
            heroImageUrl: "/images/engineering-hero.png",
            overview: `We manufacture machines that are highly reliable, efficient, and consistent in operations...`,

            categories: [
                { name: "Packaging Machines", productKey: "packaging" },
                { name: "Converting Machines", productKey: "converting" },
                { name: "Speciality Products", productKey: "speciality" },
            ],
        },

        packaging: {
            title: "Packaging Machines",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item1-07180601806.jpg",

            overview: `We at UFlex Engineering Division manufacture wide range of Packaging Machines like Form Fill & Seal Machines, which are both Single as well as Multi-Track; Wrapping machines, that are capable of wrapping products of any shape and size; Special Purpose machines, in which the products are packed not only in center seal / three side or four side seal pouches but also in other attractive pouches like Stand up or as Three Side Gusset Pouches.`,

            categories: [
                { name: "Packaging Machines", productKey: "packaging" },
                { name: "Converting Machines", productKey: "converting" },
                { name: "Speciality Products", productKey: "speciality" }
            ],

            sections: [
                {
                    title: "A) Form Fill & Seal (FFS) Machines:",
                    intro: `Form Fill & Seal machines come in two variants: single as well as multi-track. These machines can be fed with different types of filling systems such as Volumetric Cup Filler, Auger Filler, Weigh Filler, Gravity Matrix and Spool Valve.`,

                    subTitle: "FFS machines can again be classified into the following two categories:",

                    bullets: [
                        "Vertical Form-fill-seal (FFS) Machines;",
                        "Horizontal Form-fill-seal (FFS) Machines;"
                    ],

                    items: [
                        {
                            label: "FFS:",
                            text: "Form Fill & Seal machines come in two variants: single as well as Multi Track. These machines can be fed with different types of filling systems such as Volumetric Cup Filler, Auger Filler, Weigh Filler, Gravity Matrix and Spool Valve.",
                            moreLink: "https://www.uflexltd.com/eng-ffs.php"
                        },
                        {
                            label: "FFS HIGH SPEED:",
                            text: "High-Speed Form Fill & Seal machines are used to pack powder, granules, liquid and paste etc. in low unit packs. The speed of the machine is up to 200 pouches per minute.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-high-speed.php"
                        },
                        {
                            label: "FFS COLLAR TYPE:",
                            text: "Automatic Collar Type machine is used for packing products up to 1Kg in centre seal pouch. This machine is equipped with MMI & PLC. All product contact parts are made up of food grade stainless steel SS304 / SS316.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-collar-type.php"
                        },
                        {
                            label: "FFS COLLAR TYPE SERVO DRIVEN:",
                            text: "This machine is driven by servo motors thus it ensures smooth laminate pulling, pouch filling, and sealing. The machine speed is up to 120 pouches per minute. The machine has the capability to pack up to 1Kg product in centre seal pouches.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-collar-type-servo-driven.php"
                        },
                        {
                            label: "FFS COLLAR TYPE SSD:",
                            text: "FFS CT SSD is an intermittent motion machine designed for the efficient packing of products like sugar, salt, detergent in centre seal pouches. This machine is equipped with servo motors for prime movement. The machine comes with unsurpassed accuracy and speed of up to 60 pouches per minute. It is a versatile machine and the pouch width can be changed very easily by replacing the forming tube and collar. This machine has an automatic pouch length change system thru PLC and can be adjusted from 95mm to 320 mm. All product contact parts are made up of food-grade stainless steel SS-304/SS-316.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-collar-type-ssd.php"
                        },
                        {
                            label: "FFS COLLAR TYPE 150 C:",
                            text: "CTSD 150 C is an intermittent motion machine specially designed for the efficient packing of products like chips & extruded snacks in centre seal pouches. This machine is equipped with Servo Drive for laminate pulling through friction. Its vacuum belts impart the machine with unsurpassed accuracy and speed of up to 80 pouches per minute and a suitable multi head weigh filling system. The high speed has been achieved as a result of constant improvisation by our design team which had innovated stripping motion for pouch sealing.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-collar-type-150c.php"
                        },
                        {
                            label: "MULTI TRACK 400/600:",
                            text: "Multi-Track Form Fill & Seal machine is fully automatic; controlled by PLC & driven by servo motors. The machine can pack powder, granules, liquid, and pastes in low unit four side seal pouches. Maximum roll width of 400 / 600 mm can be accommodated on this machine. A maximum of 6 tracks can be made on this machine.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-multi-track-400-600.php"
                        },
                        {
                            label: "MULTI TRACK 1000/1200:",
                            text: "Multi-Track Form Fill & Seal machine is PLC Controlled and is compatible for packing various powder, granules, liquid and paste in four side seal pouches. The machine is equipped with servo drive, motors, web control system and unwinding unit. Maximum web width of 1000 / 1200 mm can be accommodated and maximum of 12 tracks can be made on this machine. Optional Attachments with this machine are:- Batch Cutter, Die cut punch, Collating system, Embossing / coding unit & Notching unit.",
                            moreLink: "https://www.uflexltd.com/eng-ffs-multi-track-1000-1200.php"
                        }
                    ]
                },

                {
                    title: "B) Wrapping Machines:",
                    intro: "Our wrapping machines are capable of wrapping product of any shape and size.",

                    subTitle: "WRAPPING MACHINES CAN BE CATEGORIZED AS UNDER:",

                    items: [
                        {
                            label: "FLOW WRAP:",
                            text: "Flow Wrap machine is a versatile machine which can wrap solid products in pillow pack pouches. The maximum roll width of a Flow wrap machine is 380mm and offers a speed up to 150 pouches per minute. The machine can also be developed with automatic product feeding system.",
                            moreLink: "https://www.uflexltd.com/eng-wm-flow-wrap.php"
                        },
                        {
                            label: "OVER WRAP:",
                            text: "Automatic Over-Wrapping machine is an efficient machine which can wrap solid products in over wrap envelope type packets. The machine offers speed up to 50 pouches per minute.",
                            moreLink: "https://www.uflexltd.com/eng-wm-over-wrap.php"
                        },
                        {
                            label: "ON EDGE:",
                            text: "On Edge Biscuit Wrapping machine can wrap round, square and rectangular shaped biscuits in pillow pack pouches. The speed of the machine is up to 100 pouches per minute. Another trait that positions it distinctively is that it can also be aligned with an automatic product feeding system.",
                            moreLink: "https://www.uflexltd.com/eng-wm-on-edge.php"
                        },
                        {
                            label: "FAMILY PACK:",
                            text: "Family Pack Biscuit Wrapping machine can wrap round, square and rectangular shaped biscuits in 3-lane family pack pouch. The speed of the machine is up to 30 pouches per minute and it can also be aligned with an automatic product feeding system.",
                            moreLink: "https://www.uflexltd.com/eng-wm-family-pack.php"
                        },
                        {
                            label: "CANDY WRAP:",
                            text: "Horizontal High Speed Candy Wrapping machine produces leak proof pillow pack pouches for hard - boiled candies / chewing gum / camphor etc. The speed of the machine is up to 800 pouches per minute. This machine can be customized for 2, 3, 4, 5, 6 or 8 candies in a single pouch.",
                            moreLink: "https://www.uflexltd.com/eng-wm-candy-wrap-servo-driven.php"
                        }
                    ]
                },

                {
                    title: "C) Special Purpose Machines:",
                    intro: "We also engineer and develop Special Purpose machines, in which the products are packed not only by a centre seal / three sides or four sides seal pouches but also in other attractive pouches like Stand Up or Threeside Gusset Pouches.",

                    subTitle: "SPECIAL PURPOSE MACHINES CAN BE CATEGORIZED AS UNDER:",

                    items: [
                        {
                            label: "PICK FILL & SEAL:",
                            text: "Fully Automatic Pick Fill & Seal machine is used for packing powder, granules, liquid, paste in pre-formed pouches like centre seal pouch, three side seal pouch, stand-up pouch and zipper pouch. The speed of the machine is up to 60 pouches per minute. The machine is robotic in motion and is versatile to change from one type of pouch to another. With equal ease and without tool it can change from one size to another.",
                            moreLink: "https://www.uflexltd.com/eng-spm-pick-fill-seal.php"
                        },
                        {
                            label: "VACUUM BRICK PACK:",
                            text: "Vacuum Brick pack machine can pack products in Brick shape pouches up to 500gms. The speed of the machine is up to 25 pouches per minute. The machine comes in two variants with or without vacuum.",
                            moreLink: "https://www.uflexltd.com/eng-spm-vacuum-brick-pack.php"
                        }
                    ]
                },

                {
                    title: "D) Semi Automatic Machines:",
                    subTitle: "SEMI AUTOMATIC MACHINES CAN BE CATEGORIZED AS UNDER:",

                    items: [
                        {
                            label: "VNS:",
                            text: "Semi-automatic Vacuum, Nitrogen Flushing & Sealing machine is a user friendly packing system to pack &seal product in pre-formed pouches like centre seal pouch, three side seal pouch, stand-up pouch and zipper pouch etc. made-up of heat sealable laminated film. Product in pre-formed pouches can be dry fruits, rice, tea, wafers, mushrooms, pharmaceutical products etc. The Speed of the machine is 5-10 Pouches per minute.",
                            moreLink: "https://www.uflexltd.com/eng-sam-vns.php"
                        },
                        {
                            label: "FLEXO MATIC:",
                            text: "Semi-automatic Liquid Filling & Sealing machine is a sealing system to fill & seal pre-formed pouches like centre seal pouch, three side seal pouch, stand-up pouch and zipper pouch etc. made-up of heat sealable laminated film. Product in pre-formed pouches can be lube, edible oil, mineral water etc. The Speed of the machine is 5-10 Pouches per minute.",
                            moreLink: "https://www.uflexltd.com/eng-sam-flexo-matic.php"
                        },
                        {
                            label: "BAND SEALER:",
                            text: "Band Sealing machine is a semi-automatic sealing system to seal pre-formed & filled pouches like centre seal pouch, three side seal pouch, stand-up pouch and zipper pouch etc. made-up of heat sealable laminated film. Product in pre-formed pouches can be solid, granules & powder (snacks, auto spare parts, salt, detergent, powder, grains etc.). The Sealing Speed is 9-10 meter per minute. Stainless steel version for food products & special applications is also available.",
                            moreLink: "https://www.uflexltd.com/eng-sam-band-sealer.php"
                        },
                        {
                            label: "MINI ROTORY SEALER:",
                            text: "The sealing speed of Mini Rotary Sealing machine is 8 meters per minute.",
                            moreLink: "https://www.uflexltd.com/eng-sam-mini-rotory-sealer.php"
                        }
                    ]
                }
            ]
        },

        converting: {
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item2-07180611806.jpg",

            title: "Converting Machines",
            overview: `We at UFlex offer end to end flexible packaging solutions. We manufacture a wide range of converting machines for carrying out various operations like printing, lamination, slitting/ rewinding, inspection, doctoring and pouch making. We have different models in these machine categories that vary according to speed / output, level of technical sophistication and specifications as per clients’ requirements.

Our converting machines are tailored as per the clients’ needs and are enabled for multiple operations.`,

            categoriesTitle: "CONVERTING MACHINES CAN BE CATEGORIZED AS UNDER:",
            categories: [
                { name: "Packaging Machines", productKey: "packaging" },
                { name: "Converting Machines", productKey: "converting" },
                { name: "Speciality Products", productKey: "speciality" },
            ],
            sections: [

                /* =========================
                   A) CI FLEXO MACHINES
                ========================== */
                {
                    key: "A",
                    type: "standard",
                    title: "A) CI Flexo Machines",
                    intro: `The first ever Made in India Gearless Central Impression Flexo Printing Machine was made by us in year 2017. We have started manufacturing a central impression, up to 10 colours, 800-1600mm web width CI flexo printing press. This development is a result of UFlex joining hands with Italy-based Comiflex. The printing speed of the machine is up to 400m/min. The system comes equipped with modem connectivity to the service team of UFlex for remote monitoring, diagnostics and associated trouble shooting to provide real time assistance to the clients.`,

                    subTitle: "CI Flexo Machines can be categorized as under:",

                    items: [
                        {
                            label: "UFlexo ELISA:",
                            text: `UFlexo Elisa is an extremely operator friendly printing machine up to 10 colour central impression gearless flexo printing machine with an additional station for special purpose registered coating applications. Elisa can convert at the speed of 400m/min with Turret unwind & rewind. Number of printing units is optional from six to ten and printing width range is extends from 800 to 1,600mm. The machine will be able to convert 300 to 400 tons of laminate per month in a round-the-clock operation.`,
                            moreLink: "https://www.uflexltd.com/uflexo-elisa-ci-flexo-machines.php"
                        },
                        {
                            label: "UFlexo VALE:",
                            text: `UFlexo Vale is an extremely operator friendly printing machine. This is an economical model of CI Flexo machine up to 10colour central impression gearless flexo printing machine with an additional station for special purpose registered coating applications. Elisa can convert at the speed of 300m/min. The printing width range is similar from 800 to 1,600mm.`,
                            moreLink: "https://www.uflexltd.com/uflexo-vale-ci-flexo-machines.php"
                        }
                    ]
                },

                /* =========================
                   B) ROTOGRAVURE MACHINES
                   (DIFFERENT LAYOUT → HAS GROUPS)
                ========================== */
                {
                    "key": "B",
                    "type": "grouped",
                    "title": "B) Rotogravure Printing Machines",
                    "intro": "We manufacture multi station rotogravure printing machines, which are equipped with latest features to impart automatic tension control system, registration system, drying system in order to render high quality printing. The machines can also have turret & splice mechanism that help saving change-over time. Both Mechanical Line Shaft (MLS) type and Electronic Line Shaft (ELS) models are available. These models also differ in output / speed, level of sophistication and other technical specifications to match customer requirements and is the base for categorization.",
                    "subTitle": "Rotogravure Printing Machines can be categorized as under:",
                    "groups": [
                        {
                            "groupTitle": "Electronic Line Shaft",
                            "items": [
                                {
                                    "label": "Standard Spl. (ELS):",
                                    "text": "ROTOFLEX Standard Spl. is a modular construction machine. The Unique feature of this machine is the special trolley system which contains the printing cylinder, Ink-tray along with ink-circulation system, self-shaft chucking, sleeve type impression. Turret un-wind and re-wind using air expandable shafts with auto splicing arrangement which makes the job change-over a matter of few minutes. The speed can be attained up to 400 meters/min.",
                                    "moreLink": "https://www.uflexltd.com/standard-spl-els-rotogravure-printing-machines.php"
                                },
                                {
                                    "label": "Standard (ELS):",
                                    "text": "The Standard (ELS) machine offers various features like Turret un-wind and re-wind using air expandable shafts with auto splicing arrangement. It has an integrated trolley equipped with printing cylinder, ink circulation system, self-shaft chucking etc. Its unique impression roller is designed for quick and easy change over. Each machine is equipped with individual chiller roller for each station. Additionally the machine comes with Independent Asynchronous Servo Motor with motion control drives on each printing station. A dedicated ARC for user friendly operations and MIS control further enhances the performance of the machine. The speed can be attained up to 300 meters/min.",
                                    "moreLink": "https://www.uflexltd.com/standard-els-rotogravure-printing-machines.php"
                                }
                            ]
                        },
                        {
                            "groupTitle": "Mechanical Line Shaft",
                            "items": [
                                {
                                    "label": "Standard SPL:",
                                    "text": "ROTOFLEX Standard Spl. is modular construction machine. Each printing station is a complete entity in itself. Therefore a station or two can always be added even at a later stage provided that the main drive power rating is taken care of right in the beginning. The machine comes with self-shaft chucking arrangements, AC motor integrated digital drive. As an option the machine can also supply along with Turret unwind & rewind with auto splice facilities, is for the purpose of printing flexible packaging materials. It is also equipped with tension control device, Automatic Web Video & Register Control System offering speed up to 300 meters/min.",
                                    "moreLink": "https://www.uflexltd.com/standard-spl-mls-rotogravure-printing-machines.php"
                                },
                                {
                                    "label": "Standard:",
                                    "text": "Rotogravure Printing Machine with Simplex Unwind and Rewind facilities, is for the purpose of printing flexible packaging materials. As an option the machine can also supply along with Turret unwind & rewind with auto splice facilities, is for the purpose of printing flexible packaging materials. The machine is designed to maintain accuracy for long life ensuring optimum performance with minimal wastage. UFlex has ensured the machine operation to be user friendly, incorporating our mastery in the self-shaft mounting of printing cylinders with over 30 years of rich experience in the shaft-less technology and achieving a speed of 250 meter/min. Its unique dryer design ensures optimum output even in the cold conditions.",
                                    "moreLink": "https://www.uflexltd.com/standard-mls-rotogravure-printing-machines.php"
                                },
                                {
                                    "label": "Stanmas:",
                                    "text": "Stanmas Rotogravure Printing Machine with Simplex Unwind and Rewind facilities, is for the purpose of printing flexible packaging materials. The machine is designed to maintain accuracy for long time ensuring optimum performance with minimal wastage. UFlex has developed user friendly machine operations. This machine incorporates our mastery of self-shaft mounting of printing cylinders with 30 years of rich experience in the shaft-less technology. Its unique dryer design ensure optimum output even in the cold conditions. UFlex boasts of its mechanical stability incorporated with its new generation electronics to ensure flawless performance in terms of quality, output and user friendliness. This model is offering speed of up to 200 meter/min.",
                                    "moreLink": "https://www.uflexltd.com/stanmas-mls-rotogravure-printing-machines.php"
                                },
                                {
                                    "label": "Master:",
                                    "text": "Rotoflex Master is a modular construction machine. Each printing station is a complete entity in itself. Therefore a station or two can always be added even at a later stage provided the main drive power rating is taken care of right in the beginning. The machine comes with shafted arrangement, AC motor integrated digital drive and a tension control device. Rotoflex Master can attain a speed up to 175 meters/min.",
                                    "moreLink": "https://www.uflexltd.com/master-mls-rotogravure-printing-machines.php"
                                }
                            ]
                        }
                    ]
                },

                {
                    key: "C",
                    type: "multi-sub",
                    title: "C) Lamination Machines",
                    intro: "Lamination machines are made to handle various films with different mechanical and chemical characteristics and even with opposing sensibility to heat or solvents. Lamination Machines have six variants like Solvent-less, Solvent-base, Extrusion Lamination, Combi Lamination, Dry Cum Wet Lamination and Silicon Coating Lamination.",

                    subTitle: "Lamination Machines can be categorized as under:",

                    subSections: [
                        {
                            title: "Solvent-less Lamination Machines:",
                            intro: "UFlex Solvent-Less Lamination Machines are equipped with digital AC Vector drive and AC vector grade motor for the purpose of laminating two different substrates. For the purpose of lamination the machine uses two-component adhesive which is solvent free. The machine uses five roller technology for coating adhesive on the film which ensures less amount of adhesive coating. Hence the solvent retention levels are less in laminate produced with solvent-less lamination machine in comparison to solvent-base lamination.",

                            items: [
                                {
                                    label: "Super S:",
                                    text: "A Solvent-less Super Laminator Machine offers Taper tension control mechanism, world renowned thermoregulation system, vapour absorption system (for carcinogenic fumes), dozing-missing & dispensing unit, Ultrasonic Edge System, Asynchronous Servo Motors at both unwinder and rewinder, dancer assembly on both unwinders, chill roll at lamination unit, double nipping & speed up to 450 meters/min.",
                                    moreLink: "https://www.uflexltd.com/super-s-solvent-less-lamination-machines.php"
                                },
                                {
                                    label: "Standard S:",
                                    text: "Solvent Less Standard-S Laminator offers Simplex Un-winder & Re-winder, Ultrasonic Edge Guide system with powder brake at both unwinders, AC Vector Grade Motor with Digital AC Vector drives for rewinder, coating and lamination unit, roller heating system, mixer and dispensing unit, vapors exhausting & speed up to 350 meters/min.",
                                    moreLink: "https://www.uflexltd.com/standard-s-solvent-less-lamination-machines.php"
                                }
                            ]
                        },

                        {
                            title: "Solvent-base Lamination Machines (Optional with Registered Coating):",
                            intro: "UFlex Solvent-base Lamination Machines are equipped with digital AC Vector drive and AC vector grade motor for laminating two different substrates. The machine uses two component adhesive and solvent for lamination and has near perfect drying and heating system to optimize energy consumption.",

                            items: [
                                {
                                    label: "Excel:",
                                    text: "Dry Laminator Excel Machine offers taper tension control mechanism, world renowned thermoregulation system, advanced MIS for real time production data, ultrasonic edge sensor controlled by digital drive & speed up to 300 meters/min.",
                                    moreLink: "https://www.uflexltd.com/excel-solvent-base-lamination-machines.php"
                                },
                                {
                                    label: "Standard:",
                                    text: "Dry Laminator Standard Machine offers in-feed & out-feed tension station, gravure type coating station, unique drying system, dry lamination unit, rewinder with motor & drives & speed up to 200 meters/min.",
                                    moreLink: "https://www.uflexltd.com/standard-solvent-base-lamination-machines.php"
                                }
                            ]
                        },

                        {
                            title: "Combi Lamination Machine:",
                            intro: "UFlex Combi Laminator model with digital AC Vector drive and AC vector grade motor serves the purpose of lamination of two different substrates. This model consists of unwind & rewind feature, solvent-less coating unit, gravure coating unit, lamination unit & drying tunnel. This machine offers speed up to 300 meters/min.",

                            items: [
                                {
                                    label: "Combi Laminator:",
                                    text: "Integrated lamination solution combining solvent-less and gravure coating with drying tunnel.",
                                    moreLink: "https://www.uflexltd.com/combi-lamination-machines.php"
                                }
                            ]
                        },

                        {
                            title: "Dry Cum Wet Lamination Machine:",
                            intro: "UFlex Dry Cum Wet Laminator Standard consists of two coating units and a laminating unit joined together by a drying tunnel along with a short drying tunnel. The machine is equipped with digital AC motor and drive for laminating two different substrates and offers speed up to 200 meters/min.",

                            items: [
                                {
                                    label: "Dry Cum Wet Standard:",
                                    text: "Dual coating + lamination configuration with compact drying tunnels.",
                                    moreLink: "https://www.uflexltd.com/dry-cum-wet-lamination-machines.php"
                                }
                            ]
                        },

                        {
                            title: "Extrusion Lamination Machine:",
                            intro: "Extrusion lamination brings two films together using a layer of molten resin extruded through computer-controlled extruder dies with advanced gauge controls. The process can be repeated or combined with adhesive lamination. Speed ranges from 250 to 400 meters/min.",

                            bullets: [
                                "EL 1300 - 250",
                                "EL 1300 - 300",
                                "EL 1300 - 400"
                            ],

                            items: [
                                {
                                    label: "Extrusion Lamination Series:",
                                    text: "High performance extrusion lamination with nuclear gauge monitoring and automatic profile control.",
                                    moreLink: "https://www.uflexltd.com/extrusion-lamination-machines.php"
                                }
                            ]
                        },

                        {
                            title: "Silicon Coating Lamination Machine:",
                            intro: "Silicon coating machines are used for coating release paper with precision and stability.",

                            items: [
                                {
                                    label: "SILICON 1300:",
                                    text: "Coating Machine with simplex unwind & rewind, shafted coating roller, suitable for release paper coating. Silicon 1300 can run at a maximum speed of 250 mpm.",
                                    moreLink: "https://www.uflexltd.com/silicon1300-silicon-coating-lamination-machines.php"
                                }
                            ]
                        }
                    ]
                },

                {
                    key: "D",
                    type: "standard",
                    title: "D) Slitting / Rewinding Machines",
                    intro: `UFlex offers a complete range of machines ideally suited for slitting & rewinding printed or unprinted flexible laminates, such as PET/PE, PET/MET, PET/PE, PET/AL, Foil/PE, BOPP/PE, etc. These machines have been designed on pure re-winding principle.`,
                    subTitle: "Slitting / Rewinding Machines can be categorized as under:",
                    items: [
                        {
                            label: "USLIT:",
                            text: `A high speed duplex slitter floating unwind stand; Pneumatically operated self-shaft clamping cones; Line guide unit; Unwind Tension Control with the help of dancer roller; Independent Pull Roller; Differential shaft; Duplex Re-winder & AC Vector Grade Motor and Drive system with Operator Interface touch panel.`,
                            moreLink: "https://www.uflexltd.com/uslit-slitting-rewinding-machines.php"
                        },
                        {
                            label: "ECOSLIT:",
                            text: `The ECOSLIT comes with the features of; a high-speed Duplex Slitter and re-winder with simplex unwind stand, a Duplex rewinder, an AC motor digital drive system and a trim collection arrangement. Ecoslit can attain speed up to 350 to 450 meters/ minute.`,
                            moreLink: "https://www.uflexltd.com/ecoslit-slitting-rewinding-machines.php"
                        },
                        {
                            label: "SCRDSL:",
                            text: `SCRDSL is ideally suited for slitting & rewinding printed or unprinted flexible laminates, such as PET/PE, PET/MET.PET/PE, PET/AL. Foil/PE, BOPP/PE, etc. The machine is designed on pure centre rewinding principle, both rewind shafts are powered through powdered clutches; rewind tension selection can be done by the turn of knob on the control desk. SCRDSL can run at speed up to 200 meters/ minute.`,
                            moreLink: "https://www.uflexltd.com/scrdsl-slitting-rewinding-machines.php"
                        },
                        {
                            label: "TORO SLIT:",
                            text: `Toro Slit is equipped with AC Asynchronous motor and Digital AC Drives with turret type Rewinder and Pneumatic disc brake for unwinder with the purpose of Slitting and Rewinding Printed or Unprinted Flexible Laminates. This machine is frontrunner where the output per unit space is an important criteria during selection of equipments. High productivity and lower wastage are the key features of this machine. It can attain speed of upto 700 Meter/Minute.`,
                            moreLink: "https://www.uflexltd.com/toroslit-slitting-rewinding-machines.php"
                        },
                        {
                            label: "ACCUSLIT:",
                            text: `This is secondary slitters for packaging film manufacturing Industry with a working width of models from 2500 mm to 3300 mm. This slitter can slit BOPET, BOPP, CPP and Plain film and can run at a maximum speed of 800 mpm.`,
                            moreLink: "https://www.uflexltd.com/accuslit-slitting-rewinding-machines.php"
                        },
                        {
                            label: "Auto Slicer 1700:",
                            text: `This machine is designed for long lasting heavy duty process, especially for slicing and cutting self-adhesive tapes with core in different sizes with circular cutter and movement of carriage is especially through servo motor.`,
                            moreLink: "https://www.uflexltd.com/auto-slicer1700-slitting-rewinding-machines.php"
                        }
                    ]
                },
                {
                    key: "E",
                    type: "standard",
                    title: "E) Inspection and Rewinding Machines",
                    intro: `UFlex offers inspection and rewinding machines that are specially designed to rewind, printed /un- printed substrates, which have to be further processed invariably to impart value addition. Therefore it is critical that the printed/un-printed substrates should be subjected to thorough inspection. Any defects like mis-registration, pinholes while printing/metalizing are duly removed prior to value addition.`,
                    subTitle: "Inspection and Rewinding Machines can be categorized as under:",
                    items: [
                        {
                            label: "HSR 1300:",
                            text: `The HSR 1300 Inspection Rewinding Machines have a Digital AC Vector grade motor and drive for unwinding main drive and rewinding, an Ultrasonic edge guide, the machine also ensures supply with 100% inspection system. This machine can run at a speed of 400 meters/ minute.`,
                            moreLink: "https://www.uflexltd.com/hsr1300-inspection-rewinding-machines.php"
                        },
                        {
                            label: "ECO HSR 1300:",
                            text: `The ECO HSR 1300 Inspection Rewinding Machines have a digital AC Vector grade motor and a drive for unwinding main drive and rewinding and an Ultrasonic edge guide. The machine can run at a speed of 450 meters/ minute. This Machine has been specially designed to rewind, printed/non-printed substrates which has to be processed further invariably. This further processing imparts ‘value addition’ and therefore it is imperative that the printed / non-printed substrates should be subjected to strict inspection and rejections, if any due to misc. registration / pinholes while printing / metalizing are removed prior to value addition.`,
                            moreLink: "https://www.uflexltd.com/eco-hsr1300-inspection-rewinding-machines.php"
                        }
                    ]
                },
                {
                    key: "F",
                    type: "standard",
                    title: "F) Doctoring Machines",
                    intro: `UFlex has positioned itself amongst top manufacturers, exporters and suppliers of superior quality array of Doctoring Machines. Christened by our skilled professionals using optimum grade raw material and sophisticated parts, these machines are manufactured assuming international standards in consideration. These machines are offered to clients in both standard and customized options as per their diverse requirements. The function of Doctoring Machine is to rewind the web which is normally done to rectify the badly wound rolls during slitting operation in Paper, film or laminate Conversion industries and to print manufacturing date, batch no., expiry date and also the product price on the flexible Packaging material before it is used for packing of products.`,
                    subTitle: "Doctoring Machines can be categorized as under:",
                    items: [
                        {
                            label: "DRM 600 / 500 / 400 Bi-Directional:",
                            text: `Reel is loaded manually on the unwinder. The desired braking torque on the unwind reel can be applied through SET UNWIND TENSION by touch panel in kg. Unwind torque is controlled by digital A.C. drive, so that tension of unwind roll remains constant throughout the roll winding. Unwind Bi-directional web guiding system with dual ultrasonic sensor & motor actuator type has been provided for the web guiding purpose to work in both directions. A DC motor actuator operated by Ultrasonic sensor performs oscillation, for unwind and rewind side individually. The web path has been so designed that the ultrasonic sensor of the Web Guiding System can be conveniently adjusted as per requirements. An AC Motor is also attached to the unwinder & re-winder shaft, with the help of belt and timing pullies mechanism. Rewinder helps rewind the web at the speed set by operator.`,
                            moreLink: "https://www.uflexltd.com/drm600-500-400-bi-directional-doctoring-machines.php"
                        },
                        {
                            label: "DRM 600 / 500 / 400:",
                            text: `The Doctoring machine is of cantilever construction so that loading of parent reel and unloading of rewind reel is both convenient and easy. Both unwind and rewind shafts are air expandable and therefore core locking and unlocking can be affected by putting air by airgun by loosening or tightening the shaft. Reel is loaded manually on the Unwinder. The desired braking torque on the unwind reel can be applied through SET BRAKE TORQUE potentiometer and % torque can be seen on analog torque meter. As unwind diameter reduces, the torque of unwind brake should be reduced by POT so that tension of unwind roll remains constant throughout the roll winding. Unwind unit is made as sliding type for the web guiding purpose. A DC motor actuator operated by ultrasonic sensor performs oscillation. The web path has been so designed that the ultrasonic sensor of the Web Guiding System can be conveniently adjusted as per requirements. An AC motor is attached to the Re-winder Shaft, through belt and timing pullies mechanism. Rewinder rewinds the web at a speed set by operator. Availability of a Potentiometer allows operator to adjust the rewinding speed during the on-going process.`,
                            moreLink: "https://www.uflexltd.com/drm600-500-400-doctoring-machines.php"
                        }
                    ]
                },
                {
                    key: "G",
                    type: "standard",
                    title: "G) Pouch Making Machines",
                    intro: `UFlex has mastered the art of pouch making machines over the last two & a half decades. The company produces various models of pouch making machines like three side gusset flat bottom pouch making machine, stand up pouch making machine, centre seal pouch making machine and three side seal pouch making machine. Each machine is further divided into different sub models according to the size of pouch to be made, speed / output required and the level of sophistication is optimized for.`,
                    subTitle: "Pouch Making Machines can be categorized as under:",
                    items: [
                        {
                            label: "Pouch Making 3D 12:",
                            text: `This is a high speed flat bottom pouch making machine for making different types of pouches like 3 side gusset pouch, stand up pouch, three side seal pouch, press to close (PTC) zip pouch, pouches with zipper, pouch with zipper slider and pouch with zipper-slider diaphragm. These machines can accommodate bag width of 500 mm, 600 mm and 750 mm.`,
                            moreLink: "https://www.uflexltd.com/pouch-making-3d12-pouch-making-machines.php"
                        },
                        {
                            label: "Pouch Making HSP 12:",
                            text: `Pouch Making Machine HSP 12 is a high-speed stand-up pouch making machine for making different types of pouches like 3 side seal pouch, stand up pouch, stand up pouch with press to close zip, stand up pouch with slide zipper. The machine accommodates bag width of 500 mm, 600 mm and 750 mm.`,
                            moreLink: "https://www.uflexltd.com/pouch-making-hsp12-pouch-making-machines.php"
                        },
                        {
                            label: "CSC (Center Seal):",
                            text: `This model of machine can produce pouches with three side and a center seal. This High speed machine has a control mechanism through app.`,
                            moreLink: "https://www.uflexltd.com/center-seal-pouch-making-machines.php"
                        }
                    ]
                },
                {
                    key: "H",
                    type: "standard",
                    title: "H) Recycling Machines for Multilayered Plastic",
                    subTitle: "Recycling Machine can be categorized as under:",
                    items: [
                        {
                            label: "ReLAM 250:",
                            text: `This is a high end multi-layer recycling machine (PET + Ext + PET MET + PE, PE, PE + PET, BOPP, PP, HDPE, LD, LDPE, RAFIA, MET BOPP, MET CPP, MET PET, Non-Woven Bags etc.) used to recycle industrial plastic waste (soft material) into granulated products, which in turn can be used for manufacturing various molding products. Machine is made with European standards, making it operator and environment friendly. UFlex Re Lam-250 comes with a Metal detector, Feeder for additive (specially designed feature), Double screw extruder design (100/33 & 120/10), Water-cooled Die Face Cutting (Specially Designed), Centrifugal dewatering, De-gasing System with amazing features. Relam-250 can recycle at a maximum speed of 250 kg/hr.`,
                            moreLink: "https://www.uflexltd.com/relam250-mlp-recycling-machines.php"
                        }
                    ]
                }


            ]
        },
        speciality: {
            title: "Speciality Products",
            heroImageUrl: "https://uflex.wpdevstudio.site/HTML/uploaded-files/catalogue/Catalogue-Item3-07180621806.jpg",

            overview:
                "UFlex also offers speciality products that are ancillary yet important for the purpose of packaging.",

            categories: [
                { name: "Packaging Machines", productKey: "packaging" },
                { name: "Converting Machines", productKey: "converting" },
                { name: "Speciality Products", productKey: "speciality" }
            ],

            sections: [
                {
                    type: "image-grid",
                    title: "We manufacture and supply various types of filling systems:",
                    introTitle: "We manufacture and supply various types of filling systems:",
                    items: [
                        {
                            label: "Auger Filler",
                            description:
                                "Auger filler (Screw based filling system) is applicable for stick powder.",
                            image: "https://www.uflexltd.com/assets/images/SP-Auger-Filler.jpg"
                        },
                        {
                            label: "Volumetric Cup Filler",
                            description:
                                "Volumetric cup filler is applicable for powders and granules.",
                            image: "https://www.uflexltd.com/assets/images/SP-Volumetric-Cup-Filler.jpg"
                        },
                        {
                            label: "Weigh Filler",
                            description:
                                "Multi head weigh filler is applicable for packaging of free flow granular products.",
                            image: "https://www.uflexltd.com/assets/images/SP-Weigh-Filler.jpg"
                        }
                    ]
                }
            ]
        }





    };
const searchParams = useSearchParams();
const catFromUrl = searchParams.get('cat')?.toLowerCase() || null;

const validKeys = [
//   "engineering",   // overview / all
  "packaging",
  "converting",
  "speciality",
] as const;

const initialKey = catFromUrl && validKeys.includes(catFromUrl as any)
  ? catFromUrl
  : "packaging";   // default tab when no ?cat or invalid

const [selectedKey, setSelectedKey] = useState<string>(initialKey);

// Keep in sync when URL changes (back/forward, direct link)


    // const [selectedKey, setSelectedKey] = useState("packaging");

    const product =
        engineeringProductsData[selectedKey] ||
        engineeringProductsData.engineering;

    // const enhancedCategories =
    //     product.categories?.map((cat: any) => ({
    //         ...cat,
    //         isActive: cat.productKey === selectedKey,
    //         onClick: () => setSelectedKey(cat.productKey),
    //     })) || [];
useEffect(() => {
  const currentCat = searchParams.get('cat')?.toLowerCase();
  if (currentCat && validKeys.includes(currentCat as any)) {
    setSelectedKey(currentCat);
  } else if (!currentCat) {
    setSelectedKey("packaging"); // reset to default when param cleared
  }
}, [searchParams]);


const handleCategoryClick = (productKey: string) => {
  setSelectedKey(productKey);

  // Update URL without full reload → shareable + back button friendly
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('cat', productKey);
    window.history.replaceState({}, '', url.toString());
  }
};

const enhancedCategories =
  product.categories?.map((cat: any) => ({
    ...cat,
    isActive: cat.productKey === selectedKey,
    onClick: () => handleCategoryClick(cat.productKey),
  })) || [];
    return (
        <>
            <SiteHeader />

            <section className="bg-white ">
                <div className="">
                   

                    <section className="relative w-full h-[580px] sm:h-[451px] overflow-hidden">

                        <Image
                            src="/images/heroengg.png"
                            alt="Investors Relations"
                            fill
                            className="object-cover w-full h-full"
                            priority
                        />

                        <div className="absolute inset-0 bg-black/40"></div>


                        {/* <motion.div
                            className="absolute inset-0 flex flex-col justify-end  text-white"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delayChildren: 0.3, staggerChildren: 0.3 },
                                },
                            }}
                        >


                            <motion.div
                                className="bg-[#117ABA] lato-400 text-left w-[450px] h-[350px] sm:w-[706px] sm:h-[351px] text-[14px] leading-relaxed opacity-90 sm:text-[16px] md:text-[20px] pl-4 pt-2 pb-4 pr-4 md:pl-24 lg:pl-28 sm:pt-2 sm:pb-4 sm:pr-12 mb-12 sm:mb-8"
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <div className="w-[300px] sm:w-[537px]">


                                    <h1 className="text-white text-[24px] lato-700  md:text-[42px]  ">
                                        Engineering Business

                                    </h1>
                                    We at UFlex, manufacture Packaging Machines, Converting Machines, Pillow Pouch Machines, Multilane Machines, PFS Machines, Pouch packing machines, Stick pack machines, FFS & VFFS machines, Multi-track machines, Flow Wrap Machines, Rotary FFS machines, Collar type Machines, pouch packing machines, stick packaging machines, in India and around the globe.
                                </div>
                            </motion.div>


                        </motion.div> */}
                    </section>
                    <Breadcrumb
                        items={[
                            { label: "Engineering Business", href: "/engineering-business" },
                            { label: "Engineering Business Products" },
                        ]}
                    />

                    <ProductCategorySection
                        {...product}
                        categories={enhancedCategories}
                    />
                </div>
            </section>

            <SiteFooter />
        </>
    );
}
