import About from "./Comp/About.jsx";
import Contact from "./Comp/Contact.jsx";
import Footer from "./Comp/Footer.jsx";
import Hero from "./Comp/Hero.jsx";
import HowItWorks from "./Comp/HowItWorks.jsx";
import MicroAudit from "./Comp/MicroAudit.jsx";
import Navbar from "./Comp/Navbar.jsx";
import PortfolioPage from "./Comp/Portfolio.jsx";
import Privacy from "./Comp/Privacy.jsx";
import SubmitProject from "./Comp/SubmitProject.jsx";
import { Routes, Route } from "react-router-dom";
import Terms from "./Comp/TermsAndCondition.jsx";

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