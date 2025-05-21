import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);
    const touchStartX = useRef(null);
    const isAnimating = useRef(false);

    const services = [
        {
            id: 1,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps built with cutting-edge technologies",
        },
        {
            id: 2,
            title: "Business Website Design",
            description: "Professional and responsive websites tailored to your business needs",
        },
        {
            id: 3,
            title: "Server Provisioning",
            description: "Efficient and scalable server solutions for your applications",
        },
        {
            id: 4,
            title: "Enterprise Web Development",
            description: "Robust web applications for enterprise-level business requirements",
        },
        {
            id: 5,
            title: "Game Development",
            description: "Engaging and interactive game solutions for various platforms",
        },
        {
            id: 6,
            title: "UI/UX Design",
            description: "User-centered design for intuitive and visually appealing interfaces",
        },
    ];

    // Detect mobile and tablet views
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // GSAP animation
    useEffect(() => {
        if (sliderRef.current && isMobile && slidesRef.current.length > 0 && !isAnimating.current) {
            isAnimating.current = true;
            try {
                const slide = slidesRef.current[0];
                const cardWidth = 392; // Fixed card width from renderServiceCard
                const gap = 16; // gap-4 = 16px
                const itemWidth = cardWidth + gap; // Total width per slide (card + gap)
                console.log("Calculated itemWidth:", itemWidth); // Debug
                gsap.to(sliderRef.current, {
                    x: -currentIndex * itemWidth,
                    duration: 0.8,
                    ease: "power2.out",
                    onComplete: () => {
                        isAnimating.current = false;
                    },
                });
            } catch (error) {
                console.error("GSAP animation error:", error);
                isAnimating.current = false;
            }
        }
    }, [currentIndex, isMobile]);

    // Handle touch events
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === null || isAnimating.current) return;

        const currentTouch = e.touches[0].clientX;
        const diff = touchStartX.current - currentTouch;

        if (diff > 50) {
            setCurrentIndex((prev) => Math.min(prev + 1, services.length - 1));
            touchStartX.current = null;
        } else if (diff < -50) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    // Debug: Log rendered services
    useEffect(() => {
        if (isMobile) {
            console.log("Mobile slider rendering services:", services.map(s => s.title));
        } else {
            console.log("Grid rendering services:", services.map(s => s.title));
        }
    }, [isMobile]);

    const renderServiceCard = (service, index) => (
        <div
            key={service.id}
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
            {/* Border gradient */}
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

            {/* Left purple blur */}
            <div
                className="absolute rounded-full blur-xl bg-purple-600 opacity-100"
                style={{
                    top: "30px",
                    left: "30px",
                    width: "50px",
                    height: "50px",
                }}
            />

            {/* Right gradient */}
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

            <div className="relative z-10 p-6 h-full flex flex-col justify-center">
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
                    <div
                        className="md:hidden relative overflow-x-hidden"
                        style={{ width: "392px", margin: "0 auto" }}
                    >
                        <div
                            ref={sliderRef}
                            className="flex gap-4 pb-8 touch-pan-x"
                            style={{ willChange: "transform", WebkitOverflowScrolling: "touch" }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    ref={(el) => (slidesRef.current[index] = el)}
                                    className="flex-shrink-0 box-border"
                                >
                                    {renderServiceCard(service, index)}
                                </div>
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