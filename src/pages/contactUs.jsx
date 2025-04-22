import FAQAccordion from '@/components/faqAccordion'
import ContactHero from '../components/contactHero'
import LocationSection from '../components/location'
import Footer from '@/components/Footer'

function ContactUs() {
    return (
        <div>
            <ContactHero />
            <LocationSection />
            <FAQAccordion />
            <Footer />
        </div>
    )
}

export default ContactUs