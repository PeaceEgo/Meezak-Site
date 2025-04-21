import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

function Footer() {
  return (
    <>
      {/* Show FooterMobile on mobile (hidden on md and above) */}
      <div className="block md:hidden">
        <FooterMobile />
      </div>
      {/* Show FooterDesktop on desktop (hidden on mobile) */}
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
    </>
  );
}

export default Footer;