import connectDB from "@/lib/db";
import Project from "@/models/Projects";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      description,
      tags,
      status,
      year,
      github,
      live,
    } = body;

    const project = await Project.create({
      title,
      description,
      tags,
      status,
      year,
      github,
      live,
    });

    return Response.json(
      {
        success: true,
        message: "Project created successfully",
        data: project,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Failed to create project",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().sort({ createdAt: -1 });

    return Response.json(
      {
        success: true,
        data: projects,
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch projects",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req) {
    try {
        await connectDB();
        const { id } = await req.json();
        await Project.findByIdAndDelete(id);
    return Response.json({
            success: true,
            message: "Project deleted successfully"
        },
        {
            status: 200
        }
    )
    }catch (error) {
        console.log(error); 

        return Response.json(
      {
        success: false,
        message: "Failed to delete project",
      },
      {
        status: 500,
      }
    );
    }
}

