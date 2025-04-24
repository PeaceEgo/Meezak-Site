import FAQAccordion from '@/components/faqAccordion'
import ContactHero from '../components/contactHero'
import LocationSection from '../components/location'


function ContactUs() {
    return (
        <div className='w-[100vw] overflow-hidden'>
            <ContactHero />
            <LocationSection />
            <FAQAccordion />
           
        </div>
    )
}

export default ContactUs