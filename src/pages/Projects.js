function Projects() {
  const myProjects = [
     { name: "Portfolio Website", description: "My personal portfolio built with React and Tailwind CSS." },


    { name: "Quiz App", description: "An interactive quiz application using HTML, CSS, and JavaScript." },


    { name: "Airline Management System", description: "A Java + MySQL based system for managing flights and bookings." },


  ];

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#38bdf8" }}>💼 My Projects</h1>
      <p style={{ color: "#94a3b8", marginTop: "10px" }}>
        Some of the projects I’ve built recently 👇
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        {myProjects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              borderRadius: "15px",
              padding: "25px",
              width: "280px",
              boxShadow: "0 0 20px rgba(56,189,248,0.15)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(56,189,248,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.15)";
            }}
          >
            <h3 style={{ color: "#38bdf8", marginBottom: "10px" }}>
              {project.name}
            </h3>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "15px",
                backgroundColor: "#38bdf8",
                color: "#0f172a",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#0ea5e9")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#38bdf8")
              }
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
