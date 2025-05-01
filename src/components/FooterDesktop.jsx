import meezakLogo from '../assets/images/footer-logo.svg';
import twitterIcon from '../assets/icons/fbb-icon.svg';
import facebookIcon from '../assets/icons/x-icon.svg';
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import instagramIcon from '../assets/icons/instagram-icon.svg';
import locationIcon from '../assets/icons/location-icon.svg';
import emailIcon from '../assets/icons/email-icon.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';
import { Link } from 'react-router-dom';

function FooterDesktop() {
  return (
    <footer className="bg-[rgba(7,24,86,1)] text-white px-12 md:h-[491px] md:flex md:items-center md:justify-center">
      <div className="max-w-7xl md:w-[100%] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column: Logo & Description */}
          <div className="flex flex-col items-center md:items-start md:w-[361px] md:h-[261px]">
            <div className="flex flex-col items-center md:items-start mb-4">
              <img src={meezakLogo} alt="Meezak Logo" className="md:h-[65px] md:w-[180px] mb-2" />
            </div>
            <p className="text-base md:text[14px] font-[500] md:text-red text-center md:text-left mb-4 md:w-[361px] md:h-[76px]">
              Meezak Technologies is a registered startup IT Consulting Company in Nigeria, West Africa & Globally.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/MeezakTechLtd?t=ZjNadxZ43wVBbAqILjyn_A&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-[24px] md:h-[24px] w-[11px] h-[12px] border-[0.5px] border-red rounded-full flex items-center justify-center bg-red"
              >
                <img src={twitterIcon} alt="Twitter" className="md:h-[11px] md:w-[12px]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-[24px] md:h-[24px] w-[11px] h-[12px] border-[0.5px] border-white rounded-full flex items-center justify-center"
              >
                <img src={facebookIcon} alt="Facebook" className="md:h-[11px] md:w-[6px]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-[24px] md:h-[24px] w-[11px] h-[12px] border-[0.5px] border-white rounded-full flex items-center justify-center"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="md:h-[10px] md:w-[10.67px]" />
              </a>
              <a
                href="https://www.instagram.com/meezaktechnologies_?igsh=MTd2cXQzMWFnN2VsbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-[24px] md:h-[24px] w-[11px] h-[12px] border-[0.5px] border-white rounded-full flex items-center justify-center"
              >
                <img src={instagramIcon} alt="Instagram" className="md:h-[12px] md:w-[12px]" />
              </a>
            </div>
          </div>

          {/* Div Wrapping Second, Third, Fourth Columns and Contact Info */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            {/* Second Column: Company */}
            <div className="flex flex-col items-center md:items-start md:w-[54px] md:h-[171px]">
              <h3 className="text-lg md:text-[12px] font-semibold mb-2">COMPANY</h3>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <Link to="/" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Third Column: Support */}
            <div className="flex flex-col items-center md:items-start md:w-[81px] md:h-[171px]">
              <h3 className="text-lg md:text-[12px] font-semibold mb-2">SUPPORT</h3>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <Link to="/contact" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Quick Form
                  </Link>
                </li>
                <li>
                  <Link to="/contact#faq" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact#map" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Live Location
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fourth Column: Our Works */}
            <div className="flex flex-col items-center md:items-start md:w-[82px] md:h-[132px]">
              <h3 className="text-lg md:text-[12px] font-semibold mb-2">OUR WORKS</h3>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <Link to="/works" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/works" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-base md:text-[12px] font-[500] text-[rgba(255,255,255,1)] hover:text-white">
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left md:w-[243px]">
              <p className="text-base md:text-[12px] font[600] text-[rgba(255,255,255,1)] flex items-center justify-center md:justify-start mb-2 md:w-[250px]">
                <img src={locationIcon} alt="Location" className="md:h-[24px] md:w-[24px] mr-2" />
                35, Oba Akran Avenue, Empire Building, Opposite Chicken Republic, Ikeja Lagos
              </p>
              <p className="text-base md:text-[12px] font[600] text-[rgba(255,255,255,1)] flex items-center justify-center md:justify-start mb-2">
                <img src={emailIcon} alt="Email" className="md:h-[24px] md:w-[24px] mr-2" />
                info@meezaktechnologies.com
              </p>
              <p className="text-base md:text-[12px] font[600] text-[rgba(255,255,255,1)] flex items-center justify-center md:justify-start">
                <img src={phoneIcon} alt="Phone" className="md:h-[24px] md:w-[24px] mr-2" />
                +234 810 546 6785
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[rgba(236,40,40,0.2)] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm md:text[12px] font[700] text-[rgba(255,255,255,1)] mb-4 md:mb-0">
            © 2025 Meezak Technologies Ltd. All rights reserved
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm md:text[12px] font[700] text-[rgba(255,255,255,1)] hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-sm md:text[12px] font[700] text-[rgba(255,255,255,1)] hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm md:text[12px] font[700] text-[rgba(255,255,255,1)] hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterDesktop;