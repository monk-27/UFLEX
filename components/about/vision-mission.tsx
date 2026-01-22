"use client";

const VisionMission = () => {
  return (
    <section className="mt-[30px] px-4 py-0 text-center sm:mt-8  sm:py-10 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-start text-[24px] lato-700 text-[#117ABA] md:text-[42px]  ">Our Vision & Mission</h2>
        <p className="text-start lato-400 mt-0 text-[16px] text-[#181818] sm:mt-2 md:text-[20px]">
          Guiding principles that drive our commitment to excellence and innovation
        </p>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-0 mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg bg-gray-100 p-6 text-center transition-shadow hover:shadow-md ">
            <h3 className="text-2xl lato-400 mb-4 text-[#117ABA] ">Vision</h3>
            <p className="text-black  leading-relaxed text-lg">
              Be a leading company and preferred supplier for providing flexible packaging solutions to customers across
              the world maximizing value for all stakeholders.
            </p>
          </div>

                    <div className="rounded-lg bg-gray-100 p-6 text-center transition-shadow hover:shadow-md ">

            <h3 className="text-2xl lato-400 mb-4 text-[#117ABA] ">Mission</h3>
            <p className="text-black lato-400 leading-relaxed text-lg">
              To meet customers' dynamic packaging needs by providing innovative, productive, cost-effective, optimised
              and eco-friendly packaging solutions, continually adding value to their business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default VisionMission;
