import {  useEffect ,useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects]=useState([]);
useEffect(() => {
  const fetchProjects=async()=>{
    try{
      const res=await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    }catch (err) {
  console.error("Error fetching projects:", err.response?.data || err.message);
}

  };
  fetchProjects();
},[]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {p.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.techStack?.map((t, j) => (
                <span
                  key={j}
                  className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm font-medium">
              <a
                href={p.github}
                className="text-gray-700 hover:text-sky-500"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={p.live}
                className="text-gray-700 hover:text-sky-500"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
