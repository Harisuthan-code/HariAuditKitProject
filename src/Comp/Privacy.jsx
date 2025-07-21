const Privacy = () => {
  return (
    <section
      className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12"
      style={{ maxWidth: "100vw", marginLeft: 0, marginRight: 0, paddingTop: "6rem" }} // Added padding top
    >
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">Privacy Policy</h1>
      <p className="text-gray-300 mb-4">
        Your privacy is important to us. This policy explains how we handle any personal information you share.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="text-gray-400 mb-4">
        We may collect your name, email, and project details only when you submit a project for auditing.
      </p>

      <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="text-gray-400 mb-4">
        We use the provided details solely to review your smart contract and communicate with you regarding the audit.
      </p>

      <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
      <p className="text-gray-400 mb-4">
        Your data will never be shared with third parties. We implement measures to keep your information secure.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-gray-400">
        For any questions about this policy, contact us at:
        <a href="mailto:youremail@example.com" className="text-indigo-400 ml-2">
          youremail@example.com
        </a>.
      </p>
    </section>
  );
};

export default Privacy;
