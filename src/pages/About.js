import React from "react";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      {/* 🧑‍💻 Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#38bdf8",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        About Me 👨‍💻
      </h1>

      {/* 💬 About Description */}
      <p
        style={{
          maxWidth: "700px",
          color: "#cbd5e1",
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        Hi! I’m <strong>Jitendra Kumar</strong>, a passionate Computer Science student
        currently pursuing a <strong>Bachelor of Engineering (B.E.)</strong>.  
        I’m deeply interested in <strong>web development</strong>, <strong>Java programming</strong>, 
        and <strong>Data Structures & Algorithms</strong>.
      </p>

      <p
        style={{
          maxWidth: "700px",
          color: "#cbd5e1",
          fontSize: "1.1rem",
          marginTop: "20px",
          lineHeight: "1.8",
        }}
      >
        I enjoy building responsive, modern web applications using
        <strong> React.js</strong> and <strong>Tailwind CSS</strong>.  
        I’m also improving my backend logic with <strong>Java</strong> and
        solving <strong>DSA problems</strong> to strengthen my programming foundation.
      </p>

      {/* 🎯 Goal Section */}
      <p
        style={{
          maxWidth: "700px",
          color: "#cbd5e1",
          fontSize: "1.1rem",
          marginTop: "20px",
          lineHeight: "1.8",
        }}
      >
        My goal is to become a skilled <strong>Software Developer</strong> and work on 
        impactful projects that solve real-world problems 🚀.
      </p>

      {/* 🛠️ Skills Section */}
      <h2
        style={{
          fontSize: "1.8rem",
          color: "#38bdf8",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        My Skills ⚙️
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Tailwind CSS",
          "Java",
          "DSA",
          "Git & GitHub",
          "Node.js (Learning)",
        ].map((skill, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#1e293b",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#38bdf8",
              fontWeight: "500",
              fontSize: "1rem",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.backgroundColor = "#38bdf8";
              e.target.style.color = "#0f172a";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "#1e293b";
              e.target.style.color = "#38bdf8";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
