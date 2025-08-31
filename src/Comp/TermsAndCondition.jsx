const Terms = () => {
  return (
    <section
      id="terms"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10 bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">Terms & Conditions</h1>

        <p className="text-gray-300 mb-4 leading-relaxed">
          By purchasing <span className="font-semibold text-green-400">HariAuditKit</span>, you agree that this content is provided for <strong>educational purposes only</strong>. Redistribution, resale, or sharing of the PDF in any form is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-400">Service Scope</h2>
       <p className="text-gray-400 mb-4 leading-relaxed">
  HariAuditKit is a practical toolkit for developers and auditors. Developers can use it to learn and avoid common smart contract bugs, while auditors can reference real-world examples and checklists to spot issues efficiently. This guide is designed for learning and improving your skills—it should be used as a helpful tool while developing or auditing contracts, not as a replacement for your own judgment or professional audits.
</p>


        <h2 className="text-xl font-semibold mb-2 text-indigo-400">Payment & Refund Policy</h2>
        <p className="text-gray-400 mb-4 leading-relaxed">
          Payments are securely processed via LemonSqueezy and Stripe. Refunds are <strong>not provided</strong> once the PDF is downloaded. If you encounter issues accessing the file, contact us and we will promptly assist you.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-indigo-400">User Responsibility</h2>
        <p className="text-gray-400 mb-4 leading-relaxed">
  HariAuditKit is designed to help you learn and improve your skills. While we share practical examples and checklists, it’s up to you to apply them thoughtfully when developing or auditing contracts. Use this guide as a supportive toolkit to write safer code and spot common issues more confidently.
</p>


        <h2 className="text-xl font-semibold mb-2 text-indigo-400">Contact</h2>
        <p className="text-gray-400 leading-relaxed">
          For questions or support, please contact us via email: 
          <a href="mailto:codehari662@gmail.com" className="text-green-400 ml-2 underline">
            codehari662@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Terms;
