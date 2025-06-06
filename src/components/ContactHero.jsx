import { useState, useEffect } from "react"
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
    const [isFormValid, setIsFormValid] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePhone = (phone) => {
        if (!phone.trim()) return true
        const cleanPhone = phone.replace(/\D/g, '')
        if (phone.startsWith('+')) {
            return cleanPhone.length >= 10 
        }
        return cleanPhone.length === 11
    }

    useEffect(() => {
        const isValid =
            formData.firstName.trim() !== "" &&
            formData.lastName.trim() !== "" &&
            formData.email.trim() !== "" &&
            validateEmail(formData.email) &&
            validatePhone(formData.phone) &&
            formData.message.trim() !== ""
        setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid) return

        setIsLoading(true)
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setModalMessage("Thank you for reaching out! We will get back to you soon.")
                    setModalVisible(true)
                    console.log(result.text)
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                    })
                },
                (error) => {
                    setModalMessage("Failed to send message. Please try again.")
                    setModalVisible(true)
                    console.log(error.text)
                }
            )
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <section className="w-[100vw] relative overflow-hidden bg-[#F5F6F5]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#061345] to-[#071856] z-0"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row md:flex-row items-center max-w-6xl mx-auto">
                    <div className="w-full lg:w-1/2 mt-20 lg:mb-0 text-white">
                        <div className="max-w-md">
                            <div
                                className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30"
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
                                className="absolute blur-xl rounded-full lg:bg-purple-600 opacity-30"
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
                            <div className="bg-gradient-to-r from-[#290359] to-[#5807BF] p-[1px] rounded-md shadow-lg mb-4">
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
                            <div className="bg-gradient-to-r from-[#290359] to-[#5807BF] p-[1px] rounded-md shadow-lg">
                                <div
                                    className="rounded-sm p-5"
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
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <div className="bg-white rounded-sm p-8 shadow-lg max-w-lg mx-auto">
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
                                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                            className={`w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.email && !validateEmail(formData.email) ? 'border-red-500' : ''
                                                }`}
                                            required
                                        />
                                        {formData.email && !validateEmail(formData.email) && (
                                            <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.phone && !validatePhone(formData.phone) ? 'border-red-500' : ''
                                                }`}
                                        />
                                        {formData.phone && !validatePhone(formData.phone) && (
                                            <p className="text-red-500 text-xs mt-1">Phone must be 11 digits or start with country code</p>
                                        )}
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
                                        disabled={!isFormValid || isLoading}
                                        className={`w-[120px] font-medium py-3 px-3 rounded-lg transition focus:outline-none duration-300 ${isFormValid
                                                ? 'bg-[#071856] hover:bg-blue-800 text-white'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg z-10 flex flex-col items-center justify-center">
                        <p className="text-lg font-semibold mb-4">{modalMessage}</p>
                        <button
                            onClick={() => setModalVisible(false)}
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}