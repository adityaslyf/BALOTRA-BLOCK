function About() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex gap-10 mt-10">
        <div className="flex-1">
          <img
            src="/about.jpg"
            alt="Blue fabric with white leaf pattern"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1 py-5">
          <h1 className="text-4xl mb-5 text-[#333]">About the Craft</h1>
          <p className="text-lg text-[#444] mb-5">
            Balotra, a town nestled in Rajasthan's Barmer district, is a distinguished center for the ancient craft of hand block printing. Renowned for its vibrant colors, intricate patterns, and the use of natural dyes, Balotra's hand block printing reflects the rich cultural heritage of the region. This traditional art form involves meticulously carved wooden blocks, which are skillfully stamped onto fabric, creating textiles that are both visually stunning and steeped in history.
          </p>
          <p className="text-lg text-[#444]">
            <span className="italic">From delicate floral designs to bold geometric patterns</span>, the textiles of Balotra showcase the artistic process of its artisans, making it a celebrated hub of Rajasthan's textile industry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
