import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-40 px-10 md:px-12 bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
          Customer Support
        </h2>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Have any questions or trouble while using HariAuditKit? You can 
          <span className="text-green-400 font-semibold"> email me </span> or 
          <span className="text-blue-400 font-semibold"> DM me on LinkedIn</span>. 
          I respond within 24 hours to ensure you get support quickly.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          {/* Email Button */}
          <a
            href="mailto:codehari662@gmail.com"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg font-semibold transition duration-300"
          >
            <FaEnvelope /> Email
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/hari-suthan-01665433b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl shadow-lg font-semibold transition duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
