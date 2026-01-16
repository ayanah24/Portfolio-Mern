import project from '../models/project.js';

// Get all projects access projects
export const getProjects=async(req,res)=>{
    const projects=await project.find();
    res.json(projects);
};

// upload a new project 
export const createProject=async(req,res)=>{
    const Project=new project(req.body);
    await Project.save();
    res.json({message:'Project created successfully'});
};

//Delete a project
export const deleteProject=async(req,res)=>{
    const {id}=req.params;
    await project.findByIdAndDelete(id);
    res.json({message:'Project deleted successfully'});
};




