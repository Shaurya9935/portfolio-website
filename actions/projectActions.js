"use server"

import connectDB from "@/lib/db.js";
import Project from "@/models/Projects.js";
import { revalidatePath } from "next/cache";


export async function createProject(formData) {
    console.log("SERVER ACTION RUNNING");
    try {
        await connectDB();
        const newProject = new Project({
            title: formData.get("title"),
            description: formData.get("description"),
            status: formData.get("status"),
            year: formData.get("year"),
            tags: formData.getAll("tags"),
            github: formData.get("github"),
            live: formData.get("live"),
        });
        await newProject.save();
        revalidatePath("/admin/projects");
        console.log(formData.get("title"));
    } catch (error) {
    console.error("Error creating project:", error);

    return {
      success: false,
      message: "Failed to create project",
    };
  }
}