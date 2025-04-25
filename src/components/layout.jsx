import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
    return (
        <div className="w-[100vw] flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
                
                <div className="fixed bottom-8 right-8 z-50">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19V5m0 0l-7 7m7-7l7 7"
                            />
                        </svg>
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
