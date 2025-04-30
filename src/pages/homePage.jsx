
import Hero from '../components/Hero';
import TrustedLogos from '../components/TrustedLogos';
import FAQAccordion from "../components/FaqAccordion"
import ServicesSection from "../components/ServicesSect"
import WhyChooseUs from "../components/WhyChoose"
import WorkspaceGallery from "../components/WorkSpace"
import TestimonialSlider from "@/components/Testimonial"
import GetStarted from "../components/GetStarted"


function HomePage() {
  return (

    <div className="max-w-[100vw] overflow-hidden">

      <Hero />
      <TrustedLogos />
      <ServicesSection />
      <WhyChooseUs />
      <FAQAccordion />
      <WorkspaceGallery />
      <TestimonialSlider />
      <GetStarted />

    </div>
  )
}

export default HomePage