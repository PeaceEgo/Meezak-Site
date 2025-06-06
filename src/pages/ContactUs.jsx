import FAQAccordion from '@/components/FaqAccordion'
import ContactHero from '../components/ContactHero'
import LocationSection from '../components/Location'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function ContactUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className='w-[100vw] overflow-hidden'>
      <ContactHero />
      <LocationSection />
      <FAQAccordion />

    </div>
  )
}

export default ContactUs
