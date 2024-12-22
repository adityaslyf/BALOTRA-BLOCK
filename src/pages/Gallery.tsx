import { useState } from 'react'

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Array of image objects
  const images = [
    {
      url: '/public/carousel1.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/carousel2.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/carousel3.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/carousel4.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/carousel5.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/carousel6.jpeg',
      alt: 'Natural soap and bath products'
    },  
   
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Carousel Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#8B6B4D] text-white flex items-center justify-center focus:outline-none"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#8B6B4D] text-white flex items-center justify-center focus:outline-none"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
