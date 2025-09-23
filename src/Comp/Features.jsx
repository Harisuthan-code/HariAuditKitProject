const features = [
  {
    icon: "🐞",
    title: "30+ Bug Methods",
    description: "Master real vulnerability patterns with clear explanations and code snippets.",
  },
  {
    icon: "📂",
    title: "3 Practice Contracts",
    description: "Sharpen your auditing skills with real-world style contracts designed for hands-on practice.",
  },
  {
    icon: "⚡",
    title: "Structured Learning",
    description: "Skip endless report/blog reading — follow a focused path to build strong foundations fast.",
  },
  {
    icon: "🔑",
    title: "Stand Out",
    description: "For developers: write safer contracts. For auditors: build the skills to move into competitive audits.",
  },
  {
    icon: "👀",
    title: "Preview Included",
    description: "Try before you buy: 5 bugs + 1 practice contract to see how the kit looks and feels.",
  },
  {
    icon: "✅",
    title: "Checklists Included",
    description: "Developer & Auditor yes/no checklists so you never skip critical security checks.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-20 px-6 md:px-12 min-h-screen bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="container mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          Features & Benefits
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Everything you need to learn smarter, save time, and build real bug-hunting skills.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {features.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full text-3xl mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-green-400">{title}</h3>
            <p className="text-gray-300 text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
