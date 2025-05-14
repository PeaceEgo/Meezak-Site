import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import office1 from "../assets/workSpace1.jpeg";
import office2 from "../assets/workSpace2.jpeg";
import office3 from "../assets/workSpace3.jpeg";
import office4 from "../assets/middle.jpeg";
import office5 from "../assets/workSpace5.jpeg";
import office6 from "../assets/workSpace6.jpeg";

const workspaceImages = [
    {
        id: 1,
        src: office1,
        alt: "Modern office space with glass partitions",
    },
    {
        id: 2,
        src: office4,
        alt: "Desk setup with computer and plants",
    },
    {
        id: 3,
        src: office3,
        alt: "Team collaboration meeting",
    },
    {
        id: 4,
        src: office2,
        alt: "Minimalist workspace with plants",
    },
    {
        id: 5,
        src: office5,
        alt: "Desk with laptop and notebook",
    },
    {
        id: 6,
        src: office6,
        alt: "Modern office interior with partitions",
    },
];

export default function WorkspaceGallery() {
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
            // Calculate slide width with fallback
            const slide = slidesRef.current[0];
            const rectWidth = slide.getBoundingClientRect().width;
            const fallbackWidth = window.innerWidth * 0.85; // 85% of viewport as fallback
            const itemWidth = rectWidth > 0 ? rectWidth + 16 : fallbackWidth + 16; // Include 16px gap
            console.log("Item width:", itemWidth, "Rect width:", rectWidth, "Fallback width:", fallbackWidth);
            console.log("Target X:", -currentIndex * itemWidth);
            gsap.to(sliderRef.current, {
                x: -currentIndex * itemWidth,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => {
                    isAnimating.current = false;
                },
            });
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
            setCurrentIndex((prev) => Math.min(prev + 1, workspaceImages.length - 1));
            touchStartX.current = null;
        } else if (diff < -50) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    // Navigation button handlers
    const goToPrevious = () => {
        if (!isAnimating.current) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    const goToNext = () => {
        if (!isAnimating.current) {
            setCurrentIndex((prev) => Math.min(prev + 1, workspaceImages.length - 1));
        }
    };

    return (
        <section className="bg-white py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-4 flex justify-center items-center">
                    <span
                        className="px-3 py-1 text-sm font-medium rounded-full"
                        style={{
                            background: "rgba(140, 125, 160, 0.23)",
                            color: "#071856",
                        }}
                    >
                        WORKSPACE IMAGES
                    </span>
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-[#071856]">Images from Our Space</h2>
                </div>

                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <p className="text-[#071856] text-sm">
                        Our Core aim is focused on developing solutions that are the best fit for the business requirements of our
                        clients. We are committed to delivering quality and outstanding solutions to increase our client's business
                        value.
                    </p>
                </div>

                <div className="relative md:hidden">
                    <div
                        ref={sliderRef}
                        className="flex gap-4 pb-8 touch-pan-x"
                        style={{ willChange: "transform", WebkitOverflowScrolling: "touch" }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {workspaceImages.map((image, index) => (
                            <div
                                key={image.id}
                                ref={(el) => (slidesRef.current[index] = el)}
                                className="w-[85vw] flex-shrink-0 box-border"
                                style={{ maxWidth: "85vw" }}
                            >
                                <img
                                    src={image.src || "/placeholder.svg"}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover rounded-lg"
                                    style={{ display: "block", maxWidth: "100%" }}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 disabled:opacity-50"
                        disabled={currentIndex === 0}
                    >
                        ←
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 disabled:opacity-50"
                        disabled={currentIndex === workspaceImages.length - 1}
                    >
                        →
                    </button>
                </div>

                <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
                    {workspaceImages.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg">
                            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                        </div>
                    ))}
                </div>

                <div className="hidden lg:grid grid-cols-12 grid-rows-2 gap-4 h-auto lg:h-[500px] xl:h-[600px]">
                    <div className="col-span-4 row-span-1 overflow-hidden rounded-lg">
                        <img
                            src={workspaceImages[0].src || "/placeholder.svg"}
                            alt={workspaceImages[0].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-4 row-span-2 overflow-hidden rounded-lg">
                        <img
                            src={workspaceImages[1].src || "/placeholder.svg"}
                            alt={workspaceImages[1].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-4 row-span-1 overflow-hidden rounded-lg">
                        <img
                            src={workspaceImages[2].src || "/placeholder.svg"}
                            alt={workspaceImages[2].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
                        <img
                            src={workspaceImages[3].src || "/placeholder.svg"}
                            alt={workspaceImages[3].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
                        <img
                            src={workspaceImages[4].src || "/placeholder.svg"}
                            alt={workspaceImages[4].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-4 row-span-1 overflow-hidden rounded-lg">
                        <img
                            src={workspaceImages[5].src || "/placeholder.svg"}
                            alt={workspaceImages[5].alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}