import OurWorks from '@/components/PortfolioHero'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialSlider from '@/components/testimonial'
import GetStarted from '@/components/GetStarted'
import Footer from '@/components/Footer'

function OurWork() {
    return (
        <div>
            <OurWorks />
            <PortfolioSection />  
             <TestimonialSlider />
            <GetStarted />  
            <Footer />
        </div>
    )
}

export default OurWork