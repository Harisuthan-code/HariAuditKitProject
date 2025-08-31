const features = [
  {
    icon: "💡",
    title: "Real-World Examples",
    description: "Includes findings from actual smart contracts to help you learn from real scenarios.",
  },
  {
    icon: "📖",
    title: "Understand Bugs & Fixes",
    description: "Learn from real exploits and see how they were fixed in practice.",
  },
  {
    icon: "👨‍💻",
    title: "Developer Checklist",
    description: "Step-by-step questions to answer while building to avoid common smart contract bugs.",
  },
  {
    icon: "🔍",
    title: "Auditor Checklist",
    description: "Guided questions to help you systematically find vulnerabilities during audits.",
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
          Why HariAuditKit is the ultimate checklist for developers and auditors.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
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
