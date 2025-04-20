import TestimonialSlider from "@/components/testimonial"
import FAQAccordion from "../components/faqAccordion"
import ServicesSection from "../components/servicesSect"
import WhyChooseUs from "../components/whyChoose"
import WorkspaceGallery from "../components/workSpace"



function HomePage() {
  return (
    <div className="w-[100vw] overflow-hidden"> 
          <ServicesSection/>
          <WhyChooseUs/>
          <FAQAccordion/>
      <WorkspaceGallery/>
      <TestimonialSlider/>
    </div>
  )
}

export default HomePage