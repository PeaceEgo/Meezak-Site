import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import ChatIcon from "../assets/icons/chats.svg"
import emailjs from "@emailjs/browser";

export default function ContactHero() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
 // EmailJS send function
 emailjs
 .send(
   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID from .env
   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
   {
     firstName: formData.firstName,
     lastName: formData.lastName,
     email: formData.email,
     phone: formData.phone,
     message: formData.message,
   },
   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Public Key from .env
 )
 .then(
   (result) => {
     alert("Message sent successfully!");
     console.log(result.text);
     // Reset form after successful submission
     setFormData({
       firstName: "",
       lastName: "",
       email: "",
       phone: "",
       message: "",
     });
   },
   (error) => {
     alert("Failed to send message. Please try again.");
     console.log(error.text);
   }
 );
};

    return (
        <section className="w-[100vw] relative overflow-hidden bg-[#F5F6F5]">

            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061345] to-[#071856] z-0"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row md:flex-row items-center max-w-6xl mx-auto">

                    <div className="w-full lg:w-1/2 mt-20 lg:mb-0 text-white">
                        <div className="max-w-md">
                            <div
                                className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30 "
                                style={{
                                    top: "0%",
                                    left: "-5%",
                                    width: "200px",
                                    height: "200px",
                                }}
                            />
                            <div
                                className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30"
                                style={{
                                    top: "10%",
                                    right: "50%",
                                    width: "200px",
                                    height: "200px",
                                }}
                            />
                            <div
                                className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30"
                                style={{
                                    top: "80%",
                                    right: "50%",
                                    width: "200px",
                                    height: "200px",
                                }}
                            />
                            <div
                                className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30 "
                                style={{
                                    top: "80%",
                                    right: "0%",
                                    width: "200px",
                                    height: "200px",
                                }}
                            />
                            <div className="mb-10 flex justify-center sm:max-w-md sm:mx-auto lg:mb-10 lg:justify-start">
                                <div className="w-[64px] h-[64px] bg-gradient-to-r from-[#290359] to-[#5807BF] p-[3px] rounded-md shadow-lg flex items-center justify-center">
                                    <div className="flex items-center justify-center w-full h-full bg-[#5807BF] rounded-md">
                                        <img
                                            src={ChatIcon}
                                            alt="Message icon"
                                            className="w-10 h-10"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
                                <h2 className="text-4xl font-bold mb-6">
                                    <span className="text-[#CC5A71]">We'd love</span> to hear from you
                                </h2>

                                <p className="mb-10 text-white text-sm">
                                    Have a project in mind? Need expert advice on web development, UI/UX, or digital solutions? We're here
                                    to help!
                                </p>
                            </div>

                            {/* Phone Numbers */}
                            <div className="bg-gradient-to-r from-[#290359] to-[#5807BF] p-[3px] rounded-md shadow-lg mb-4">
                                <div
                                    className="rounded-md p-5"
                                    style={{
                                        background: "linear-gradient(249.14deg, #5807BF 0%, #290359 50.42%)",
                                        backdropFilter: "blur(200px)",
                                    }}
                                >
                                    <div className="flex items-center mb-3">
                                        <p className="text-sm text-blue-200">You can Call us on:</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-white mb-1">+ 234 810 546 6785</p>
                                            <p className="text-white">+ 234 810 546 6785</p>
                                        </div>
                                        <div className="bg-[#071856] rounded-full p-3">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email Addresses */}
                            <div className="bg-gradient-to-r from-[#290359] to-[#5807BF] p-[3px] rounded-md shadow-lg">
                                <div
                                    className="rounded-md p-5"
                                    style={{
                                        background: "linear-gradient(249.14deg, #5807BF 0%, #290359 50.42%)",
                                        backdropFilter: "blur(200px)",
                                    }}
                                >
                                    <div className="flex items-center mb-3">
                                        <p className="text-sm text-blue-200">You can Email us on:</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-white mb-1">info@meezaktechnologies.com</p>
                                            <p className="text-white">hello@meezaktechnologies.com</p>
                                        </div>
                                        <div className="bg-[#071856] rounded-full p-3">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Contact Form */}
                    <div className=" lg:w-1/2 mt-10 lg:mt-0">
                        <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto">
                            <h3 className="text-xl font-bold text-blue-900 mb-1">Reach Out To Us</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                You can reach out with this details from anywhere in the world
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2  bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message here..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-center item-center">
                                    <button
                                        type="submit"
                                        className=" w-1/2 bg-[#071856] hover:bg-blue-800 text-white font-medium py-3 px-3 rounded-lg transition duration-300"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
