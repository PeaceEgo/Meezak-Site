import { useState, useEffect, useRef } from "react";
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

    // Detect mobile view
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    // Handle touch events to update currentIndex
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        sliderRef.current?.setAttribute("data-touchstart", touchDown.toString());
    };

    const handleTouchMove = (e) => {
        if (!sliderRef.current) return;

        const touchStart = Number(sliderRef.current.getAttribute("data-touchstart") || 0);
        const currentTouch = e.touches[0].clientX;
        const diff = touchStart - currentTouch;

        if (diff > 5) {
            setCurrentIndex((prev) => Math.min(prev + 1, workspaceImages.length - 1));
        } else if (diff < -5) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }

        sliderRef.current.removeAttribute("data-touchstart");
    };

    // Smooth scrolling based on currentIndex
    useEffect(() => {
        if (sliderRef.current && isMobile) {
            const itemWidth = sliderRef.current.querySelector("div").offsetWidth;
            sliderRef.current.scrollTo({
                left: currentIndex * itemWidth,
                behavior: "smooth",
            });
        }
    }, [currentIndex, isMobile]);

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

                <div
                    ref={sliderRef}
                    className="md:hidden flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {workspaceImages.map((image) => (
                        <div key={image.id} className="min-w-[85%] snap-center">
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                    ))}
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