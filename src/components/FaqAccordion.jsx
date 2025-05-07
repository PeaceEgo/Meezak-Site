import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import RightImage from "../assets/faq.jpg";


const faqData = [
    {
        question: "What services does Meezak Technologies Limited offer?",
        answer: "We design, develop, and deliver top-notch IT solutions including software development, web and mobile app development, IT consulting, digital transformation, and custom technology solutions tailored to meet your business needs."
    },
    {
        question: "Do you work with businesses of all sizes?",
        answer: "Yes, we partner with startups, small businesses, mid-sized companies, and large enterprises to deliver customized IT solutions that drive growth and efficiency."
    },
    {
        question: "How do I get started with Meezak Technologies?",
        answer: "Simply contact us through our website's contact form, email us at your email, or call your phone number. We will schedule a consultation to understand your requirements and propose the best solution."
    },
    {
        question: "How long does it take to complete a project?",
        answer: "Project timelines vary depending on the scope and complexity. After our initial consultation, we provide an estimated timeline tailored to your specific project."
    },
    {
        question: "Do you offer ongoing support after project completion?",
        answer: "Yes, we offer post-project support and maintenance packages to ensure your solution remains updated, secure, and functioning optimally."
    },
    {
        question: "Can you help modernize our existing systems?",
        answer: "Absolutely! We specialize in digital transformation services, helping businesses upgrade legacy systems to modern, efficient, and scalable solutions."
    },
    {
        question: "How much do your services cost?",
        answer: "Costs depend on the scope, features, and complexity of the project. We provide customized quotes after understanding your specific requirements."
    },
    {
        question: "Are your solutions scalable?",
        answer: "Yes, all our solutions are designed with scalability in mind, allowing your technology to grow with your business."
    },
    {
        question: "Do you work with clients outside Nigeria?",
        answer: "Yes, Meezak Technologies serves clients globally. We are equipped to handle remote projects and virtual collaboration efficiently."
    },
    {
        question: "Why should we choose Meezak Technologies?",
        answer: "We combine deep technical expertise with a client-first approach, delivering innovative and reliable IT solutions tailored to your business goals. Our commitment to quality, transparency, and support sets us apart."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We work across various industries including finance, healthcare, education, retail, logistics, and more. Our team adapts solutions to fit the unique needs of each sector."
    },
    {
        question: "Can you integrate new solutions with our current software?",
        answer: "Yes, we specialize in seamless system integration, ensuring that new solutions work efficiently with your existing tools and platforms."
    },
    {
        question: "Do you provide cloud solutions?",
        answer: "Yes, we offer cloud-based solutions including migration services, cloud infrastructure setup, and custom cloud application development."
    },
    {
        question: "How do you ensure the security of your solutions?",
        answer: "We implement industry best practices for security, including data encryption, secure coding, regular audits, and compliance with relevant regulations."
    },
    {
        question: "Can you develop both iOS and Android apps?",
        answer: "Yes, we offer cross-platform mobile app development for both iOS and Android, as well as native apps depending on your requirements."
    },
    {
        question: "Do you provide UI/UX design services?",
        answer: "Absolutely! Our design team creates user-friendly, visually appealing, and effective interfaces to enhance user experience and engagement."
    },
    {
        question: "Will I own the code and rights to the solution you build?",
        answer: "Yes, upon full payment, we transfer ownership rights and source code to our clients."
    },
    {
        question: "Can you handle urgent or fast-track projects?",
        answer: "Yes, we offer expedited services for projects that require faster delivery, depending on resource availability and project scope."
    },
    {
        question: "What technologies do you use?",
        answer: "We work with a wide range of technologies including but not limited to JavaScript, Python, PHP, .NET, React, Angular, Flutter, AWS, Azure, and Google Cloud."
    },
    {
        question: "Do you offer training for our team on the new solutions?",
        answer: "Yes, we provide training sessions and documentation to help your team effectively use and manage the new system."
    }
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
                                    className="rounded-lg shadow-md border-none"
                                >
                                    <AccordionTrigger
                                        className="text-2x1 font-medium text-[#071856] p-4 hover:no-underline border-none outline-none focus:outline-none focus:ring-0"
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
                        <div className="rounded-lg overflow-hidden h-[1345px] ">
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
