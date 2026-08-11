import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import "./Projects.css";

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev >= project.images.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [hovered, project.images.length]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCurrentImage(0);
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-image-box">

        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="project-card-image"
        />

        <div className="project-card-hover">
          <span>VIEW PROJECT</span>
          <span className="view-arrow">↗</span>
        </div>

        <div className="photo-count">
          {String(currentImage + 1).padStart(2, "0")}
          {" / "}
          {String(project.images.length).padStart(2, "0")}
        </div>

      </div>

      <div className="project-card-details">

        <div>
          <h2>{project.title}</h2>

          <p>{project.category}</p>
        </div>

        <span className="project-location">
          {project.location}
        </span>

      </div>
    </Link>
  );
}


export default function Projects() {
  return (
    <main className="projects-page">

      <section className="projects-heading">

        <div>
          <p className="projects-label">
            INTERIOR DESIGN STUDIO
          </p>

          <h1>
            Our Projects
          </h1>
        </div>

        <p className="projects-description">
          A collection of interiors created with
          character, comfort and timeless detail.
        </p>

      </section>


      <section className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </section>

    </main>
  );
}