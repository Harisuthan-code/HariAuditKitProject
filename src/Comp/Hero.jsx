import backgroundImage from "../../public/images/Background image.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Strong dark overlay with slight gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 -z-10"></div>
      <div className="absolute inset-0 backdrop-blur-sm -z-10"></div>

      {/* Top Head */}
      <h3 className="text-sm md:text-base text-green-400 font-semibold uppercase tracking-widest mb-2 drop-shadow-lg">
        Smart Contract Security Toolkit
      </h3>

      {/* Brand Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-2xl">
        <span className="text-blue-400">Hari</span>
        <span className="ml-2">AuditKit</span>
      </h1>

      {/* Tagline */}
      <h2 className="text-lg md:text-2xl font-medium text-gray-200 mb-8 max-w-3xl leading-relaxed tracking-wide drop-shadow-lg">
        Prevent <span className="text-green-400 font-semibold">30+ Smart Contract Bugs</span> <br />
        Learn faster with <span className="text-blue-400 font-semibold">Checklists & Practice Contracts</span>
      </h2>

      {/* CTA */}
      <div className="flex flex-col items-center gap-3">
        {/* Main Buy Button */}
        <a
          href="https://hariauditkit.lemonsqueezy.com/buy/1461b985-7339-4fc3-915e-7129fd1231e6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 text-center"
        >
          Get Full Kit – $9.99 <span className="line-through text-gray-300 ml-1">$16.99</span>
        </a>

        {/* Secondary CTA (Preview) */}
        <a
          href="https://drive.google.com/file/d/1XbgOQmV6LTQ-Fghc3-gpNJcKABfWtvsI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
        >
          📥 Free Preview (5 Bugs + 1 Contract)
        </a>

        {/* Discount Code Box */}
        <div className="mt-2 text-gray-300 text-sm md:text-base flex items-center gap-2">
          <span>First 10 Buyers - Use code:</span>
          <div className="inline-block bg-gray-800 text-green-400 font-bold px-3 py-1 rounded-lg border border-gray-700">
            EARLY10
          </div>
        </div>

        <span className="text-gray-300 text-sm drop-shadow mt-1">
          Instant download • Actionable & ready to use ✅
        </span>
      </div>
    </section>
  );
};

export default Hero;
