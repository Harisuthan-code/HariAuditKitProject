const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 relative z-10">
        {/* About Product Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            About HariAuditKit
          </h2>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            time-saving learning kit for{" "}
            <span className="font-bold text-green-400">developers</span> and beginner{" "}
            <span className="font-bold text-green-400">auditors</span> who want a
            strong foundation in smart contract security — without wasting months
            reading scattered blogs and reports.
          </p>

          {/* Key Features */}
          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✨</span>
              <span>
                <span className="font-bold text-blue-400">30+ proven bug methods</span> explained simply with code and examples.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✨</span>
              <span>
                <span className="font-bold text-blue-400">3 practical contracts</span> to sharpen your real-world auditing skills.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✨</span>
              <span>
                <span className="font-bold text-blue-400">Preview included:</span> 5 bugs + 1 practice contract (see before you buy).
              </span>
            </li>
          </ul>

          {/* Value Proposition */}
          <div className="mt-6 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
            <h3 className="text-blue-400 text-xl font-semibold mb-2">
              Why HariAuditKit?
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-bold">For Developers:</span> Start writing safer
              contracts, gain bug knowledge, and stand out as someone who truly
              understands vulnerabilities.
            </p>
            <p className="text-gray-300">
              <span className="font-bold">For Beginner Auditors:</span> Build a
              strong, structured foundation and move toward competitive audits faster —
              without endless report reading.
            </p>
          </div>

          <p className="mt-6 text-gray-300 font-semibold text-lg">
            Learn smarter, save time, and build a bug-hunter’s mindset — with HariAuditKit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
