import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div >
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;