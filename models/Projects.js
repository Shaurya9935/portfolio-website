import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    status: { type: String, enum: ["IN DEVELOPMENT", "DEPLOYED", "ARCHIVED"] },
    year: String,
    github: String,
    live: String,
    
}, {timestamps: true});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);