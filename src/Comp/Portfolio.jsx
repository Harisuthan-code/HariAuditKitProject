
const audits = [
  { title: "Escrow Contract", high: 1, medium: 3, low: 0, link: "https://drive.google.com/file/d/1Ih2aOya9IAhq_jcMGH3xi5buCkXw3fk1/view?usp=drive_link" },
  { title: "Eggstravaganza", high: 1, medium: 0, low: 1, link: "https://drive.google.com/file/d/1GNi9XVz3fpgyipD1bg6wytsMqZ0F1ehD/view?usp=drive_link" },
  { title: "Bridge contract", high: 3, medium: 0, low: 1, link: "https://drive.google.com/file/d/1NY3fAEGLpkHVgaoDO-k-qcQUbEalso6H/view?usp=drive_link" },
  { title: "Proxy contract", high: 2, medium: 1, low: 3, link: "https://drive.google.com/file/d/1dan-cO2FVtd1T0A74xhdkNHMbc1I74Ev/view?usp=drive_link" },
  { title: "The-predicter Contract", high: 2, medium: 0, low: 1, link: "https://drive.google.com/file/d/1cQNQ0saiFfOv_iCOJY0MwMetkJc5oHiF/view?usp=drive_link" },
  { title: "(GivingThanks - Codehawks ", high: 1, medium: 0, low: 1, link: "https://drive.google.com/file/d/1lGdtj5yZsSto246GZol3YLRM8k-YfMlf/view?usp=drive_link" },
  { title: "CodeHawks Bug Bounty", high: 5, medium: 0, low: 2, link: "https://drive.google.com/file/d/13viM2ByZYxP1Ti7nODwxqmOFPiEI7-pB/view?usp=drive_link" },
];

const PortfolioPage = () => {
  const totalAudits = audits.length; // total cards
  const totalHigh = audits.reduce((sum, audit) => sum + audit.high, 0);
  const totalMedium = audits.reduce((sum, audit) => sum + audit.medium, 0);
  const totalLow = audits.reduce((sum, audit) => sum + audit.low, 0);
  const totalBugs = totalHigh + totalMedium + totalLow;

  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">Audit Portfolio</h1>
        <p className="text-gray-300 mb-6">
          A quick summary of my auditing work and bug bounty contributions.
        </p>

        {/* Summary Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-bold text-indigo-400">Total Smart Contracts</h3>
            <p className="text-3xl font-bold mt-2">{totalAudits}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-bold text-indigo-400">Total Bugs Found</h3>
            <p className="text-3xl font-bold mt-2">{totalBugs}</p>
            <p className="text-sm text-gray-400 mt-1">
              High: {totalHigh} | Medium: {totalMedium} | Low: {totalLow}
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {audits.map((audit, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-4">{audit.title}</h3>

            <div className="text-gray-300 text-sm mb-4 space-y-1">
              <p>
                <span className="text-red-400 font-bold">High:</span> {audit.high}
              </p>
              <p>
                <span className="text-yellow-400 font-bold">Medium:</span> {audit.medium}
              </p>
              <p>
                <span className="text-green-400 font-bold">Low:</span> {audit.low}
              </p>
            </div>

            <a
              href={audit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white text-center py-2 px-4 rounded-lg font-semibold transition duration-300"
            >
              View Report
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
