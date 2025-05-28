import React from "react";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my skills and projects.",
    link: "/view-project",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-heading-1">Projects</h1>
        <p className="text-lg text-center text-heading-2 mb-12">
          Explore some of the projects I've built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animated-gradient-border rounded-3xl">
              <div className="bg-box-bg border border-box-border rounded-[1.375rem] p-6 shadow-md h-[250px] flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-heading-2">
                    {project.title}
                  </h2>
                  <p className="text-heading-3 mb-4">{project.description}</p>
                </div>
                {project.link && (
                  <Link to={project.link} className="text-indigo-700 hover:underline text-sm mt-auto"> View Project → </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ProjectsPage;
