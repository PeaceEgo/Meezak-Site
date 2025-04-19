import FAQAccordion from "../components/faqAccordion"
import ServicesSection from "../components/servicesSect"
import WhyChooseUs from "../components/whyChoose"


function HomePage() {
  return (
    <div className="w-full h-[100%] bg-[ #EEEEEE]"> 
          <ServicesSection/>
          <WhyChooseUs/>
          <FAQAccordion/>
    </div>
  )
}

export default HomePage