import { useNavigate, useLocation } from "react-router-dom";

const MicroAudit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="microaudit"
      className="bg-gray-900 text-white py-16 px-6 md:px-12"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">
          Micro Smart Contract Audit
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          A <strong>fast security review</strong> for small to medium contracts.
          Delivered within <strong>48 hours</strong>. This is NOT a full formal audit but
          a quick check to catch major vulnerabilities before mainnet
          deployment.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What’s Included</h3>
            <ul className="text-gray-400 space-y-2">
              <li>✔ Manual code review</li>
              <li>✔ Check common vulnerabilities</li>
              <li>✔ Actionable fixes in report</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What’s NOT Included</h3>
            <ul className="text-gray-400 space-y-2">
              <li>✖ Full formal audit</li>
              <li>✖ Gas optimization report</li>
              <li>✖ Extensive automated analysis</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Delivery</h3>
            <ul className="text-gray-400 space-y-2">
              <li>⏳ 48-72 hour turnaround</li>
              <li>✔ Pay only if bugs are found</li>
              <li>✔ Detailed PDF report</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => handleScroll("home")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Book a Micro Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default MicroAudit;
