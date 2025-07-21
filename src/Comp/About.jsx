import profilePic from "../../public/images/Portfolioimage.jpg"; // Add your image in public/images folder

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-800 text-white py-16 px-6 md:px-12"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden mb-8 md:mb-0 border-4 border-indigo-500 shadow-lg">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I’m Hari — a <span className="font-bold text-indigo-400">Smart Contract Auditor</span> dedicated to making Web3 projects secure and trustworthy.
            I’ve completed <span className="font-bold text-indigo-400">7+ published audits</span> and discovered
            <span className="font-bold text-indigo-400"> 6 high-severity vulnerabilities</span> on CodeHawks. My mission is simple:
            <span className="font-bold text-indigo-400"> protect your protocol before hackers exploit it.</span>
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>✔ Expertise in Solidity & EVM security best practices</li>
            <li>✔ Published detailed audit reports with actionable fixes</li>
            <li>✔ Fast and reliable micro-audits delivered in under 48 - 72 hours</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
