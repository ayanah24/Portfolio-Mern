import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProjects=()=>{
  const[projects, setProjects]=useState([]);
  const[editingProjectId, setEditingProjectId]=useState(null);

  useEffect(() =>{
    axios
    .get('http://localhost:5000/api/projects')
    .then(response => setProjects(response.data))
    .catch(error => console.error('Error fetching projects:', error));
  },[]);

const handleDelete=async(id)=>{
  if(!window.confirm("Delete this project?"))return;
  try{
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    setProjects((prev)=>prev.filter((p)=>p._id!==id));
  }catch(error){
    console.error("Delete failed",err);
  }
};

const [formData, setFormData]=useState({
  title:'',
  description:'',
  techStack:"",
  github:'',
  live:''
});

const handleChange=(e)=>{
   setFormData({
    ...formData,
    [e.target.name]: e.target.value
   });  
};

//SUBMIT HANDLER
const handleSubmit=async(e)=>{
  console.log("SUBMIT CLICKED");
   e.preventDefault();

   const payLoad ={
    ...formData,
 techStack: formData.techStack.split(",").map(t => t.trim())

   }
   try{
    if(editingProjectId){
      // Handle project update logic here
      const res=await axios.put(`http://localhost:5000/api/projects/${editingProjectId}`, payLoad);
    
    
   setProjects(prev =>
  prev.map(p =>
    p._id === editingProjectId ? res.data.project : p
  )
);

   setEditingProjectId(null);
 console.log("editingId:", editingProjectId);


    }else{
          //project creation logic here
      const res=await axios.post('http://localhost:5000/api/projects', payLoad);
     
      setProjects((prev)=>[res.data.project, ...prev]);
    }
    console.log("Submitting project:", payLoad);

    setFormData({
      title:'',
     description:'',
      techStack:"", 
      github:'',
      live:''
    });
   }catch(err){
    console.error("Save failed:", err.response?.data || err.message);
   }
  };


//EDIT HANDLER
const handleEdit=(project)=>{
  setEditingProjectId(project._id);

  setFormData({
    title: project.title,
    description: project.description,
    techStack:Array.isArray(project.techStack) ? project.techStack.join(", ") : project.techStack || "",
    github: project.github || "",
    live: project.live || ""
});
};

  return(
    <><div>
      <h1 className='text-2xl font-semibold mb-6'>Admin Projects</h1>
      {/* CREATE PROJECT FORM */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded shadow">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="input" />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="input" />

        <input
          name="techStack"
          placeholder="Tech stack (React,Node,Mongo)"
          value={formData.techStack}
          onChange={handleChange}
          className="input" />

        <input
          name="github"
          placeholder="GitHub link"
          value={formData.github}
          onChange={handleChange}
          className="input" />

        <input
          name="live"
          placeholder="Live link"
          value={formData.live}
          onChange={handleChange}
          className="input" />

         <button
          type="submit"
          className="bg-sky-600 text-white px-4 py-2 rounded mt-3"
        >
          Add Project
        </button>
    </form>
      {/* PROJECTS TABLE */}
    <div className='bg-white shadow rounded-lg overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead className='bg-gray-300 text-left'>
            <tr>
              <th className='p-3'>title</th>
              <th className='p-3'>tech Stack</th>
              <th className='p-3'>Actions</th>
            </tr>

          </thead>
          <tbody>
            {projects.map((p) => {
              return (
                <tr key={p._id} className='border-t'>
                  <td className='p-3'>{p.title}</td>
                 <td className='p-3'>
                  {Array.isArray(p.techStack)
                  ? p.techStack.join(", ")
                  : p.techStack || "—"}
                 </td>

                  <td className='p-3'>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className='text-red-400 hover:underline'>
                      Delete
                    </button>
                    <button 
                    onClick={() => handleEdit(p)}
                    className='ml-4 text-blue-500 hover:underline'>Edit</button>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

export default AdminProjects;
