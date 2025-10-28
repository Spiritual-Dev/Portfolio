function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <ul>
        <li>
          🚗{" "}
          <a
            href="https://github.com/Spiritual-Dev/MyMech"
            target="_blank"
            rel="noreferrer"
          >
            <strong>MyMech – Mechanic Finder Web App</strong>
          </a>
          <p>
            A mechanic finder platform that connects car owners to nearby
            mechanics using FastAPI, PostgreSQL + PostGIS, and Leaflet map
            integration.
          </p>
        </li>

        <li>
          👕{" "}
          <a
            href="https://github.com/Spiritual-Dev/Pulse-Apparel"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Pulse Apparel – Fashion Brand Website</strong>
          </a>
          <p>
            A clean, responsive fashion website built with HTML, CSS, and
            JavaScript to showcase collections and brand identity online.
          </p>
        </li>

        <li>
          🏪{" "}
          <a
            href="https://github.com/Spiritual-Dev/Morenbee-Grocery-Store"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Morenbee Grocery Store App – Retail Management System</strong>
          </a>
          <p>
            A Python-based inventory and billing system for grocery stores, now
            being upgraded with a FastAPI backend for automation and database
            management.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
