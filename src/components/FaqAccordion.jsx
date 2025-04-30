import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import RightImage from "../assets/faq.jpg";


const faqData = [
    {
        question: "I have an idea of an App, But I don't know what to do?",
        answer:
            "First, you need a Business Analyst and you need us. We offer the service of Business Analysis (Needs) you have to pay for it separately. After Analyzing your Business, then you need to build a Demo or a Prototype. You can use the Demo to get investors prior the actual building of the System",
    },
    {
        question: "I have an idea of an App, But I don't know what to do?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
        question: "I have an idea of an App, But I don't know what to do?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
        question: "I have an idea of an App, But I don't know what to do?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
        question: "I have an idea of an App, But I don't know what to do?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
        question: "I have an idea of an App, But I don't know what to do?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
];

export default function FAQAccordion() {
    return (
        <div className="py-16 px-4 md:px-8" style={{ backgroundColor: "#F5F6F5" }} id="faq">
            <div className="max-w-7xl mx-auto">
                <div className="inline-block mb-4 flex justify-center items-center">
                    <span
                        className="inline-block px-3 py-1 text-sm font-medium rounded-full text-[#071856]"
                        style={{
                            background: "rgba(140, 125, 160, 0.69)",
                            borderRadius: "15px",
                        }}
                    >
                        FAQs
                    </span>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#071856]">
                        Our Common and Frequently Questions
                        <br />
                        Answered for Convenience
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto">
                    {/* accordion */}
                    <div className="w-full lg:w-1/2">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-lg shadow-md border-none"
                                >
                                    <AccordionTrigger
                                        className="text-2x1 font-medium text-[#071856] p-4 hover:no-underline focus:outline-none focus:ring-0"
                                    >
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#071856] p-4 pt-0 text-sm">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Right side  */}
                    <div className="hidden lg:block w-full lg:w-1/2">
                        <div className="rounded-lg overflow-hidden h-[400px] ">
                            <img
                                src={RightImage}
                                alt="FAQ Illustration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
