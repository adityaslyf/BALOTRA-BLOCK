function Home() {
  return (
    <section className="h-screen bg-cover flex flex-col justify-center items-center text-center px-5" 
             style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-[#FFD700] text-7xl font-serif mb-8 leading-tight tracking-[0.3em]">
        BALOTRA<br />BLOCK PRINT
      </h1>
      <p className="text-white max-w-3xl text-lg leading-relaxed">
        Balotra, a lively town in the Barmer district of Rajasthan, is a prominent center known for its deep-rooted traditions and cultural significance. Nestled in the heart of the Thar Desert, Balotra is famous for its thriving hand block printing industry, which produces some of the finest textiles in India.
      </p>
    </section>
  )
}

export default Home
