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
          I’m a backend developer passionate about building scalable APIs with
          FastAPI, PostgreSQL, and Python. I also tutor aspiring developers in
          Python programming.
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
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>MyMech</h3>
            <p>Mechanic Finder App with FastAPI + PostgreSQL + PostGIS</p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>AI Training Notes</h3>
            <p>
              Illustrated notes on AI subsets, creativity & productivity with
              diagrams.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>Python Tutoring</h3>
            <p>Beginner-friendly Python tutoring materials & resources.</p>
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
