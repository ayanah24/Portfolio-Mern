import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    googleId: { type: String, required: true },
    avatar: { type: String },
});

export default mongoose.model("User", userSchema);
