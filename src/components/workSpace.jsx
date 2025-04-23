
import { useRef, useEffect } from "react"
import office1 from "../assets/w1.svg"
import office2 from "../assets/w2.svg"
import office3 from "../assets/w3.svg"
import office4 from "../assets/w4.svg"
import office5 from "../assets/w5.svg"
import office6 from "../assets/w6.svg"

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
]

export default function WorkspaceGallery() {
    const sliderRef = useRef(null)

    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        let isDown = false
        let startX
        let scrollLeft

        const handleMouseDown = (e) => {
            isDown = true
            slider.classList.add("cursor-grabbing")
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        }

        const handleMouseLeave = () => {
            isDown = false
            slider.classList.remove("cursor-grabbing")
        }

        const handleMouseUp = () => {
            isDown = false
            slider.classList.remove("cursor-grabbing")
        }

        const handleMouseMove = (e) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 2
            slider.scrollLeft = scrollLeft - walk
        }

        const handleTouchStart = (e) => {
            isDown = true
            startX = e.touches[0].pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        }

        const handleTouchMove = (e) => {
            if (!isDown) return
            const x = e.touches[0].pageX - slider.offsetLeft
            const walk = (x - startX) * 2
            slider.scrollLeft = scrollLeft - walk
        }

        slider.addEventListener("mousedown", handleMouseDown)
        slider.addEventListener("mouseleave", handleMouseLeave)
        slider.addEventListener("mouseup", handleMouseUp)
        slider.addEventListener("mousemove", handleMouseMove)

        slider.addEventListener("touchstart", handleTouchStart)
        slider.addEventListener("touchend", handleMouseUp)
        slider.addEventListener("touchmove", handleTouchMove)

        return () => {
            slider.removeEventListener("mousedown", handleMouseDown)
            slider.removeEventListener("mouseleave", handleMouseLeave)
            slider.removeEventListener("mouseup", handleMouseUp)
            slider.removeEventListener("mousemove", handleMouseMove)

            slider.removeEventListener("touchstart", handleTouchStart)
            slider.removeEventListener("touchend", handleMouseUp)
            slider.removeEventListener("touchmove", handleTouchMove)
        }
    }, [])

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
                    className="md:hidden flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory cursor-grab scrollbar-hide"
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
    )
}
