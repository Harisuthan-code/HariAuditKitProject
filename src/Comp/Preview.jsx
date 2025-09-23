const PreviewSection = () => {
  return (
    <section
      id="preview"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
          Free Preview — Try Before You Buy
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
          Get a <span className="font-bold text-green-400">free preview</span> of{" "}
          <span className="text-blue-400">5 bugs</span> +{" "}
          <span className="text-blue-400">1 practice contract</span> to see exactly
          how HariAuditKit looks inside before you decide to grab the full version.
        </p>

        {/* Download Button */}
        <a
          href="https://drive.google.com/file/d/1XbgOQmV6LTQ-Fghc3-gpNJcKABfWtvsI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
        >
          📥 Download Free Preview
        </a>
      </div>
    </section>
  );
};

export default PreviewSection;
