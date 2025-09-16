import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import profilePic from "./assets/profile.jpg"; // Place your image here

// About Component
function About() {
  return (
    <section style={styles.section}>
      <div style={styles.aboutContainer}>
        <div style={styles.imageContainer}>
          <img
            src={profilePic}
            alt="REDDY"
            style={styles.profileImage}
          />
          <p style={styles.imageCaption}>VENKATA REDDY BODDU</p>
          <p style={styles.jobTitle}>Full Stack Developer</p>
        </div>
        <div style={styles.aboutTextContainer}>
          <h2>About Me</h2>
          <p style={styles.aboutText}>
            Hi, I’m VENKATA REDDY BODDU — a passionate Full Stack developer who
            loves building scalable, performant, and user-friendly web
            applications using modern technologies.
          </p>
          <p style={styles.aboutText}>
            I specialize in React, Node.js, Python, and have a knack for solving
            complex problems and delivering clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Node.js",
    "React.js",
  ];

  return (
    <section style={styles.section}>
      <h2>Skills</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill) => (
          <span key={skill} style={styles.skillBadge}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section style={styles.section}>
      <h2>Projects</h2>
      <p>Coming soon... 🚀</p>
    </section>
  );
}

function Contact() {
  return (
    <section style={styles.section}>
      <h2>Contact</h2>
      <p style={styles.contactText}>
        Feel free to connect with me on{" "}
        <a
          href="https://github.com/Venkat3021"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
        , or send me an email at{" "}
        <a href="mailto:venkatareddyboddu520@gmail.com" style={styles.link}>
          venkata@example.com
        </a>
        .
      </p>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.logo}>Reddy Portfolio</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>
              About
            </Link>
            <Link to="/skills" style={styles.navLink}>
              Skills
            </Link>
            <Link to="/projects" style={styles.navLink}>
              Projects
            </Link>
            <Link to="/contact" style={styles.navLink}>
              Contact
            </Link>
          </nav>
        </header>

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={styles.footer}>
          <p>© 2025 VENKATA REDDY BODDU. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

// Styles object for inline styling
const styles = {
  container: {
    fontFamily:
      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 900,
    margin: "0 auto",
    padding: 20,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f9fafb",
    color: "#1f2937",
  },
  header: {
    borderBottom: "2px solid #3b82f6",
    paddingBottom: 15,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    fontWeight: "700",
    fontSize: "1.8rem",
    color: "#2563eb",
  },
  nav: {
    display: "flex",
    gap: 20,
  },
  navLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: 18,
    transition: "color 0.3s",
  },
  mainContent: {
    flexGrow: 1,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    boxShadow: "0 4px 15px rgb(0 0 0 / 0.1)",
    marginBottom: 30,
  },
  aboutContainer: {
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    textAlign: "center",
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
  },
  imageCaption: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 20,
  },
  jobTitle: {
    color: "#3b82f6",
    fontWeight: "600",
    marginTop: 6,
    fontSize: 16,
  },
  aboutTextContainer: {
    maxWidth: 500,
  },
  aboutText: {
    fontSize: 18,
    lineHeight: 1.6,
    marginTop: 8,
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 15,
    marginTop: 15,
  },
  skillBadge: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "8px 14px",
    borderRadius: 20,
    fontWeight: "600",
    fontSize: 16,
    boxShadow: "0 4px 8px rgba(59, 130, 246, 0.3)",
    userSelect: "none",
  },
  contactText: {
    fontSize: 18,
  },
  link: {
    color: "#2563eb",
    textDecoration: "underline",
  },
  footer: {
    textAlign: "center",
    padding: 15,
    borderTop: "1px solid #e5e7eb",
    color: "#6b7280",
  },
};

export default App;
