import HourglassIcon from "../assets/sandtimer.svg";
import LockIcon from "../assets/secured.svg";
import DollarIcon from "../assets/cash.svg";
import GlobeIcon from "../assets/globe.svg";

const cardsData = [
    {
        title: "Quality Service",
        description:
            "Meezak Technologies is a registered startup IT Consulting Company registered in Nigeria, West Africa but operating globally.",
        bgColor:"bg-card-1",
        textColor: "text-white",
        icon: HourglassIcon,
    },
    {
        title: "Secured Solution",
        description:
            "Meezak Technologies is a registered startup IT Consulting Company registered in Nigeria, West Africa.",
        bgColor: "bg-card-2",
        textColor: "text-gray-800",
        icon: LockIcon,
    },
    {
        title: "Affordable Costing",
        description:
            "Meezak Technologies is a registered startup IT Consulting Company registered in Nigeria, West Africa.",
        bgColor: "bg-card-3",
        textColor: "text-white",
        icon: DollarIcon,
    },
    {
        title: "Enhanced Online Presence",
        description:
            "Meezak Technologies is a registered startup IT Consulting Company registered in Nigeria, West Africa but operating globally.",
        bgColor: "bg-card-4",
        textColor: "text-white",
        icon: GlobeIcon,
    },
];

function Card({ title, description, bgColor, textColor, icon }) {
    return (
        <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-md flex flex-col justify-between h-[220px] relative`}>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
            <div className="flex justify-end absolute bottom-0 right-0 ">
                <img
                    src={icon}
                    alt={`${title} icon`}
                   
                    className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] object-contain"
                />
            </div>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <div className="w-[100vw] px-4 py-12 bg-white">
            <div className="text-center mb-10">
                <div className="inline-block mb-4">
                    <span
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full"
                        style={{
                            background: "rgba(140, 125, 160, 0.23)",
                            color: "#071856",
                            borderRadius: "15px",
                        }}
                    >
                        WHY CHOOSE US
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-[#071856] mt-2">
                    Many Reasons to Trust <br />
                    Us for your Digital Solutions
                </h2>
                <p className="mt-4 text-[#071856] text-sm max-w-3xl mx-auto">
                    Our Core aim is focused on developing solutions that are the best fit for the business requirements of our
                    clients. We are committed to delivering quality and outstanding solutions to increase our client's business
                    value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="md:col-span-7">
                    <Card {...cardsData[0]} />
                </div>

                {/* Card 2 */}
                <div className="md:col-span-5">
                    <Card {...cardsData[1]} />
                </div>

                {/* Card 3 */}
                <div className="md:col-span-5">
                    <Card {...cardsData[2]} />
                </div>

                {/* Card 4 */}
                <div className="md:col-span-7">
                    <Card {...cardsData[3]} />
                </div>
            </div>
        </div>
    );
}
