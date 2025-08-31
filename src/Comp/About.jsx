


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
            HariAuditKit is a practical guide for <span className="font-bold text-green-400">developers</span> and beginner auditors to write and audit smart contracts safely.
          </p>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            It includes <span className="font-bold text-blue-400">30+ common smart contract bugs</span>, categorized into 10+ key categories, with real-world examples, code snippets, and yes/no checklists to help you systematically avoid mistakes.
          </p>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Whether you are a developer or an aspiring auditor, HariAuditKit helps you:
          </p>

          {/* Key Benefits */}
          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✅</span>
              <span>Write safer contracts: Learn to prevent common bugs while developing smart contracts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✅</span>
              <span>Audit confidently: Beginner auditors can spot 30+ common bugs across 10+ categories without missing anything.</span>
            </li>
          
          </ul>

          {/* Bonus Section */}
          <div className="mt-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
            <h3 className="text-blue-400 text-xl font-semibold mb-2">Bonus Section:</h3>
            <p className="text-gray-300 mb-2">
              checklists for both developers and auditors.
            </p>
            <p className="text-gray-400 italic">
              A quick reference to ensure nothing is missed while developing or auditing contracts.
            </p>
          </div>

          <p className="mt-6 text-gray-300 font-semibold text-lg">
            Build, audit, and secure smart contracts like a pro — with HariAuditKit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
