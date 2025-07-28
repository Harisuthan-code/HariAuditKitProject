import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-indigo-400">Hari</span>
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-6">
        Smart Contract Auditor | Secure Your Web3 Launch
      </h2>
      <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed">
        I help founders and teams secure their smart contracts before going live. <br />
        Offering <span className="font-bold text-indigo-400">full audits</span> for{" "}
        <span className="font-bold text-indigo-400">small & medium Web3 projects</span> — clear reports, critical bug detection, and launch-ready code.
      </p>

      <Link to="/submit-project">
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Book an Audit
        </button>
      </Link>
    </section>
  );
};

export default Hero;
