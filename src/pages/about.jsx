import AboutUsHero from "@/components/aboutHero"
import TrustedLogos from "@/components/TrustedLogos"
import MissionVisionSection from "@/components/MissionVisionSection"
import TeamSection from "@/components/TeamSection"
import GetStarted from "@/components/GetStarted"
import TestimonialSlider from "@/components/testimonial"

function AboutUs() {
  return (
    < >
      <AboutUsHero />
      <TrustedLogos />
      <MissionVisionSection />
      <TeamSection/>
      <TestimonialSlider/>
      <GetStarted />
    </>
  )
}

export default AboutUs