import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Abraham Olamilekan Owoyele
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Backend Developer | FastAPI | Python
        </motion.h2>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        <p>
          I’m a backend developer passionate about building scalable APIs and
          web systems using FastAPI, PostgreSQL, and Python. I also mentor
          aspiring developers and focus on clean, production-ready code.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {/* MyMech Project */}
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/assets/images/mymech-thumbnail.jpg"
              alt="MyMech Project"
              className="project-image"
            />
            <h3>MyMech</h3>
            <p>
              A mechanic finder web app that connects car owners to nearby
              mechanics using geolocation. Built with FastAPI, PostgreSQL,
              PostGIS, JWT authentication, and Leaflet map integration.
            </p>
            <a
              href="https://github.com/Spiritual-Dev/MyMech"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </motion.div>

          {/* Pulse Apparel Project */}
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/assets/images/pulseapparel-thumbnail.jpg"
              alt="Pulse Apparel"
              className="project-image"
            />
            <h3>Pulse Apparel</h3>
            <p>
              A fashion brand website designed with HTML, CSS, and JavaScript to
              showcase collections and create a modern shopping experience.
            </p>
            <a
              href="https://github.com/Spiritual-Dev/Pulse-Apparel"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </motion.div>

          {/* Morenbee Grocery Store App */}
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="/assets/images/morenbee-thumbnail.jpg"
              alt="Morenbee Grocery Store App"
              className="project-image"
            />
            <h3>Morenbee Grocery Store App</h3>
            <p>
              A retail management system that handles inventory, billing, and
              transactions. Built in Python and being upgraded with FastAPI for
              backend automation.
            </p>
            <a
              href="https://github.com/Spiritual-Dev/Morenbee-Grocery-Store"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <p>Email: owoyeleabraham@gmail.com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Spiritual-Dev"
            target="_blank"
            rel="noreferrer"
          >
            Spiritual-Dev
          </a>
        </p>
        <p>LinkedIn: abraham-olamilekan-owoyele</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Abraham Olamilekan Owoyele</p>
      </footer>
    </div>
  );
}

export default App;
