import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout"
import HomePage from "./pages/homePage"
import ContactUs from "./pages/contactUs"
import About from "./pages/about"

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<About/>} />
         
        </Route>
      </Routes>
    </Router>
  )
}

export default App
