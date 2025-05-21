import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const carouselRef = useRef(null);

    const services = [
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps built with cutting-edge technologies",
        },
        {
            title: "Business Website Design",
            description: "Professional and responsive websites tailored to your business needs",
        },
        {
            title: "Server Processing",
            description: "Efficient and scalable server solutions for your applications",
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps built with cutting-edge technologies",
        },
        {
            title: "Server Processing",
            description: "Efficient and scalable server solutions for your applications",
        },
        {
            title: "Business Website Design",
            description: "Professional and responsive websites tailored to your business needs",
        },
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        carouselRef.current?.setAttribute("data-touchstart", touchDown.toString());
    };

    const handleTouchMove = (e) => {
        if (!carouselRef.current) return;

        const touchStart = Number(carouselRef.current.getAttribute("data-touchstart") || 0);
        const currentTouch = e.touches[0].clientX;
        const diff = touchStart - currentTouch;

        if (diff > 50) {
            setCurrentIndex((prev) => Math.min(prev + 1, services.length - 1));
        } else if (diff < -50) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    const handleTouchEnd = () => {
        if (carouselRef.current) {
            carouselRef.current.removeAttribute("data-touchstart");
        }
    };

    useEffect(() => {
        if (carouselRef.current && isMobile) {
            const cardWidth = 392; // Fixed card width
            const cardPadding = 16; // 8px (px-2) on each side
            const totalCardWidth = cardWidth + cardPadding;
            const viewportWidth = window.innerWidth;
            const containerPadding = 32; // 16px (px-4) on each side of .container
            const offset = (viewportWidth - cardWidth - cardPadding - containerPadding) / 2;

            // Debug logs
            console.log({
                viewportWidth,
                cardWidth,
                totalCardWidth,
                offset,
                currentIndex,
                translateX: -currentIndex * totalCardWidth + offset,
            });

            // Set container width to accommodate all cards
            carouselRef.current.style.width = `${services.length * totalCardWidth}px`;

            // GSAP animation to slide one card at a time
            gsap.to(carouselRef.current, {
                x: -currentIndex * totalCardWidth + offset,
                duration: 0.5,
                ease: "power2.out",
            });
        }
    }, [currentIndex, isMobile, services.length]);

    // Initialize carousel position on mount
    useEffect(() => {
        if (carouselRef.current && isMobile) {
            const cardWidth = 392;
            const cardPadding = 16;
            const totalCardWidth = cardWidth + cardPadding;
            const viewportWidth = window.innerWidth;
            const containerPadding = 32;
            const offset = (viewportWidth - cardWidth - cardPadding - containerPadding) / 2;

            carouselRef.current.style.width = `${services.length * totalCardWidth}px`;
            gsap.set(carouselRef.current, { x: offset });
        }
    }, [isMobile]);

    const renderServiceCard = (service, index) => (
        <div
            key={index}
            className="relative overflow-hidden"
            style={{
                width: "392px",
                height: "242px",
                borderRadius: "8px",
                border: "2px solid transparent",
                backgroundClip: "padding-box",
                backgroundImage: "linear-gradient(to bottom, rgba(88, 7, 191, 0.2), rgba(41, 3, 89, 0.2))",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    padding: "2px",
                    borderRadius: "10px",
                    background: "linear-gradient(249.14deg, #5807BF 0%, #290359 50.42%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                }}
            />
            <div
                className="absolute rounded-full blur-xl bg-purple-600 opacity-100"
                style={{
                    top: "30px",
                    left: "30px",
                    width: "50px",
                    height: "50px",
                }}
            />
            <div
                className="absolute z-0"
                style={{
                    bottom: "100px",
                    right: "-100px",
                    width: "250px",
                    height: "250px",
                    background: "linear-gradient(135deg, rgba(88, 7, 191, 0.7), rgba(41, 3, 89, 0.7))",
                    filter: "blur(40px)",
                    opacity: "1",
                }}
            />
            <div className="relative z-10 p-6 px-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
            </div>
        </div>
    );

    return (
        <section
            className="w-[100vw] h-[100%] py-16 text-white overflow-hidden"
            style={{ background: "linear-gradient(247.14deg, #061345 0%, #071856 100%)" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span
                            className="inline-block px-3 py-1 text-sm font-medium rounded-full"
                            style={{
                                background: "rgba(140, 125, 160, 0.23)",
                                borderRadius: "15px",
                            }}
                        >
                            OUR SERVICES
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Outstanding Cutting-Edge</h2>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Solutions</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Deliver exceptional user experiences with our innovative digital technologies
                    </p>
                </div>

                {isMobile ? (
                    <div className="relative overflow-hidden">
                        <div
                            ref={carouselRef}
                            className="flex snap-x snap-mandatory"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 snap-center px-2"
                                    style={{ width: "392px" }}
                                >
                                    {renderServiceCard(service, index)}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 mx-1 rounded-full ${
                                        currentIndex === index ? "bg-purple-600" : "bg-gray-500"
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={`grid gap-6 justify-items-center ${isTablet ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                        {services.map((service, index) => renderServiceCard(service, index))}
                    </div>
                )}
            </div>
        </section>
    );
}