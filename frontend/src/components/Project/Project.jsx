import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err.response?.data || err.message);
      }

    };
    fetchProjects();
  }, []);

  return (
    <section id="project" className="min-h-screen px-6 bg-black relative overflow-hidden py-24">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-sky-900/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 right-1/4 w-1/2 h-[3px] bg-gradient-to-l from-sky-400 to-purple-500 rounded-full text-center"></span>
          </h2>
          <p className="text-gray-400 mt-4 text-center max-w-2xl text-lg font-light">
            Some of my recent work bridging the gap between design and robust engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((p) => (
              <div
                key={p._id || p.id}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full overflow-hidden hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Optional glowing top border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white group-hover:text-sky-400 transition-colors duration-300">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed flex-grow font-light">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.techStack?.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs bg-sky-500/10 border border-sky-500/20 text-sky-400 px-3 py-1.5 rounded-full tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={p.github}
                    className="flex-1 text-center py-2.5 bg-white/5 border border-white/10 text-gray-300 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    className="flex-1 text-center py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-10 font-light">
              Loading projects...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
