import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import OurWork from "./pages/OurWorks";
import OurTeam from "./pages/OurTeam";
import OurServices from "./pages/OurServicesPage";
import ScrollToTop from "./components/ScrollToTop";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<OurWork />} />
          <Route path="ourTeam" element={<OurTeam />} />
          <Route path="services" element={<OurServices />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;