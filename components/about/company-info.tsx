export function CompanyInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl poppins-700 mb-4 text-red-900">Who We Are</h2>
        <p className=" poppins-500 text-lg text-green-600 mb-12 max-w-3xl leading-relaxed">
          UFlex is India's largest fully integrated multinational flexible packaging and solutions company {" "} 
          <span className="text-green-900">
            
             with state-of-the-art manufacturing facilities in nine countries around the globe.
            </span>
        </p>

        <div className="poppins-400 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-green-900 leading-relaxed text-lg">
              With a presence in India, the UAE, Mexico, Egypt, the USA, Poland, CIS, Nigeria, and Hungary, we provide end-to-end solutions to numerous Fortune 500 clients across various sectors such as FMCG, consumer product goods, pharmaceuticals, building materials, automobiles, and more.</p>
            <p className="text-green-700 leading-relaxed text-lg">
              At UFlex, innovation, research and development, customer centricity, and sustainability are part of our DNA. With decades of experience in polymer science, UFlex has been at the forefront of sustainability in flexible packaging. We were the first company in the world to recycle mixed plastic waste, earning us recognition at the Davos Recycle Forum in 1995. To date, we have recycled over half a million tons of multi-layer mixed plastic waste at our recycling facilities across the globe.

              Our commitment to innovation, quality, and environmental responsibility has earned us several accolades and cemented our reputation as a trusted partner in the global packaging industry.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-green-400 bg-green-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl poppins-800 text-green-700 mb-2">1985</div>
              <p className="text-green-600 poppins-700 text-lg">Year Established</p>
            </div>
            <div className="border-2 border-green-400 bg-green-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl poppins-800 text-green-700 mb-2">9</div>
              <p className="text-green-600 poppins-700 text-lg">Global Manufacturing Locations</p>
            </div>
            <div className="border-2 border-green-400 bg-green-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl poppins-800 text-green-700 mb-2">150+</div>
              <p className="text-green-600 poppins-700 text-lg">Countries with Our Presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
