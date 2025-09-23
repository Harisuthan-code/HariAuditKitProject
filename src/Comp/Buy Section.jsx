import productImage from "../../public/images/Product image.webp";

const BuySection = () => {
  return (
    <section
      id="buy"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-start md:space-x-12 relative z-10">
        {/* Left: Content */}
        <div className="flex-1 text-left mb-10 md:mb-0 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 tracking-wide">
            Get HariAuditKit
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Learn & prevent{" "}
            <span className="text-green-400 font-semibold">30+ smart contract bugs</span>{" "}
            with a structured kit built from real-world vulnerabilities and practical
            auditing experience.
          </p>

          {/* What’s Inside */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 space-y-3 shadow-md">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              What You’ll Get
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>30+ bug methods explained with code and fixes</li>
              <li>3 practical contracts for hands-on auditing</li>
              <li>Developer & Auditor checklists (yes/no guides)</li>
              <li>Free preview: 5 bugs + 1 practice contract</li>
              <li>Lifetime updates — one-time payment</li>
            </ul>
          </div>

          {/* Who it's for / not for */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2 tracking-wide">
                ✅ Who It’s For
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>
                  <strong>Developers:</strong> Write safer contracts & stand out with bug knowledge.
                </li>
                <li>
                  <strong>Beginner Auditors:</strong> Build a strong foundation and move toward competitive audits faster.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2 tracking-wide">
                ❌ Who It’s Not For
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>
                  <strong>Experienced Auditors:</strong> Already familiar with most of these patterns.
                </li>
                <li>
                  <strong>Absolute Beginners:</strong> If you’ve never touched Solidity, learn basics first.
                </li>
              </ul>
            </div>
          </div>

          {/* Price Section */}
          <div className="mt-10 space-y-2">
            <div className="text-gray-400 text-lg line-through">LKR 5,100.00</div>
            <div className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              LKR 3,100.00 <span className="text-gray-400 text-lg font-normal">USD</span>
            </div>

            {/* Discount Notice */}
            <div className="mt-2 text-gray-300 text-sm md:text-base space-y-1">
              <p>
                🎉 First 10 buyers get a{" "}
                <span className="text-green-400 font-semibold">discount</span>
              </p>
              <div className="inline-block bg-gray-800 text-green-400 font-bold px-3 py-1 rounded-lg border border-gray-700 mt-1">
                Use code: <span className="uppercase">EARLY10</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-2">
              One-time purchase · Lifetime access · Free updates
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://hariauditkit.lemonsqueezy.com/buy/1461b985-7339-4fc3-915e-7129fd1231e6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 mt-4 text-center"
          >
            Get Now
          </a>
        </div>

        {/* Right: Product Image + Preview Button */}
        <div className="flex-1 flex flex-col items-center md:items-end mt-10 md:mt-0 space-y-6">
          <div className="w-72 md:w-96 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <img
              src={productImage}
              alt="HariAuditKit PDF"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Preview Download Button BELOW image */}
          <a
            href="https://drive.google.com/file/d/1XbgOQmV6LTQ-Fghc3-gpNJcKABfWtvsI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
          >
            📥 Download Free Preview
          </a>
        </div>
      </div>
    </section>
  );
};

export default BuySection;

