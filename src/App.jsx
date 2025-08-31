import About from "./Comp/About.jsx";
import Features from "./Comp/Features.jsx";
import Contact from "./Comp/Contact.jsx";
import Footer from "./Comp/Footer.jsx";
import Hero from "./Comp/Hero.jsx";
import Navbar from "./Comp/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Terms from "./Comp/TermsAndCondition.jsx";
import BuySection from "./Comp/Buy Section.jsx";
import RefundPolicy from "./Comp/Refund.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Features />
            <BuySection/>
            <Contact />
            <Terms/>
            <RefundPolicy />
          </>
        } />

      </Routes>

      <Footer />


      </>
  );
}

export default App;