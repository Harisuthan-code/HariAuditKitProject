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

      {/* Subtle blur/fade overlay */}
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
        Learn & Prevent <span className="text-green-400 font-semibold">30+ Smart Contract Bugs</span> <br />
        With <span className="text-blue-400 font-semibold">Checklists for Developers & Auditors</span>
      </h2>

      {/* CTA */}
      <div className="flex flex-col items-center gap-3">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 flex items-center gap-2 tracking-wide"
        >
          Get Now <span className="text-xl">📄</span>
        </button>
        <span className="text-gray-300 text-sm drop-shadow">
          Instant download • Actionable & ready to use ✅
        </span>
      </div>
    </section>
  );
};

export default Hero;
