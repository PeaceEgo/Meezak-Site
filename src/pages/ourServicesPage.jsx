import FAQAccordion from "@/components/faqAccordion"
import ServicesSection from "@/components/ourServicesCards"
import OurServicesHero from "@/components/ourServicesHero"

function OurServices() {
  return (
    <div>
      <OurServicesHero/>
          <ServicesSection/>
          <FAQAccordion/>
    </div>
  )
}

export default OurServices