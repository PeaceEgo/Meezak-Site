import AboutHero from '@/components/aboutHero'
import ContactHero from '../components/contactHero'
import MissionVisionSection from '@/components/MissionVisionSection'
import TrustedLogos from  '../components/TrustedLogos'
import TestimonialSlider from '../components/testimonial'
import GetStarted from '@/components/GetStarted'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

function ContactUs() {
    return (
        <div>
            <AboutHero />
            <TrustedLogos />
            <MissionVisionSection />
            <TeamSection />
            {/* <TestimonialSlider /> */}
            <GetStarted />
    
            <Footer />
        </div>
    )
}

export default ContactUs