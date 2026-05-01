import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beta.uflexltd.com'

  // List of paths derived from the app directory structure
  const paths = [
    '',
    '/about-us',
    '/aseptic-packaging-business',
    '/aseptic-packaging-business/aseptic-Our-Offering',
    '/aseptic-packaging-business/sustainability',
    '/careers',
    '/chemicals-business',
    '/chemicals-business/chemicals-our-offering',
    '/chemicals-business/sustainability',
    '/engineering-business',
    '/engineering-business/engineering-Our-Offering',
    '/engineering-business/sustainability',
    '/flexible-packaging-business',
    '/flexible-packaging-business/flexible-Our-offering',
    '/flexible-packaging-business/sustainability',
    '/flexitube-business',
    '/get-a-quote',
    '/contact-us',
    '/hall-of-fame',
    '/hall-of-fame/buisness-awards',
    '/holography-business',
    '/holography-business/holography-Our-Offering',
    '/holography-business/sustainability',
    '/investors',
    '/investors/annual-report',
    '/investors/corporate-policies',
    '/investors/csr',
    '/investors/esg',
    '/investors/financial-results',
    '/investors/investors-archives',
    '/investors/ir-announcements-updates',
    '/investors/ir-presentation-quarterly-earnings',
    '/investors/shareholders-information',
    '/media-coverage',
    '/media-releases',
    '/packaging-films-business',
    '/packaging-films-business/packaging-our-offering',
    '/packaging-films-business/sustainability',
    '/press-room',
    '/printing-cylinder-business',
    '/printing-cylinder-business/printing-Our-Offering',
    '/printing-cylinder-business/sustainability',
    '/sustainability',
    '/what-we-do',
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
