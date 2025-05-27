import { useState } from "react"
import service1 from "../assets/icons/serviceP1.svg"
import service2 from "../assets/icons/serviceP1.svg"
import service3 from "../assets/icons/serviceP2.svg"
import service4 from "../assets/icons/serviceP3.png"
import service5 from "../assets/icons/serviceP4.svg"
import useMobileDetector from "@/hooks/useMobileDetector"

const services = [
    {
        title: "Business Website Design",
        shortDescription: "Create professional, responsive websites to elevate your brand and engage your audience.",
        longDescription:
            "We design professional, responsive, and user-friendly business websites that effectively represent your brand online. Our websites are optimized for performance and built to engage your target audience.",
        image: service1,
        bgColor: "#F4F7FC",
        hoverColor: "#071856",
    },
    {
        title: "Mobile App Development",
        shortDescription: "Build intuitive, scalable mobile apps for Android and iOS with exceptional user experience.",
        longDescription:
            "Our team develops robust and intuitive mobile applications for Android and iOS platforms. We prioritize functionality, user experience, and scalability to bring your app ideas to life.",
        image: service2,
        bgColor: "#EEF2E4",
        hoverColor: "#071856",
    },
    {
        title: "Server Provisioning",
        shortDescription: "Secure, scalable server solutions for seamless website and application performance.",
        longDescription:
            "We provide secure and scalable server provisioning solutions to support your online infrastructure. Our services ensure your applications and websites run smoothly with minimal downtime.",
        image: service3,
        bgColor: "#E4E8E9",
        hoverColor: "#071856",
    },
    {
        title: "Enterprise/Web App Development",
        shortDescription: "Develop secure, scalable enterprise web apps tailored to your business needs.",
        longDescription:
            "Meezak Technologies specializes in building scalable and secure enterprise-level web applications tailored to your business operations. We ensure seamless integration, performance, and user-centric designs.",
        image: service4,
        bgColor: "#E4E8E9",
        hoverColor: "#071856",
    },
    {
        title: "Game Solution",
        shortDescription: "Craft immersive, high-quality gaming experiences from concept to deployment.",
        longDescription:
            "We offer comprehensive game development services, creating engaging and immersive gaming experiences. From concept to deployment, we bring your game ideas to reality with high-quality graphics and seamless functionality.",
        image: service5,
        bgColor: "#F4F7FC",
        hoverColor: "#071856",
    },
    {
        title: "Game Solution Website Design",
        shortDescription: "Design engaging websites for game solutions with community and monetization features.",
        longDescription:
            "Our expertise extends to creating attractive and functional websites specifically for game solution. We build platforms that support game distribution, community engagement, and monetization.",
        image: service1,
        bgColor: "#EEF2E4",
        hoverColor: "#071856",
    },
]

const ServiceCard = ({ title, shortDescription, longDescription, image, bgColor, hoverColor, className }) => {
    const [isHovered, setIsHovered] = useState(false)
    const isMobile = useMobileDetector()

    const showHoveredState = isMobile || isHovered

    return (
        <div
            className={`relative h-[500px] p-8 transition-all duration-300 overflow-hidden group rounded-md ${className || ""}`}
            style={{
                backgroundColor: showHoveredState ? hoverColor : bgColor,
                color: showHoveredState ? "white" : "#071856",
            }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="flex flex-col h-full">
                <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${showHoveredState ? "text-white" : "text-[#071856]"}`}
                >
                    {title}
                </h3>

                <div className="flex-1 flex flex-col justify-between text-start">
                    <p
                        className={`text-sm text-justify mb-4 transition-colors duration-300 ${showHoveredState ? "text-white" : "text-[#071856]"}`}
                    >
                        {shortDescription}
                    </p>

                    {/* Always show long description on mobile, or when hovered on desktop */}
                    {showHoveredState && (
                        <div className={`${!isMobile && isHovered ? "animate-fadeIn" : ""}`}>
                            <p className="text-sm leading-relaxed text-white text-justify">{longDescription}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-full h-1/3 pointer-events-none">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-contain opacity-30 hover:opacity-10 transition-opacity duration-300"
                />
            </div>
        </div>
    )
}

export default function ServicesSection() {
    return (
        <section className="py-16 px-4 md:px-8 bg-white mt-0">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[rgba(140,125,160,0.23)] text-[#071856] mb-4">
                        OUR SERVICES
                    </span>
                    <h2 className="text-3xl font-bold text-[#071856]">Driven by Quality & Dedicated</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            shortDescription={service.shortDescription}
                            longDescription={service.longDescription}
                            image={service.image}
                            bgColor={service.bgColor}
                            hoverColor={service.hoverColor}
                            className="rounded-md"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
