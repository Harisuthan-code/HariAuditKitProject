const Terms = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12 max-w-4xl mx-auto"
          style={{ maxWidth: "100vw", marginLeft: 0, marginRight: 0, paddingTop: "6rem" }} // Added padding top
    
    >
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">Terms & Conditions</h1>
      <p className="text-gray-300 mb-4">
        By using our auditing services, you agree to the following terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">Service Scope</h2>
      <p className="text-gray-400 mb-4">
        We provide micro smart contract audits. The audit is a best-effort review and does not guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mb-2">Payment Policy</h2>
      <p className="text-gray-400 mb-4">
        For our micro-audit offer, you only pay if we find valid security issues in your contract.
      </p>

      <h2 className="text-xl font-semibold mb-2">Limitations</h2>
      <p className="text-gray-400 mb-4">
        We are not responsible for any damages, losses, or hacks that occur after the audit. Implementing fixes is your responsibility.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-gray-400">
        If you have any questions, email us at:
        <a href="mailto:youremail@example.com" className="text-indigo-400 ml-2">youremail@example.com</a>.
      </p>
    </section>
  );
};

export default Terms;
