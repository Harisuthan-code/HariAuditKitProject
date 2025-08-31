import productImage from "../../public/images/Product image.png";

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
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 tracking-wide">
            Get HariAuditKit
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Learn & prevent <span className="text-green-400 font-semibold">30+ smart contract bugs</span> 
            with a product based on real-world contracts and practical experience.
          </p>

          {/* Who it's for / not for */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-2 tracking-wide">Who It's For:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Developers:</strong> Use it while developing to avoid common bugs.</li>
                <li><strong>Beginner Auditors:</strong> Learn common bugs that happened in real-world contracts instead of spending multiple hours searching.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2 tracking-wide">Who It's Not For:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Experienced Auditors:</strong> If you already audit multiple contracts and participate in competitions, most of this may already be familiar.</li>
                <li><strong>Complete Beginners:</strong> If you are entirely new to blockchain or Solidity, this may feel challenging. Best to grasp basic Solidity first.</li>
              </ul>
            </div>
          </div>

          {/* Price */}
          <div className="text-4xl md:text-5xl font-bold text-white mt-10 tracking-wide">
            $25 <span className="text-gray-400 text-lg font-normal">USD</span>
          </div>

          {/* CTA Button */}
          <button
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 mt-4"
          >
            Buy Now
          </button>
        </div>

        {/* Right: Product Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-72 md:w-96 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
            <img
              src={productImage}
              alt="HariAuditKit PDF"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
