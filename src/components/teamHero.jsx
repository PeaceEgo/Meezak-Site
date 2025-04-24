"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import heroImage from "../assets/images/teamHero.svg"

const OurTeamSection = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="bg-white py-16 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mt-16">
                {/* Team Image */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg mx-auto w-[342px] h-[174px] sm:w-full sm:h-auto">
                    <img
                        src={heroImage || "/placeholder.svg"}
                        alt="Our team working in a modern office space"
                        className="w-full h-full sm:h-auto object-cover"
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

                    <div className="flex">
                        <Link
                            to="/contact"
                            className="group px-8 py-3 border border-[#CC5A71] text-[#CC5A71] font-medium rounded hover:bg-[#CC5A71] hover:text-white transition-colors duration-300 flex items-center"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span>Work With Us</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 ml-2 transform transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div className="mt-10 border-t-2 border-gray-300 pt-8 w-[100vw]">

            </div>
        </section>
    )
}

export default OurTeamSection
