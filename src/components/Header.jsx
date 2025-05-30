import { useState, useEffect, useRef } from 'react';
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

  // Refs for dropdown menus (desktop and mobile)
  const aboutDropdownRefDesktop = useRef(null);
  const servicesDropdownRefDesktop = useRef(null);
  const aboutDropdownRefMobile = useRef(null);
  const servicesDropdownRefMobile = useRef(null);
  // Refs for the toggle buttons to exclude them from outside click detection
  const aboutButtonRefDesktop = useRef(null);
  const servicesButtonRefDesktop = useRef(null);
  const aboutButtonRefMobile = useRef(null);
  const servicesButtonRefMobile = useRef(null);

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

  // Handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click originated from any of the toggle buttons
      const isClickOnToggleButton =
        (aboutButtonRefDesktop.current && aboutButtonRefDesktop.current.contains(event.target)) ||
        (servicesButtonRefDesktop.current && servicesButtonRefDesktop.current.contains(event.target)) ||
        (aboutButtonRefMobile.current && aboutButtonRefMobile.current.contains(event.target)) ||
        (servicesButtonRefMobile.current && servicesButtonRefMobile.current.contains(event.target));

      // If the click is on a toggle button, do nothing (let the button's onClick handler toggle the dropdown)
      if (isClickOnToggleButton) {
        return;
      }

      // Delay closing the dropdowns to allow the Link's click event to fire
      setTimeout(() => {
        // Desktop: About Us dropdown
        if (
          isAboutOpen &&
          aboutDropdownRefDesktop.current &&
          !aboutDropdownRefDesktop.current.contains(event.target)
        ) {
          setIsAboutOpen(false);
        }

        // Desktop: Services dropdown
        if (
          isServicesOpen &&
          servicesDropdownRefDesktop.current &&
          !servicesDropdownRefDesktop.current.contains(event.target)
        ) {
          setIsServicesOpen(false);
        }

        // Mobile: About Us dropdown
        if (
          isAboutOpen &&
          aboutDropdownRefMobile.current &&
          !aboutDropdownRefMobile.current.contains(event.target)
        ) {
          setIsAboutOpen(false);
        }

        // Mobile: Services dropdown
        if (
          isServicesOpen &&
          servicesDropdownRefMobile.current &&
          !servicesDropdownRefMobile.current.contains(event.target)
        ) {
          setIsServicesOpen(false);
        }
      }, 300); // Small delay to ensure the click event on Link fires first
    };

    // Add event listener for mousedown (works for both desktop and mobile)
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAboutOpen, isServicesOpen]); // Re-run effect when dropdown states change

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
        <nav className="flex space-x-4 lg:space-x-6 items-center justify-between md:w-[450px]">
          <Link
            to="/"
            className={`text-[16px] font-[700] ${isActive("/") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
          >
            Home
          </Link>

          {/* About Us with Dropdown */}
          <div className="relative" ref={aboutDropdownRefDesktop}>
            <div className="flex items-center">
              <Link
                to="/about"
                className={`text-[16px] font-[700] ${isActive("/about") || isActive("/team") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
              >
                About us
              </Link>
              <button
                ref={aboutButtonRefDesktop}
                onClick={toggleAboutDropdown}
                className="ml-1 focus:outline-none hover:outline-none hover:border-none border-none"
              >
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
              <div className="absolute top-full left-0 mt-2 bg-[#EEEEEE] shadow-md rounded-md w-[120px] md:w-[260px] h-[160px] flex flex-col gap-4 p-4 z-50">
                <Link
                  to="/about"
                  className="block w-[228px] h-[56px] p-4 rounded-[5px] bg-white text-[14px] font-[600] text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link
                  to="/ourTeam"
                  className="block w-[228px] h-[56px] p-4 rounded-[5px] bg-white text-[14px] font-[600] text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          {/* Services with Dropdown */}
          <div className="relative" ref={servicesDropdownRefDesktop}>
            <div className="flex items-center">
              <Link
                to="/services"
                className={`text-[16px] font-[700] ${isActive("/services") || isActive("/works") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
              >
                Services
              </Link>
              <button
                ref={servicesButtonRefDesktop}
                onClick={toggleServicesDropdown}
                className="ml-1 focus:outline-none hover:outline-none hover:border-none border-none"
              >
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
              <div className="absolute top-full left-0 mt-2 bg-[#EEEEEE] shadow-md rounded-md w-[120px] md:w-[260px] h-[160px] flex flex-col gap-4 p-4 z-50">
                <Link
                  to="/services"
                  className="block w-[228px] h-[56px] p-4 rounded-[5px] bg-white text-[14px] font-[600] text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Our Services
                </Link>
                <Link
                  to="/works"
                  className="block w-[228px] h-[56px] p-4 rounded-[5px] bg-white text-[14px] font-[600] text-[rgba(7,24,86,1)] hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  Our Works
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`text-[16px] font-[700] ${isActive("/contact") ? "text-[rgba(7,24,86,1)]" : "text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]"}`}
          >
            Contact Us
          </Link>
        </nav>
        <a
          href="https://wa.me/34655781113?text=hi%20meezak%20technologies%20i%20want%20to%20make%20enquiries"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[150px] lg:w-[180px] h-[48px] py-[10px] px-4 gap-6 rounded-[8px] bg-[rgba(7,24,86,1)] text-white text-sm font-[600] flex items-center justify-center hover:bg-blue-800"
        >
          Get Started
          <img src={whatsappLogo || "/placeholder.svg"} alt="WhatsApp Logo" className="w-[23.82px] h-[24px]" />
        </a>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 h-[80px]">
        <div className="flex flex-col">
          <Link to="/">
            <img src={meezakLogo || "/placeholder.svg"} alt="Meezak Logo" className="w-[100px] h-[36px]" />
          </Link>
        </div>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none outline-none border-none">
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
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] ${isActive("/") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>

            {/* About Us with Dropdown */}
            <div className="relative" ref={aboutDropdownRefMobile}>
              <div className="flex justify-between items-center">
                <Link
                  to="/about"
                  className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex-1 ${isActive("/about") || isActive("/team") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <button
                  ref={aboutButtonRefMobile}
                  onClick={toggleAboutDropdown}
                  className="p-4 focus:outline-none outline-none border-none"
                >
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
                    to="/ourTeam"
                    className="block px-6 py-3 text-[14px] font-medium text-[rgba(7,24,86,1)] hover:bg-gray-100"
                    onClick={handleLinkClick}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services with Dropdown */}
            <div className="relative" ref={servicesDropdownRefMobile}>
              <div className="flex justify-between items-center">
                <Link
                  to="/services"
                  className={`text-[14px] font-medium py-4 px-6 rounded-[20px] flex-1 ${isActive("/services") || isActive("/works") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <button
                  ref={servicesButtonRefMobile}
                  onClick={toggleServicesDropdown}
                  className="p-4 focus:outline-none outline-none border-none"
                >
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
              className={`text-[14px] font-medium py-4 px-6 rounded-[20px] ${isActive("/contact") ? "bg-blue-50 text-[rgba(7,24,86,1)]" : "text-[rgba(7,24,86,1)]"}`}
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;