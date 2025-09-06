import preview1 from "../../public/images/Preview-image-1.webp"
import preview2 from "../../public/images/Preview-image-2.webp"
import preview3 from "../../public/images/Preview-image-3.webp"
import preview4 from "../../public/images/Preview-image-4.webp"


const PreviewSection = () => {
  const previews = [
    {
      image: preview1,
      title: "Category Overview",
      description: "Get a glance at 10+ bug categories included in HariAuditKit.",
    },

    {
      image: preview2,
      title: "Code Snippet Example",
      description: "See clean, practical code examples to prevent errors in contracts.",
    },
   
    {
      image: preview3,
      title: "Bug Explanation",
      description: "Step-by-step explanation of real-world smart contract bugs.",
    },


     {
      image: preview4,
      title: "Yes/No Checklist",
      description: "Quick checklists to avoid the most common mistakes while coding or auditing.",
    },
  ];

  return (
    <section
      id="preview"
      className="relative py-20 px-6 md:px-12 bg-gray-950 text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 -z-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400">
          Preview Inside HariAuditKit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previews.map((preview, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={preview.image}
                alt={preview.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  {preview.title}
                </h3>
                <p className="text-gray-300 text-sm">{preview.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
