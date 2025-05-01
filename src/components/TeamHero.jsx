
import { useState } from "react"
// import { Link } from "react-router-dom"
import heroImage from "../assets/images/office.svg"
import CTAButton from "./CtaButton"

const OurTeamSection = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="bg-white py-0 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mt-16">
                {/* Team Image */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg  mx-auto w-[342px] h-[174px] sm:w-full sm:h-auto">
                    <img
                        src={heroImage || "/placeholder.svg"}
                        alt="Our team working in a modern office space"
                        className="w-full h-full sm:h-auto  max-h-[300px] object-cover object-center"
                    />
                </div>

                {/* Team Content */}
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-[#CC5A71]">Our</span> <span className="text-[#071856]">Team</span>
                    </h2>

                    <p className="text-[#071856] text-sm sm:text-x1 mb-8 leading-relaxed">
                        We're a team of passionate storytellers, tech wizards, and marketing alchemists who transform brands and
                        businesses into digital sensations. We don't just create websites and campaigns, we craft experiences that
                        captivate, connect, and convert! Scroll down to see the faces behind the mighty works.
                    </p>

                    <div>

                        <CTAButton to="/contact" text="Work With Us" />

                    </div>

                </div>
            </div>
            <div className="mt-10 border-t-2 border-gray-300 pt-8 w-[100vw]">

            </div>
        </section>
    )
}

export default OurTeamSection
