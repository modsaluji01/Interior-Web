import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {

  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === id
  );

  const [currentImage, setCurrentImage] = useState(0);


  /* AUTO SLIDESHOW */

  useEffect(() => {

    if (!project) return;

    const timer = setInterval(() => {

      setCurrentImage((current) =>
        current === project.images.length - 1
          ? 0
          : current + 1
      );

    }, 5000);

    return () => clearInterval(timer);

  }, [project]);


  /* PROJECT NOT FOUND */

  if (!project) {

    return (
      <div className="project-not-found">

        <h1>Project not found</h1>

        <Link to="/projects">
          Back to projects
        </Link>

      </div>
    );
  }


  /* NEXT IMAGE */

  const nextImage = () => {

    setCurrentImage((current) =>
      current === project.images.length - 1
        ? 0
        : current + 1
    );

  };


  /* PREVIOUS IMAGE */

  const previousImage = () => {

    setCurrentImage((current) =>
      current === 0
        ? project.images.length - 1
        : current - 1
    );

  };


  return (

    <main className="project-detail">


      {/* TOP NAVIGATION */}

      <nav className="detail-nav">

        <Link to="/" className="detail-logo">
          INTERIOR
          <br />
          STUDIO
        </Link>

        <Link
          to="/projects"
          className="back-projects"
        >
          ← ALL PROJECTS
        </Link>

      </nav>


      {/* PROJECT TITLE */}

      <section className="detail-heading">

        <div>

          <p className="detail-category">
            {project.category}
          </p>

          <h1>
            {project.title}
          </h1>

        </div>

        <div className="detail-location">
          {project.location}
        </div>

      </section>


      {/* MAIN IMAGE */}

      <section className="gallery">

        <div className="gallery-image">

          <AnimatePresence mode="wait">

            <motion.img
              key={currentImage}
              src={project.images[currentImage]}
              alt={`${project.title} ${currentImage + 1}`}
              initial={{
                opacity: 0,
                scale: 1.03
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{
                duration: 0.8
              }}
            />

          </AnimatePresence>


          {/* ARROWS */}

          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ←
          </button>


          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={nextImage}
            aria-label="Next image"
          >
            →
          </button>


          {/* COUNTER */}

          <div className="gallery-counter">

            <span>
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span className="counter-line" />

            <span>
              {String(project.images.length).padStart(2, "0")}
            </span>

          </div>

        </div>


        {/* THUMBNAILS */}

        <div className="thumbnails">

          {project.images.map((image, index) => (

            <button
              key={image}
              className={
                index === currentImage
                  ? "thumbnail active"
                  : "thumbnail"
              }
              onClick={() => setCurrentImage(index)}
            >

              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
              />

            </button>

          ))}

        </div>

      </section>


      {/* DESCRIPTION */}

      <section className="project-description">

        <div className="description-label">
          THE PROJECT
        </div>

        <p>
          {project.description}
        </p>

      </section>


    </main>
  );
}

export default ProjectDetail;