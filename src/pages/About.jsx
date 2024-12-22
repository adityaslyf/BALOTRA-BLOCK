function About() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-5">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10">
        <div className="w-full md:flex-1">
          <img
            src="/about.jpg"
            alt="Blue fabric with white leaf pattern"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:flex-1 py-3 md:py-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-5 text-[#333]">
            About the Craft
          </h1>
          <p className="text-base md:text-lg text-[#444] mb-4 md:mb-5">
            <span className="font-bold">Balotra</span>, a town nestled in Rajasthan's Barmer district, is a distinguished center for the ancient craft of hand block printing. Renowned for its vibrant colors, intricate patterns, and the use of natural dyes, Balotra's hand block printing reflects the rich cultural heritage of the region. This traditional art form involves meticulously carved wooden blocks, which are skillfully stamped onto fabric, creating textiles that are both visually stunning and steeped in history.
          </p>
          <p className="text-base md:text-lg text-[#444]">
            <span className="italic">From <span className="font-bold">delicate floral designs to bold geometric patterns</span></span>, the textiles of Balotra showcase the artistic process of its artisans, making it a celebrated hub of Rajasthan's textile industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
