import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Landing/HomeApp";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioDetails from "./Pages/Portfolio/PortfolioDetails";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import ServiceDetails from "./Pages/Services/ServiceDetails";
function App() {
  const { pathname } = useLocation();

  return (
    <div className="w-full max-w-[100vw]">
      <ScrollToTop />
      <Navbar />
      <main
        key={pathname}
        className="animate-fade-in pt-[115px] max-[413px]:pt-[88px]"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}

export default App;
