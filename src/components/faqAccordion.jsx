"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import RightImage from "../assets/faq.svg"

// FAQ data
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
]

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Small FAQs title */}
                <div className="text-center mb-4">
                    <h3 className="text-sm font-medium uppercase text-blue-900">FAQs</h3>
                </div>

                {/* Main title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900">
                        Our Common and Frequently Questions
                        <br />
                        Answered for Convenience
                    </h2>
                </div>

                {/* Content container */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Left side - Accordion */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                                    <button
                                        className="flex justify-between items-center w-full p-4 text-left font-medium text-blue-900"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span>{item.question}</span>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-blue-900" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-blue-900" />
                                        )}
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Image (only visible on desktop) */}
                    <div className="hidden lg:block w-full lg:w-1/2">
                        <div className="rounded-lg overflow-hidden h-full">
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
    )
}
