import express from "express";
import { getProjects, createProject, deleteProject, updateProject } from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", protect, createProject);
router.delete("/:id", protect, deleteProject);
router.put("/:id", protect, updateProject);
export default router;
