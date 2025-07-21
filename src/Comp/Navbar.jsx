import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAVBAR_HEIGHT = 64; // adjust if your navbar height differs

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (section) => {
    setIsOpen(false); // Close mobile menu on link click

    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/", { replace: false });

      setTimeout(() => {
        window.scrollTo(0, 0); // jump to top immediately

        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 50);
      }, 150);
    } else {
      // Already on home
      window.scrollTo(0, 0); // jump to top immediately

      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-indigo-400">Hari Audit</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li>
            <button onClick={() => handleScroll("home")} className="hover:text-indigo-400">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")} className="hover:text-indigo-400">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("microaudit")} className="hover:text-indigo-400">
              Micro Audit
            </button>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-indigo-400">
              Portfolio
            </Link>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")} className="hover:text-indigo-400">
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-6 space-y-4">
          <button
            onClick={() => handleScroll("home")}
            className="block w-full text-left text-white hover:text-indigo-400 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="block w-full text-left text-white hover:text-indigo-400 font-semibold"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("microaudit")}
            className="block w-full text-left text-white hover:text-indigo-400 font-semibold"
          >
            Micro Audit
          </button>
          <Link
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className="block w-full text-left text-indigo-400 font-semibold"
          >
            Portfolio
          </Link>
          <button
            onClick={() => handleScroll("contact")}
            className="block w-full text-left text-white hover:text-indigo-400 font-semibold"
          >
            Contact
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
