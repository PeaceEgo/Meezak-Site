import { useState } from 'react';
import whatsappLogo from '../assets/images/whatsapp-logo.png';
import meezakLogo from '../assets/images/meezak-logo.png';
import hamburgerIcon from '../assets/icons/hamburger.png';
import cancelIcon from '../assets/icons/cancel.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 py-4 md:pl-6 md:pr-6 lg:pl-[112px] lg:pr-[112px]">
        <div className="flex items-center">
          {/* Logo */}
          <img src={meezakLogo} alt="Meezak Logo" className="h-[40px] w-[112px] lg:h-[46px] lg:w-[128.7px]" />
        </div>
        <nav className="flex space-x-4 lg:space-x-6 items-center justify-between">
          <a
            href="#"
            className={`text-base ${
              activeLink === 'Home'
                ? 'text-[rgba(7,24,86,1)]'
                : 'text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]'
            }`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
          <div className="relative group">
            <a
              href="#"
              className={`text-base flex items-center ${
                activeLink === 'About Us'
                  ? 'text-[rgba(7,24,86,1)]'
                  : 'text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]'
              }`}
              onClick={() => handleLinkClick('About Us')}
            >
              About Us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown placeholder; customize as needed */}
          </div>
          <div className="relative group">
            <a
              href="#"
              className={`text-base flex items-center ${
                activeLink === 'Services'
                  ? 'text-[rgba(7,24,86,1)]'
                  : 'text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]'
              }`}
              onClick={() => handleLinkClick('Services')}
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown placeholder; customize as needed */}
          </div>
          <a
            href="#"
            className={`text-base ${
              activeLink === 'Contact Us'
                ? 'text-[rgba(7,24,86,1)]'
                : 'text-[rgba(21,73,93,1)] hover:text-[rgba(33,116,148,1)]'
            }`}
            onClick={() => handleLinkClick('Contact Us')}
          >
            Contact Us
          </a>
        </nav>
        <button className="w-[150px] lg:w-[180px] h-[48px] py-[10px] px-4 gap-6 rounded-[8px] bg-[rgba(7,24,86,1)] text-white text-sm font-[600] flex items-center justify-center hover:bg-blue-800">
          Get Started
          <img src={whatsappLogo} alt="WhatsApp Logo" className="w-[23.82px] h-[24px]" />
        </button>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 h-[80px">
        <div className="flex flex-col">
          <img src={meezakLogo} alt="Meezak Logo" className="w-[100px] h-[36px]" />
         
        </div>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <img
            src={isMenuOpen ? cancelIcon : hamburgerIcon}
            alt={isMenuOpen ? 'Cancel Icon' : 'Hamburger Icon'}
            className={isMenuOpen ? 'w-8 h-8' : 'w-6 h-6'}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full h-[339px] bg-white z-50 flex flex-col">
          <nav className="flex flex-col space-y-6 px-6 py-6">
            <a
              href="#"
              className="text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center text-[rgba(7,24,86,1)]"
              onClick={() => handleLinkClick('Home')}
            >
              Home
              {activeLink !== 'Home' && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
            <a
              href="#"
              className="text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center text-[rgba(7,24,86,1)]"
              onClick={() => handleLinkClick('About Us')}
            >
              About Us
              {activeLink !== 'About Us' && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
            <a
              href="#"
              className="text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center text-[rgba(7,24,86,1)]"
              onClick={() => handleLinkClick('Services')}
            >
              Services
              {activeLink !== 'Services' && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
            <a
              href="#"
              className="text-[14px] font-medium py-4 px-6 rounded-[20px] flex justify-between items-center text-[rgba(7,24,86,1)]"
              onClick={() => handleLinkClick('Contact Us')}
            >
              Contact Us
              {activeLink !== 'Contact Us' && (
                <svg className="w-5 h-5 text-[rgba(7,24,86,1)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;