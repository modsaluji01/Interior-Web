import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      <nav className="home-nav">

        <div className="home-logo">
          INTERIOR
          <br />
          STUDIO
        </div>

        <div className="home-links">

          <Link to="/projects">
            PROJECTS
          </Link>

          <a href="#about">
            ABOUT
          </a>

          <a href="#services">
            SERVICES
          </a>

          <a href="#contact">
            CONTACT
          </a>

        </div>

      </nav>


      <section className="home-hero">

        <div className="hero-content">

          <p>
            INTERIOR DESIGN STUDIO
          </p>

          <h1>
            Designing spaces
            <br />
            with intention.
          </h1>

          <Link
            to="/projects"
            className="hero-button"
          >
            EXPLORE PROJECTS →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;