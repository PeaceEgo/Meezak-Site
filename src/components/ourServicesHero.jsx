import CubeIcon from "../assets/icons/solar_box-bold.svg";

export default function OurServicesHero() {
    return (
        <section className="relative w-full h-[400px] flex flex-col items-center mt-20 justify-center overflow-hidden">
            
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: "linear-gradient(135deg, #061345 0%,#071856 100%)",
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                
                <div
                    className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30 "
                    style={{
                        top: "-40%",
                        left: "-60%",
                        width: "250px",
                        height: "250px",
                    }}
                />
                <div
                    className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30 "
                    style={{
                        top: "70%",
                        right: "-60%",
                        width: "250px",
                        height: "250px",
                    }}
                />

                <div className="mb-4 flex justify-center">
                    <div className="w-[64px] h-[64px] bg-gradient-to-r from-[#290359] to-[#5807BF] p-[3px] rounded-md shadow-lg flex items-center justify-center">
                        <div className="flex items-center justify-center w-full h-full bg-[#5807BF] rounded-md">
                            <img 
                            src={CubeIcon} 
                            alt="Cube Icon" 
                            className="w-10 h-10" />
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-[#CC5A71]">Our Cutting-Edge</span> <span className="text-white">Solutions</span>
                </h1>

                {/* Subtitle */}
                <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                    Have a project in mind? Need expert advice on web development, UI/UX, or digital solutions? We're here to
                    help!
                </p>
            </div>
        </section>
    )
}
