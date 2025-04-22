import { useState } from 'react';
import whatsappLogo from '../assets/images/whatsapp-logo.svg';
import meezakLogo from '../assets/images/header-logo.svg';
import hamburgerIcon from '../assets/icons/hamburger.png';
import cancelIcon from '../assets/icons/cancel.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when toggling the mobile menu
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsAboutOpen(false); // Close the other dropdown
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false); // Close the other dropdown
  };

  // Function to check if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to handle link clicks (for mobile menu and dropdowns)
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the mobile menu
    setIsServicesOpen(false); // Close Services dropdown
    setIsAboutOpen(false); // Close About dropdown
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:pl-6 md:pr-6 lg:pl-[60px] lg:pr-[50px]">
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
            className={`text-base ${isActive("/") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
          >
            Home
          </Link>

          {/* About Us with Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <Link
                to="/about"
                className={`text-base ${isActive("/about") || isActive("/team") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
              >
                About us
              </Link>
              <button onClick={toggleAboutDropdown} className="ml-1 focus:outline-none">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isAboutOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-[120px] z-50">
                <Link
                  to="/about"
                  className="block px-4 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          {/* Services with Dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <Link
                to="/services"
                className={`text-base ${isActive("/services") || isActive("/works") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
              >
                Services
              </Link>
              <button onClick={toggleServicesDropdown} className="ml-1 focus:outline-none">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-[120px] z-50">
                <Link
                  to="/services"
                  className="block px-4 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Our Services
                </Link>
                <Link
                  to="/works"
                  className="block px-4 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Our Works
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`text-base ${isActive("/contact") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
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
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white z-50 flex flex-col">
          <nav className="flex flex-col space-y-6 px-6 py-6">
            <Link
              to="/"
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center ${isActive("/") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
              onClick={handleLinkClick}
            >
              Home
              {!isActive("/") && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>

            {/* About Us with Dropdown */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <Link
                  to="/about"
                  className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex-1 ${isActive("/about") || isActive("/team") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <button onClick={toggleAboutDropdown} className="p-4 focus:outline-none">
                  <svg
                    className={`w-5 h-5 text-[rgba(7,24,86,1)] transition-transform duration-300 ${isAboutOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isAboutOpen && (
                <div className="bg-white shadow-md rounded-md mt-2">
                  <Link
                    to="/about"
                    className="block px-6 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/team"
                    className="block px-6 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services with Dropdown */}
            <div className="relative">
              <div className="flex justify-between items-center">
                <Link
                  to="/services"
                  className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex-1 ${isActive("/services") || isActive("/works") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <button onClick={toggleServicesDropdown} className="p-4 focus:outline-none">
                  <svg
                    className={`w-5 h-5 text-[rgba(7,24,86,1)] transition-transform duration-300 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isServicesOpen && (
                <div className="bg-white shadow-md rounded-md mt-2">
                  <Link
                    to="/services"
                    className="block px-6 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/works"
                    className="block px-6 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    Our Works
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center ${isActive("/contact") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
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
  );
}

export default Header;