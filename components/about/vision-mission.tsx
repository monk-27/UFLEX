export function VisionMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl poppins-800 text-center mb-4 text-red-900">Our Vision & Mission</h2>
        <p className="text-center poppins-600 text-gray-600 mb-12 max-w-2xl mx-auto">
          Guiding principles that drive our commitment to excellence and innovation
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-2 border-blue-400 bg-blue-50 p-8 rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl poppins-800 mb-4 text-red-900">Vision</h3>
            <p className="text-gray-700 poppins-400 leading-relaxed text-lg">
              Be a leading company and preferred supplier for providing flexible packaging solutions to customers across
              the world maximizing value for all stakeholders.
            </p>
          </div>

          <div className="border-2 border-pink-400 bg-pink-50 p-8 rounded-lg hover:shadow-lg transition">
            <h3 className="text-2xl poppins-800 mb-4 text-red-900">Mission</h3>
            <p className="text-gray-700 poppins-400 leading-relaxed text-lg">
              To meet customers' dynamic packaging needs by providing innovative, productive, cost-effective, optimised
              and eco-friendly packaging solutions, continually adding value to their business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
