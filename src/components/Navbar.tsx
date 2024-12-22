import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-12 py-3 bg-[#f5f5f5] border-b border-[#eee]">
        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-cover" 
             style={{ backgroundImage: "url('/logo.png')" }}></div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <Link to="/" className="text-[#333] font-semibold text-xl uppercase">Home</Link>
          <Link to="/about" className="text-[#333] font-semibold text-xl uppercase">About</Link>
          <Link to="/gallery" className="text-[#333] font-semibold text-xl uppercase">Gallery</Link>
          <Link to="/shop" className="text-[#333] font-semibold text-xl uppercase">Shop</Link>
          <Link to="/contact" className="text-[#333] font-semibold text-xl uppercase">Contact</Link>
        </div>
        
        <div className="flex gap-3 sm:gap-5">
          {/* User Icon */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          {/* Cart Icon */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f5f5f5] px-4 py-2">
          <Link to="/" className="block py-2 text-[#333] font-semibold text-lg uppercase">Home</Link>
          <Link to="/about" className="block py-2 text-[#333] font-semibold text-lg uppercase">About</Link>
          <Link to="/gallery" className="block py-2 text-[#333] font-semibold text-lg uppercase">Gallery</Link>
          <Link to="/shop" className="block py-2 text-[#333] font-semibold text-lg uppercase">Shop</Link>
          <Link to="/contact" className="block py-2 text-[#333] font-semibold text-lg uppercase">Contact</Link>
        </div>
      )}

      <div className="px-4 sm:px-12 mb-3">
        <hr className="border-t-3 border-black" />
      </div>
    </>
  )
}

export default Navbar
