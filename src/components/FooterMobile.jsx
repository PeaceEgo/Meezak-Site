import meezakLogo from '../assets/images/footer-logo.svg'; // Included for consistency, though not used in mobile
import twitterIcon from '../assets/icons/fbb-icon.svg';
import facebookIcon from '../assets/icons/x-icon.svg';
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import instagramIcon from '../assets/icons/instagram-icon.svg';
import locationIcon from '../assets/icons/location-icon.svg';
import emailIcon from '../assets/icons/email-icon.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';

function FooterMobile() {
  return (
    <footer className="bg-[rgba(7,24,86,1)] text-white pl-12 pr-12 flex items-center justify-center h-[676px] w-[390px] ">
      <div className=" mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8 w-[342px] h-[356px]">
          {/* Container for Company and Support */}
          <div className="flex justify-start gap-[88px] flex-wrap w-full">
            {/* Company Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-[18px] font-[700] mb-2">COMPANY</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Service</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col items-start">
              <h3 className="text-[18px] font-[700] mb-2 ">SUPPORT</h3>
              <ul className="space-y-1 ">
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Quick Form</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Live Location</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Container for Our Works and Contact Info */}
          <div className="flex justify-around  w-full gap-[64px]">
            {/* Our Works Section */}
            <div className="flex flex-col items-start w-[180px]">
              <h3 className="text-[18px] font-[700] mb-2  w-[114px]">OUR WORKS</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Products</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Portfolio</a>
                </li>
                <li>
                  <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Our Services</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-start ">
              <h3 className="text-[18px] font-[700] mb-2">CONTACT</h3>
              <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] flex items-center justify-center mb-2 ">
                
                35, Oba Akran Avenue, Empire Building, Opposite Chicken Republic, Ikeja Lagos
              </p>
              <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] flex items-center justify-center mb-2">
               
                info@meezaktechnologies.com
              </p>
              <p className="text-[12px] font-[400] text-[rgba(255,255,255,1)] flex items-center justify-center">
               
                +234 810 546 6785
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[rgba(255,255,255,0.5)] mt-8 pt-6 flex flex-col items-start ">
           {/* Social Media Icons (Moved Below the Line) */}
           <div className="flex space-x-4 h-[77px]">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center">
              <img src={twitterIcon} alt="Twitter" className="h-[17px] w-[18px]" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="h-[17px] w-[9px]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center">
              <img src={linkedinIcon} alt="LinkedIn" className="h-[15px] w-[16px]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-[37px] h-[37px] border-[0.7px] border-white rounded-full flex items-center justify-center">
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
            <a href="#" className="text-[12px] font-[400] text-[rgba(255,255,255,1)] hover:text-white">Cookies</a>
          </div>

         
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;