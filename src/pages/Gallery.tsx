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
      url: '/public/Carousel3.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/Carousel4.jpg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/Carousel3.jpeg',
      alt: 'Natural soap and bath products'
    },
    {
      url: '/public/Carousel6.jpg',
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
    <div className="min-h-screen bg-white py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#8B6B4D]/80 hover:bg-[#8B6B4D] text-white flex items-center justify-center focus:outline-none transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#8B6B4D]/80 hover:bg-[#8B6B4D] text-white flex items-center justify-center focus:outline-none transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail Navigation */}
          <div className="mt-4 flex justify-center gap-2 sm:gap-3 px-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden transition-opacity ${
                  currentIndex === index ? 'opacity-100 ring-2 ring-[#8B6B4D]' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
