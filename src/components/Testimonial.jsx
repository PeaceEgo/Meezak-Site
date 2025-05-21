import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Avatar from "../assets/Avatar.svg";

const testimonials = [
    {
        id: 1,
        rating: 5,
        title: "Excellent Service for our project",
        quote:
            '"Hello! My self Ayomide and the team at Meezak Technologies. We worked for months with the team. It was an excellent fun. We were able to do the most fun project with them. I would want to do the next one!"',
        author: "Ayomide Asekoro",
        position: "CEO, GreenMind",
        avatar: Avatar,
    },
    {
        id: 2,
        rating: 5,
        title: "Excellent Service for our project",
        quote:
            '"Hello! My self Ayomide and the team at Meezak Technologies. We learned so much about the Christmas area. I was amazed with the team. It was an excellent fun. We learned so much about the Christmas area. I would want to do the next one!"',
        author: "Simon Asekoro",
        position: "CEO, DigiFuel",
        avatar: Avatar,
    },
    {
        id: 3,
        rating: 5,
        title: "Excellent Service for our project",
        quote:
            '"Hello! My self Ayomide and the team at Meezak. It was provided to learn about the team. It was an excellent fun. We learned so much about the Christmas area. I cannot wait to do the next one!"',
        author: "Damilola Asekoro",
        position: "CEO, GLOSTARS",
        avatar: Avatar,
    },
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);
    const touchStartX = useRef(null);
    const isAnimating = useRef(false);

    // Detect mobile view
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
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
                const rectWidth = slide?.getBoundingClientRect().width || 0;
                const fallbackWidth = window.innerWidth * 0.85; // 85% of viewport
                const itemWidth = rectWidth > 0 ? rectWidth : fallbackWidth; // Card width without gap
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
            setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
            touchStartX.current = null;
        } else if (diff < -50) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    const renderStars = (rating) => {
        return Array(rating)
            .fill()
            .map((_, i) => (
                <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ));
    };

    return (
        <div className="bg-[#061345] py-16 px-4 md:px-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Trusted Clients</h2>
                    <p className="max-w-2xl mx-auto text-blue-200">
                        Join the amazing list of companies transforming their business with Mesozi Technologies Ltd. Don't just take
                        our word for it—hear what business owners have to say.
                    </p>
                </div>

                {/* Mobile Slider */}
                <div
                    className="md:hidden relative overflow-x-hidden"
                    style={{ width: "85vw", margin: "0 auto" }}
                >
                    <div
                        ref={sliderRef}
                        className="flex gap-4 pb-8 touch-pan-x"
                        style={{ willChange: "transform", WebkitOverflowScrolling: "touch" }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                ref={(el) => (slidesRef.current[index] = el)}
                                className="w-[85vw] flex-shrink-0 bg-[#071856] p-6 rounded-lg shadow-lg flex flex-col box-border"
                            >
                                <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                                <h3 className="text-xl font-semibold mb-3">{testimonial.title}</h3>
                                <p className="text-blue-200 mb-3 flex-grow">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.author}
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <p className="font-medium">{testimonial.author}</p>
                                        <p className="text-sm text-blue-300">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet View */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-[#071856] p-6 rounded-lg shadow-lg flex flex-col">
                            <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                            <h3 className="text-xl font-semibold mb-3">{testimonial.title}</h3>
                            <p className="text-blue-200 mb-3 flex-grow">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar || "/placeholder.svg"}
                                    alt={testimonial.author}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-sm text-blue-300">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:block relative h-[450px]">
                    <div className="absolute w-full h-full perspective-[1200px]">
                        <div
                            className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[30%] bg-[#071856] p-6 rounded-lg shadow-xl flex flex-col transform -rotate-12 z-10"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="flex mb-2">{renderStars(testimonials[0].rating)}</div>
                            <h3 className="text-xl font-semibold mb-3">{testimonials[0].title}</h3>
                            <p className="text-blue-200 mb-3 flex-grow">{testimonials[0].quote}</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonials[0].avatar || "/placeholder.svg"}
                                    alt={testimonials[0].author}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-medium">{testimonials[0].author}</p>
                                    <p className="text-sm text-blue-300">{testimonials[0].position}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] bg-[#071856] p-6 rounded-lg shadow-2xl flex flex-col z-20"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="flex mb-2">{renderStars(testimonials[1].rating)}</div>
                            <h3 className="text-xl font-semibold mb-3">{testimonials[1].title}</h3>
                            <p className="text-blue-200 mb-6 flex-grow">{testimonials[1].quote}</p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[1].avatar || "/placeholder.svg"}
                                    alt={testimonials[1].author}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-medium">{testimonials[1].author}</p>
                                    <p className="text-sm text-blue-300">{testimonials[1].position}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[30%] bg-[#071856] p-6 rounded-lg shadow-xl flex flex-col transform -rotate-12 z-20"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="flex mb-2">{renderStars(testimonials[2].rating)}</div>
                            <h3 className="text-xl font-semibold mb-3">{testimonials[2].title}</h3>
                            <p className="text-blue-200 mb-6 flex-grow">{testimonials[2].quote}</p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonials[2].avatar || "/placeholder.svg"}
                                    alt={testimonials[2].author}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-medium">{testimonials[2].author}</p>
                                    <p className="text-sm text-blue-300">{testimonials[2].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}