import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import whatsappLogo from "../assets/images/whatsapp-logo.png"
import meezakLogo from "../assets/images/meezak-logo.png"
import hamburgerIcon from "../assets/icons/hamburger.png"
import cancelIcon from "../assets/icons/cancel.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation() // Get current route location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to check if a route is active
  const isActive = (path) => {
    return location.pathname === path
  }

  // Function to handle link clicks (for mobile menu)
  const handleLinkClick = () => {
    setIsMenuOpen(false) // Close the menu when a link is clicked
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:pl-6 md:pr-6 lg:pl-[112px] lg:pr-[112px]">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={meezakLogo || "/placeholder.svg"}
              alt="Meezak Logo"
              className="h-[40px] w-[112px] lg:h-[46px] lg:w-[128.7px]"
            />
          </Link>
        </div>
        <nav className="flex space-x-4 lg:space-x-6 items-center justify-between">
          <Link
            to="/"
            className={`text-base ${isActive("/") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"
              }`}
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              to="/why-choose-us"
              className={`text-base flex items-center ${isActive("/why-choose-us")
                  ? "text-[rgba(7,24,86,1)]"
                  : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"
                }`}
            >
              Why Choose Us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {/* Dropdown placeholder; customize as needed */}
          </div>
          <div className="relative group">
            <Link
              to="/testimonials"
              className={`text-base flex items-center ${isActive("/testimonials")
                  ? "text-[rgba(7,24,86,1)]"
                  : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"
                }`}
            >
              Testimonials
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {/* Dropdown placeholder; customize as needed */}
          </div>
          <Link
            to="/contact"
            className={`text-base ${isActive("/contact")
                ? "text-[rgba(7,24,86,1)]"
                : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"
              }`}
          >
            Contact Us
          </Link>
        </nav>
        <button className="w-[150px] lg:w-[180px] h-[48px] py-[10px] px-4 gap-6 rounded-[8px] bg-[rgba(7,24,86,1)] text-white text-sm font-[600] flex items-center justify-center hover:bg-blue-800">
          Get Started
          <img src={whatsappLogo || "/placeholder.svg"} alt="WhatsApp Logo" className="w-[23.82px] h-[24px]" />
        </button>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 h-[80px]">
        <div className="flex flex-col">
          <Link to="/">
            <img src={meezakLogo || "/placeholder.svg"} alt="Meezak Logo" className="w-[100px] h-[36px]" />
          </Link>
        </div>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <img
            src={isMenuOpen ? cancelIcon : hamburgerIcon}
            alt={isMenuOpen ? "Cancel Icon" : "Hamburger Icon"}
            className={isMenuOpen ? "w-8 h-8" : "w-6 h-6"}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full h-[339px] bg-white z-50 flex flex-col">
          <nav className="flex flex-col space-y-6 px-6 py-6">
            <Link
              to="/"
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center ${isActive("/") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"
                }`}
              onClick={handleLinkClick}
            >
              Home
              {!isActive("/") && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            <Link
              to="/why-choose-us"
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center ${isActive("/why-choose-us") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"
                }`}
              onClick={handleLinkClick}
            >
              Why Choose Us
              {!isActive("/why-choose-us") && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            <Link
              to="/testimonials"
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center ${isActive("/testimonials") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"
                }`}
              onClick={handleLinkClick}
            >
              Testimonials
              {!isActive("/testimonials") && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            <Link
              to="/contact"
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center ${isActive("/contact") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"
                }`}
              onClick={handleLinkClick}
            >
              Contact Us
              {!isActive("/contact") && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
