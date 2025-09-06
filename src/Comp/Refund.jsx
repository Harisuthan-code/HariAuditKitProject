const RefundPolicy = () => {
  return (
    <section
      id="refund"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white"
    >
      {/* Background subtle separation */}
      <div className="absolute inset-0 bg-gray-950 -z-10"></div>

      <div className="max-w-3xl mx-auto text-left relative z-10 bg-gray-900 p-8 md:p-12 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          Refund & Support Policy
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Due to the nature of digital products, <strong>we do not provide refunds once the PDF has been downloaded</strong>.  
          However, if you face any issues accessing or using HariAuditKit, please contact us and <span className="text-green-400 font-semibold">we will assist you promptly to solve the problem</span>.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Your satisfaction and smooth experience are important to us. Reach out at <a href="mailto:codehari662@gmail.com" className="text-green-400 underline">codehari662@gmail.com</a> and we’ll help resolve any issues within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
