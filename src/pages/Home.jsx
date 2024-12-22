function Home() {
  return (
    <section className="h-[88.1vh] bg-cover flex flex-col justify-center items-center text-center px-4 sm:px-5" 
             style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-[#FFD700] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-[0.2em] sm:tracking-[0.3em]">
        BALOTRA<br />BLOCK PRINT
      </h1>
      <p className="text-white max-w-3xl text-base sm:text-lg leading-relaxed px-2 sm:px-4">
        Balotra, a lively town in the Barmer district of Rajasthan, is a prominent center known for its deep-rooted traditions and cultural significance. Nestled in the heart of the Thar Desert, Balotra is famous for its thriving hand block printing industry, which produces some of the finest textiles in India.
      </p>
    </section>
  )
}

export default Home
