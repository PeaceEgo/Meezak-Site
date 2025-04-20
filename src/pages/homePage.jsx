import Header from '../components/header';
import Hero from '../components/hero';
import TrustedLogos from '../components/TrustedLogos';
import FAQAccordion from "../components/faqAccordion"
import ServicesSection from "../components/servicesSect"
import WhyChooseUs from "../components/whyChoose"
import GetStarted from "../components/GetStarted"


function HomePage() {
  return (
    <div className="w-full h-[100%] bg-[ #EEEEEE]"> 
          <Header/>
          <Hero/>
          <TrustedLogos/>
          <ServicesSection/>
          <WhyChooseUs/>
          <FAQAccordion/>
          <GetStarted/>
    </div>
  )
}

export default HomePage