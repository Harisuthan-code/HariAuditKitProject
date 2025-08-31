import { useState } from "react";

const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (section) => {
    setIsOpen(false);

    const el = document.getElementById(section);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "buy", label: "Buy" },
    { id: "contact", label: "Contact" },
    { id: "terms", label: "Terms & Conditions" },
    { id: "refund", label: "Refund Policy" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-blue-400 tracking-tight">HariAuditKit</h1>
          <span className="text-sm text-gray-400 hidden sm:inline">Smart Contract Security</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-6 space-y-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left text-white hover:text-blue-400 font-semibold py-2 border-b border-gray-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
