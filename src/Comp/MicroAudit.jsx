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
          Full Smart Contract Audit
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          A <strong>comprehensive security audit</strong> tailored for small to medium
          smart contracts. We manually review your code to uncover vulnerabilities
          and provide clear, actionable fixes. Delivery time depends on code complexity
          and length, usually within <strong>3 to 7 days</strong>.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What’s Included</h3>
            <ul className="text-gray-400 space-y-2">
              <li>✔ Full manual code review</li>
              <li>✔ Business logic & edge-case analysis</li>
              <li>✔ Common & advanced vulnerability checks</li>
              <li>✔ PDF report with severity-tagged findings</li>
              <li>✔ Remediation guidance</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What’s NOT Included</h3>
            <ul className="text-gray-400 space-y-2">
              <li>✖ Audits for complex protocols (yet)</li>
              <li>✖ Formal verification</li>
              <li>✖ Deep gas optimization</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Delivery</h3>
            <ul className="text-gray-400 space-y-2">
              <li>⏳ Typically 3–7 days (depends on code size & complexity)</li>
              <li>✔ Flexible slot booking</li>
              <li>✔ Pay only if bugs are found</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => handleScroll("home")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Book a Full Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default MicroAudit;
