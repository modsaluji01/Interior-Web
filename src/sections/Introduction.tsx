import { motion } from "framer-motion";

function Introduction() {
  return (
    <section className="introduction" id="about">

      <div className="intro-top">
        <span>01</span>

        <span>ABOUT THE STUDIO</span>
      </div>

      <div className="intro-content">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
        >
          We create interiors
          <br />
          that feel <em>timeless.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our approach brings together architecture, material,
          light and everyday life to create spaces that feel
          personal, refined and enduring.
        </motion.p>

      </div>

      <div className="intro-bottom">
        <span>INTERIOR ARCHITECTURE</span>

        <span>EST. 2026</span>
      </div>

    </section>
  );
}

export default Introduction;