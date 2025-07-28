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
            Hi, I’m Hari — a <span className="font-bold text-indigo-400">Smart Contract Auditor</span> focused on helping small and medium Web3 projects launch securely and confidently. 
            I’ve completed <span className="font-bold text-indigo-400">7+ published audits</span> and uncovered 
            <span className="font-bold text-indigo-400"> 6 high-severity vulnerabilities</span> on CodeHawks. 
            My mission is to deliver real security — <span className="font-bold text-indigo-400">before exploits happen.</span>
          </p>
          <ul className="space-y-2 text-gray-400">
            <li>✔ Deep expertise in Solidity, EVM security, and audit methodologies</li>
            <li>✔ Clear, actionable audit reports tailored for founders and developers</li>
            <li>✔ Fast turnaround — delivery typically within 3–7 days based on code complexity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
