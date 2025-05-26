import React from "react";

const ProjectsPage: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 title-animation">Our Projects</h1>
      <p className="text-lg paragraph-animation mb-8">
        Here are some of our featured projects that demonstrate our capabilities
        in design, development, and innovation.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Project A", desc: "A mobile app built for real-time collaboration." },
          { title: "Project B", desc: "Web platform for e-commerce integration." },
          { title: "Project C", desc: "AI-driven dashboard for data analytics." },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
