
import Hero from '../components/hero';
import TrustedLogos from '../components/TrustedLogos';
import FAQAccordion from "../components/faqAccordion"
import ServicesSection from "../components/servicesSect"
import WhyChooseUs from "../components/whyChoose"
import WorkspaceGallery from "../components/workSpace"
import TestimonialSlider from "@/components/testimonial"
import GetStarted from "../components/GetStarted"


function HomePage() {
  return (
   
    <div className="w-[100vw] overflow-hidden"> 
        
          <Hero/>
          {/* <TrustedLogos/> */}
          <ServicesSection/>
          <WhyChooseUs/>
          <FAQAccordion/>
        <WorkspaceGallery />
        <TestimonialSlider />
          <GetStarted/>
          
    </div>
  )
}

export default HomePage