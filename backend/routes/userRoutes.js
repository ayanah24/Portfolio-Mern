import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/profile", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password -googleId");
        res.status(200).json({
            message: "Profile fetched successfully",
            user: user
        });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
