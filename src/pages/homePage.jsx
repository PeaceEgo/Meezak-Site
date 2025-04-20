<<<<<<< HEAD
import TestimonialSlider from "@/components/testimonial"
import FAQAccordion from "../components/faqAccordion"
import ServicesSection from "../components/servicesSect"
import WhyChooseUs from "../components/whyChoose"
import WorkspaceGallery from "../components/workSpace"

=======
import Header from '../components/header';
import Hero from '../components/hero';
import TrustedLogos from '../components/TrustedLogos';
import FAQAccordion from "../components/faqAccordion"
import ServicesSection from "../components/servicesSect"
import WhyChooseUs from "../components/whyChoose"
import GetStarted from "../components/GetStarted"
>>>>>>> a427ad2bd496051435732341f6d5da9879857856


function HomePage() {
  return (
<<<<<<< HEAD
    <div className="w-[100vw] overflow-hidden"> 
          <ServicesSection/>
          <WhyChooseUs/>
          <FAQAccordion/>
      <WorkspaceGallery/>
      <TestimonialSlider/>
=======
    <div className="w-full h-[100%] bg-[ #EEEEEE]"> 
          <Header/>
          <Hero/>
          <TrustedLogos/>
          <ServicesSection/>
          <WhyChooseUs/>
          <FAQAccordion/>
          <GetStarted/>
>>>>>>> a427ad2bd496051435732341f6d5da9879857856
    </div>
  )
}

export default HomePage