import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-4">
        {/* Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} HariAuditKit. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/hari-suthan-01665433b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:codehari662@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
