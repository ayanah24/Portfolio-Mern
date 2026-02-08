
const Skills=()=>{
const Skills=[
    "Html",
    "Css",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Data Structures & Algorithms",
    "AI Basics"

];

return (
  <section id="skills" className="min-h-screen flex items-center px-6 bg-linear-to-br from-[#1a1a1a] via-[#0f172a] to-[#000000] relative overflow-hidden">
    <div className="max-w-5xl mx-auto">
    
    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-gray-100">
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-900 border border-gray-700 rounded-lg py-3 text-center text-sm sm:text-base font-medium text-gray-300 hover:border-sky-400 hover:text-sky-400 transition"
      >
        {skill}
      </div>
      ))}
    </div>

    </div>
  </section>
);
};

export default Skills;