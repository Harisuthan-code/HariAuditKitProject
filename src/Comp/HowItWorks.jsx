
const steps = [
  {
    step: "1️⃣ Share Your Code",
    description: "Send your smart contract code via email",
  },
  {
    step: "2️⃣ I Review & Audit",
    description: "Manual security review to catch critical vulnerabilities.",
  },
  {
    step: "3️⃣ Get Report in 48 - 72 Hours",
    description: "Receive a detailed PDF report with fixes and recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-800 text-white py-16 px-6 md:px-12">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">
          How It Works
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          A simple and transparent process to secure your smart contract quickly.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ step, description }, idx) => (
          <div
            key={idx}
            className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-400">{step}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
