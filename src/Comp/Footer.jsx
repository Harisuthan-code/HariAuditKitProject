import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left: Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Hari Audit. All Rights Reserved.
        </p>

        {/* Center: Links */}
        <div className="flex space-x-6 text-sm">
          <Link to="/privacy" className="hover:text-indigo-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-indigo-400">
            Terms & Conditions
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/hari-suthan-01665433b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:hari.auditservice@gmail.com"
            className="hover:text-indigo-400"
          >
            <MdEmail />
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
