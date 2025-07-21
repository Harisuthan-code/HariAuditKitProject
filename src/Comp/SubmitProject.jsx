const SubmitProject = () => {
  return (
    <section
      className="w-full min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12 flex flex-col justify-center items-center"
      style={{ maxWidth: "100vw", marginLeft: 0, marginRight: 0, paddingTop: "6rem" }}
    >
      {/* Expectation-setting intro */}
      <p className="mb-10 max-w-3xl text-center text-gray-300 text-lg">
       <span className="text-bold">Please read carefully before submitting your project for a micro audit</span><br />
        This service is designed for small to medium smart contract projects, focusing on identifying the most critical and common vulnerabilities.  
        While we give our full effort to find as many bugs as possible, <strong>this is not a comprehensive audit</strong> and cannot guarantee detection of every issue.<br /><br />
        If we do not find any bugs, you <strong>do not need to pay anything</strong>. Setting clear and realistic expectations helps us build trust and deliver meaningful results.
      </p>

      <h1 className="text-4xl font-bold mb-8 text-indigo-400">
        Submit Your Project for Micro Audit
      </h1>

      <p className="mb-6 text-gray-300">
        Before sending your project for a micro audit, please read the following rules carefully.
        Failure to meet these criteria may result in project rejection without review.
      </p>

      <ul className="list-disc list-inside mb-8 text-gray-400 space-y-2 max-w-2xl">
        <li>
          The project must have a clear and proper <strong>README.md</strong> explaining its purpose and structure.
        </li>
        <li>
          Include information on the smart contract functionality and how many lines of Solidity code it contains.
        </li>
        <li>
          Micro audits are intended for small to medium projects; your code should be under 2000 lines.
        </li>
        <li>
          Provide a direct link to your code repository (GitHub, GitLab, etc.).
        </li>
        <li>
          Make sure your code is clean and compilable; incomplete or unclear code will be rejected.
        </li>
        <li>
          Do not send projects without following these instructions; such projects will not be reviewed.
        </li>
      </ul>

      <p className="mb-8 text-yellow-400 font-semibold max-w-2xl text-center">
        <strong>Note:</strong> Payment for micro audits is accepted <u>only</u> in stablecoins — <em>USDC or USDT</em>.  
        Please be prepared to pay in one of these cryptocurrencies if bugs are found.  
        <br />
        <br />
        <strong>Important:</strong> Please make your payment <u>only</u> in USDC or USDT on the <em>Polygon (MATIC) network</em>.  
        Use your wallet address as usual, but be sure to send funds on the Polygon network to ensure proper receipt.
      </p>

      <p className="mb-10 text-gray-300 max-w-2xl text-center">
        When you are ready, please send your project details to the email below.  
        Include the repository link and any relevant notes in your email.
      </p>

      <a
        href="mailto:hari.auditservice@gmail.com"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
      >
        Send Project via Email
      </a>
    </section>
  );
};

export default SubmitProject;
