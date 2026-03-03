import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [editingProjectId, setEditingProjectId] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: "",
    github: '',
    live: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payLoad = {
      ...formData,
      techStack: formData.techStack.split(",").map(t => t.trim())
    }
    try {
      if (editingProjectId) {
        const res = await axios.put(`http://localhost:5000/api/projects/${editingProjectId}`, payLoad);
        setProjects(prev =>
          prev.map(p =>
            p._id === editingProjectId ? res.data.project : p
          )
        );
        setEditingProjectId(null);
      } else {
        const res = await axios.post('http://localhost:5000/api/projects', payLoad);
        setProjects((prev) => [res.data.project, ...prev]);
      }

      setFormData({
        title: '',
        description: '',
        techStack: "",
        github: '',
        live: ''
      });
    } catch (err) {
      console.error("Save failed:", err.response?.data || err.message);
    }
  };


  //EDIT HANDLER
  const handleEdit = (project) => {
    setEditingProjectId(project._id);

    setFormData({
      title: project.title,
      description: project.description,
      techStack: Array.isArray(project.techStack) ? project.techStack.join(", ") : project.techStack || "",
      github: project.github || "",
      live: project.live || ""
    });
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Projects</h1>
          <p className="text-slate-400">Manage your portfolio projects and showcase your work.</p>
        </div>
        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>
        </div>
      </div>

      {/* CREATE PROJECT FORM */}
      <div className="mb-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          {editingProjectId ? 'Edit Project' : 'Add New Project'}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-slate-400 mb-2">Title</label>
            <input
              name="title"
              placeholder="Project Name"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-slate-400 mb-2">Description</label>
            <textarea
              name="description"
              placeholder="What is this project about?"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all resize-none"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-slate-400 mb-2">Tech Stack (comma separated)</label>
            <input
              name="techStack"
              placeholder="React, Node.js, MongoDB"
              value={formData.techStack}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-slate-400 mb-2">GitHub URL</label>
            <input
              name="github"
              placeholder="https://github.com/..."
              value={formData.github}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-slate-400 mb-2">Live Demo URL</label>
            <input
              name="live"
              placeholder="https://yourproject.com"
              value={formData.live}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
            {editingProjectId && (
              <button
                type="button"
                onClick={() => {
                  setEditingProjectId(null);
                  setFormData({ title: '', description: '', techStack: "", github: '', live: '' });
                }}
                className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition-all font-medium"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              {editingProjectId ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>

      {/* PROJECTS TABLE */}
      <div className='bg-slate-900/80 backdrop-blur-md shadow-xl rounded-2xl border border-white/5 overflow-hidden'>
        <div className="overflow-x-auto">
          <table className='w-full text-sm text-left'>
            <thead className='text-xs uppercase bg-slate-800/80 text-slate-400 border-b border-white/5'>
              <tr>
                <th className='px-6 py-4 font-medium tracking-wider'>Title</th>
                <th className='px-6 py-4 font-medium tracking-wider'>Tech Stack</th>
                <th className='px-6 py-4 font-medium tracking-wider text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan="3" className="px-6 py-8 text-center text-slate-500">
                    No projects found. Add one above!
                  </td>
                </tr>
              ) : (
                projects.map((p) => (
                  <tr key={p._id} className='hover:bg-slate-800/40 transition-colors group'>
                    <td className='px-6 py-4 font-medium text-white'>{p.title}</td>
                    <td className='px-6 py-4 text-sky-400'>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(p.techStack) && p.techStack.length > 0 && p.techStack[0] !== ""
                          ? p.techStack.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-sky-500/10 rounded border border-sky-500/20 text-xs">{tech}</span>
                          ))
                          : <span className="text-slate-500">—</span>}
                      </div>
                    </td>
                    <td className='px-6 py-4 text-right'>
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
                        <button
                          onClick={() => handleEdit(p)}
                          className='p-2 text-slate-400 hover:text-sky-400 hover:bg-sky-400/10 rounded-lg transition-colors'
                          title="Edit Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                        </button>
                        <button
                          onClick={() => handleDelete(p._id)}
                          className='p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors'
                          title="Delete Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;
