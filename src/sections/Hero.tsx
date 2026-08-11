import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">

        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          INTERIOR DESIGN STUDIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Designing spaces
          <br />
          <em>with intention.</em>
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>Based in India</span>

          <span>Scroll to explore ↓</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;