
const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "DSA",
    "RESTful APIs",
    "AI Basics"
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 bg-black relative overflow-hidden py-24">

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto w-full">

        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Skills & Technologies
            <span className="absolute -bottom-2 right-1/4 w-1/2 h-[3px] bg-gradient-to-l from-sky-400 to-purple-500 rounded-full text-center"></span>
          </h2>
          <p className="text-gray-400 mt-4 text-center max-w-2xl text-lg font-light">
            My technical toolkit for building scalable, high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 text-center shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                {skill}
              </span>
              {/* Animated bottom border on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;