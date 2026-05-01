/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === "1";

const nextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // About Us -> /about-us/
      { source: '/about-us.php', destination: '/about-us/', permanent: true },
      { source: '/company-profile.php', destination: '/about-us/', permanent: true },
      { source: '/vision-mission.php', destination: '/about-us/', permanent: true },
      { source: '/values.php', destination: '/about-us/', permanent: true },
      { source: '/cmd-Profile.php', destination: '/about-us/', permanent: true },
      { source: '/board-of-directors.php', destination: '/about-us/', permanent: true },
      { source: '/board-committees.php', destination: '/about-us/', permanent: true },
      { source: '/key-management.php', destination: '/about-us/', permanent: true },
      { source: '/subsidiaries-associates.php', destination: '/about-us/', permanent: true },
      { source: '/pdf/UFlex_Company_Presentation.pdf', destination: '/about-us/', permanent: true },

      // Our Businesses -> /what-we-do/
      { source: '/our-businesses.php', destination: '/what-we-do/', permanent: true },

      // Packaging Films -> /packaging-films-business/
      { source: '/packaging-films.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-key-people.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-products.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-marketing-support.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-awards-and-recognition.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-environmental-sustainability.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-contactus.php', destination: '/packaging-films-business/', permanent: true },
      { source: '/packaging-films-enquiryform.php', destination: '/packaging-films-business/', permanent: true },

      // Chemicals -> /chemicals-business/
      { source: '/chemicals.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-key-people.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-products.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-marketing-support.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-awards-and-recognition.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-environmental-sustainability.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-contactus.php', destination: '/chemicals-business/', permanent: true },
      { source: '/chemicals-enquiryform.php', destination: '/chemicals-business/', permanent: true },

      // Aseptic Packaging -> /aseptic-packaging-business/
      { source: '/asepto.php', destination: '/aseptic-packaging-business/', permanent: true },
      { source: '/asepto-responsible-sourcing.php', destination: '/aseptic-packaging-business/', permanent: true },
      { source: '/asepto-products-services.php', destination: '/aseptic-packaging-business/', permanent: true },
      { source: '/asepto-our-commitment.php', destination: '/aseptic-packaging-business/', permanent: true },
      { source: '/asepto-awards-and-recognition.php', destination: '/aseptic-packaging-business/', permanent: true },
      { source: '/asepto-contactus.php', destination: '/aseptic-packaging-business/', permanent: true },
      { source: '/asepto-enquiry-form.php', destination: '/aseptic-packaging-business/', permanent: true },

      // Holography -> /holography-business/
      { source: '/holography.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-key-people.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-products.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-marketing-support.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-awards-and-recognition.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-environmental-sustainability.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-contactus.php', destination: '/holography-business/', permanent: true },
      { source: '/holography-enquiry_form.php', destination: '/holography-business/', permanent: true },

      // Flexible Packaging -> /flexible-packaging-business/
      { source: '/packaging.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-key-people.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-products.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-marketing-support.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-awards-and-recognition.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-environmental-sustainability.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-contact-us.php', destination: '/flexible-packaging-business/', permanent: true },
      { source: '/packaging-enquiry-form.php', destination: '/flexible-packaging-business/', permanent: true },

      // Printing & Cylinders -> /printing-cylinder-business/
      { source: '/cylinders.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-key-people.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-products.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-marketing-support.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-awards-and-recognition.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-environmental-sustainability.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-contactus.php', destination: '/printing-cylinder-business/', permanent: true },
      { source: '/cylinders-enquiryform.php', destination: '/printing-cylinder-business/', permanent: true },

      // Engineering -> /engineering-business/
      { source: '/engineering.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-key-people.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-products.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-marketing-support.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-awards-and-recognition.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-environmental-sustainability.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-contactus.php', destination: '/engineering-business/', permanent: true },
      { source: '/engineering-enquiryform.php', destination: '/engineering-business/', permanent: true },

      // Investor Relations
      { source: '/investors.php', destination: '/investors/', permanent: true },
      { source: '/investor-presentations.php', destination: '/investors/ir-presentation-quarterly-earnings/', permanent: true },
      { source: '/quarterly-earnings-reports.php', destination: '/investors/ir-presentation-quarterly-earnings/', permanent: true },
      { source: '/eamings-conference-call.php', destination: '/investors/ir-presentation-quarterly-earnings/', permanent: true },
      { source: '/earnings-conference-call.php', destination: '/investors/ir-presentation-quarterly-earnings/', permanent: true },
      { source: '/governance-structure.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/grievance-redressal.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/contact-details-of-kmps.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/credit-ratings.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/extract-of-annual-return.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/business-responsibility-report.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/secretarial-compliance-report.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/announcements.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/shareholding-pattern.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/unpaid-unclaimed-dividend-details.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/transfer-of-shares-to-iepf.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/reconciliation-of-share-capital-audit-report.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/registrar.php', destination: '/investors/ir-announcements-updates/', permanent: true },
      { source: '/shareholders-communication.php', destination: '/investors/shareholders-information/', permanent: true },
      { source: '/financials.php', destination: '/investors/financial-results/', permanent: true },
      { source: '/financials.asp', destination: '/investors/financial-results/', permanent: true },
      { source: '/stock-price-data.php', destination: '/investors/investors-archives/', permanent: true },
      { source: '/company-release.php', destination: '/investors/investors-archives/', permanent: true },
      { source: '/compliance-reports.php', destination: '/investors/investors-archives/', permanent: true },
      { source: '/policies.php', destination: '/investors/corporate-policies/', permanent: true },

      // Sustainability
      { source: '/sustainability.php', destination: '/sustainability/', permanent: true },
      { source: '/sustainability-practices.php', destination: '/sustainability/', permanent: true },
      { source: '/social-sustainability.php', destination: '/sustainability/', permanent: true },
      { source: '/environmental-sustainability.php', destination: '/sustainability/', permanent: true },

      // Hall of Fame
      { source: '/awards.php', destination: '/hall-of-fame/?business=corporate-awards', permanent: true },
      { source: '/awards2013-2019.php', destination: '/hall-of-fame/?business=corporate-awards', permanent: true },
      { source: '/historic-awards.php', destination: '/hall-of-fame/?business=corporate-awards', permanent: true },
      { source: '/recognition-accreditation.php', destination: '/hall-of-fame/?business=corporate-awards', permanent: true },

      // Careers
      { source: '/why-uflex.php', destination: '/careers/', permanent: true },
      { source: '/learning-curve.php', destination: '/careers/', permanent: true },
      { source: '/choose-your-path.php', destination: '/careers/', permanent: true },
      { source: '/vox-populi.php', destination: '/careers/', permanent: true },
      { source: '/because-you-matter.php', destination: '/careers/', permanent: true },
      { source: '/uflex-program.php', destination: '/careers/', permanent: true },
      { source: '/current-openings.php', destination: '/careers/', permanent: true },

      // Contact Us
      { source: '/contact-us.php', destination: '/contact-us/', permanent: true },
      { source: '/global-presence.php', destination: '/contact-us/', permanent: true },
      { source: '/contact-form.php', destination: '/contact-us/', permanent: true },

      // Media Centre
      { source: '/press-release.php', destination: '/media-releases/', permanent: true },
      { source: '/uflex-news.php', destination: '/media-coverage/', permanent: true },
      { source: '/uflex-television-broadcast-news.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2026.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2025.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2024.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2023.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2022.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2021.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2020.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2019.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2018.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2017.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2016.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2015.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2014.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2013.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2012.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-print-media-coverage-2011.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2026.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2025.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2024.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2023.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2022.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2021.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2020.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2019.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2018.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2017.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2016.php', destination: '/media-coverage/', permanent: true },
      { source: '/news-online-media-coverage-2015.php', destination: '/media-coverage/', permanent: true },
      { source: '/video-gallery.php', destination: '/press-room/', permanent: true },
      { source: '/photo-gallery.php', destination: '/press-room/', permanent: true },
      { source: '/press-contact.php', destination: '/press-room/', permanent: true },

      // General Rule: Block access to any remaining PHP files EXCEPT our authorized ones
      {
        source: "/((?!test-mail|submit-quote|get-unclaimed-dividend|index).*)?.php",
        destination: "/404",
        permanent: false,
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
