import React from "react";
import Carousel from "../shared/Carousel";

const fallbackImage = "/src/assets/logo.png";

const project = {
  title: "NextGen Portfolio",
  description:
    "A modern portfolio website built for showcasing design and development skills. Features interactive animations, responsive layouts, and dynamic project sections.",
  screenshots: [
    "/src/assets/icon.png",
    "/src/assets/icon.png",
    "/src/assets/icon.png",
  ],
  technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
  github: "https://github.com/yourname/nextgen-portfolio",
  liveDemo: "https://yourportfolio.vercel.app",
  dateRange: "Jan 2024 – Feb 2024",
};

const ViewProjectPage: React.FC = () => {
  const screenshotsToShow =
    project.screenshots.length > 0 ? project.screenshots : [fallbackImage];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-body mt-20">
      <header className="mb-10">
        <h1 className="text-4xl text-heading-1 font-bold mb-2">{project.title}</h1>
        <p className="text-heading-3">{project.dateRange}</p>
      </header>

      <section className="mb-12">
        <p className="text-lg text-heading-3 leading-relaxed">{project.description}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-heading-2 font-semibold mb-4">Screenshots</h2>
        <Carousel images={screenshotsToShow}/>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-heading-2 font-semibold mb-4">Technical Information</h2>
        <ul className="list-disc text-heading-3 list-inside space-y-2">
          <li>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </li>
          {project.github && (
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href={project.github}
                className="text-link-1 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </li>
          )}
          {project.liveDemo && (
            <li>
              <strong>Live Demo:</strong>{" "}
              <a
                href={project.liveDemo}
                className="text-link-1 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </li>
          )}
          <li>
            <strong>Development Period:</strong> {project.dateRange}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl text-heading-2 font-semibold mb-4">Key Features</h2>
        <ul className="list-disc text-heading-3 list-inside space-y-2">
          <li>Responsive mobile-first design</li>
          <li>Scroll-triggered animations with GSAP</li>
          <li>Dark/light theme support</li>
          <li>Deployed on Vercel for CI/CD</li>
        </ul>
      </section>
    </div>
  );
};

export default ViewProjectPage;
