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

          <p className="text-gray-300 mb-4 text-lg leading-relaxed">
            HariAuditKit is a practical learning guide for{" "}
            <span className="font-bold text-green-400">developers</span> and beginner-level{" "}
            <span className="font-bold text-green-400">auditors</span> who want to
            understand and prevent the most common smart contract bugs.
          </p>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            It covers <span className="font-bold text-blue-400">30+ real-world bugs</span>, 
            grouped into 10+ categories, with examples, code snippets, and short explanations. 
            The goal is simple: help developers start writing safer contracts and help new auditors 
            learn how bugs actually look in real projects.
          </p>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            By using HariAuditKit, you’ll build habits that make your contracts harder to break, 
            and you’ll train your eye to spot issues before they cost millions.
          </p>

          {/* Key Benefits */}
          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✅</span>
              <span>
                For Developers: Learn the mistakes to avoid and start writing safer contracts from day one.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✅</span>
              <span>
                For Beginner Auditors: Understand how real-world bugs appear and practice identifying them.
              </span>
            </li>
          </ul>

          {/* Bonus Section */}
          <div className="mt-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
            <h3 className="text-blue-400 text-xl font-semibold mb-2">
              Bonus: Yes/No Bug Checklists
            </h3>
            <p className="text-gray-300 mb-2">
              Includes simple yes/no questions you can ask yourself while 
              coding or auditing to avoid skipping critical checks.
            </p>
            <p className="text-gray-400 italic">
              Example: “Did I validate external calls?” → Yes / No
            </p>
          </div>

          <p className="mt-6 text-gray-300 font-semibold text-lg">
            Learn, prevent, and build safer smart contracts — with HariAuditKit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
