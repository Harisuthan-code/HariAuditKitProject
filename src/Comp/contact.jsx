
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16 px-6 md:px-12 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8">
          For any enquiry or doubts, feel free to contact me via email or LinkedIn DM.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Email Button */}
          <a
            href="mailto:hari.auditservice@gmail.com"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md font-semibold transition duration-300"
          >
            Email Me
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/hari-suthan-01665433b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg shadow-md font-semibold transition duration-300"
          >
            LinkedIn DM
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
