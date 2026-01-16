
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
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg py-3 text-center text-sm sm:text-base font-medium text-gray-700 hover:border-sky-400 hover:text-sky-500 transition"
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