import twitterIcon from '../assets/icons/fbb-icon.svg';
import facebookIcon from '../assets/icons/x-icon.svg';
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import instagramIcon from '../assets/icons/instagram-icon.svg';
import { Link } from 'react-router-dom';

function FooterMobile() {
  return (
    <footer className="bg-[rgba(7,24,86,1)] text-white flex items-center justify-center min-h-[676px] w-full">
      <div className="mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8 w-[342px] h-[356px]">
          {/* Container for Company and Support */}
          <div className="flex gap-[119px] flex-wrap w-full">
            {/* Company Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-[18px] font-[700] mb-2">COMPANY</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-[18px] font-[700] mb-2">SUPPORT</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/contact" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Quick Form
                  </Link>
                </li>
                <li>
                  <Link to="/contact#faq" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact#map" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Live Location
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Container for Our Works and Contact Info */}
          <div className="flex  justify-between w-full">
            {/* Our Works Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-[18px] font-[700] mb-2 w-[114px]">OUR WORKS</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/works" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/works" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-start w-[130px]">
              <h3 className="text-[18px] font-[700] mb-2">CONTACT</h3>
              <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] flex items-center justify-center mb-2">
                35, Oba Akran Avenue, Empire Building, Opposite Chicken Republic, Ikeja Lagos
              </p>
              <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] flex items-center justify-center mb-2">
                info@meezaktechno <br /> logies.com
              </p>
              <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] flex items-center justify-center">
                +234 810 546 6785
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[rgba(255,255,255,0.5)] mt-8 pt-6 flex flex-col items-start">
          {/* Social Media Icons (Moved Below the Line) */}
          <div className="flex space-x-4 h-[77px]">
            <a
              href="https://x.com/MeezakTechLtd?t=ZjNadxZ43wVBbAqILjyn_A&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center"
            >
              <img src={twitterIcon} alt="Twitter" className="h-[17px] w-[18px]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center"
            >
              <img src={facebookIcon} alt="Facebook" className="h-[17px] w-[9px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-[15px] w-[16px]" />
            </a>
            <a
              href="https://www.instagram.com/meezaktechnologies_?igsh=MTd2cXQzMWFnN2VsbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center"
            >
              <img src={instagramIcon} alt="Instagram" className="h-[18px] w-[18px]" />
            </a>
          </div>
          <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] mb-4">
            © 2025 Meezak Technologies Ltd. All rights reserved
          </p>
          <div className="flex space-x-2 mb-4">
            <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
              Terms of Service <span className="w-[4px] h-[4px] rounded-full bg-white inline-block mx-2"></span>
            </a>
            <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
              Privacy Policy <span className="w-[4px] h-[4px] rounded-full bg-white inline-block mx-2"></span>
            </a>
            <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;