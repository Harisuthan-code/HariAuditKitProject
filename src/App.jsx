import About from "./Comp/About";
import Contact from "./Comp/Contact";
import Footer from "./Comp/Footer";
import Hero from "./Comp/Hero";
import HowItWorks from "./Comp/HowItWorks";
import MicroAudit from "./Comp/MicroAudit";
import Navbar from "./Comp/Navbar";
import PortfolioPage from "./Comp/Portfolio";
import Privacy from "./Comp/Privacy";
import SubmitProject from "./Comp/SubmitProject";
import { Routes, Route } from "react-router-dom";
import Terms from "./Comp/Terms and condition";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <MicroAudit />
            <HowItWorks />
            <Contact />
          </>
        } />
        <Route path="/submit-project" element={<SubmitProject />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>

                  <Footer />


      </>
  );
}

export default App;