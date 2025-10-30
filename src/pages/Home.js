import React from "react";
import { ReactTyped } from "react-typed";

function Home() {
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
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      {/* 🖼️ Profile Image */}
      <img
        src="/Jitendra_pic.png"
        alt="Jitendra Kumar"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #38bdf8",
          marginBottom: "25px",
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
        }}
      />

      {/* 👋 Welcome Text */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#38bdf8",
        }}
      >
        Hi 👋, I'm <span style={{ color: "#15fac1ff" }}>JITENDRA KUMAR</span>
      </h1>

      {/* Typing Animation */}
      <h2
        style={{
          fontSize: "1.8rem",
          color: "#cbd5e1",
          marginBottom: "40px",
        }}
      >
        <ReactTyped
          strings={[
            "Web Developer 💻",
            "React Learner ⚛️",
            "Java Programmer ☕",
            "Java + DSA Enthusiast ☕",
          ]}
          typeSpeed={70}
          backSpeed={40}
          loop
        />
      </h2>

      {/* Short Description */}
      <p
        style={{
          maxWidth: "600px",
          color: "#94a3b8",
          fontSize: "1.1rem",
          marginBottom: "40px",
        }}
      >
        I'm a passionate Computer Science student skilled in React, Node.js,
        and Java. I love solving DSA problems and creating modern, responsive
        web applications.
      </p>

      {/* Resume Button */}
      <a
        href="/JITENDA RESUME.pdf"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          padding: "12px 25px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#7dd3fc")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#38bdf8")}
      >
        📄 View Resume
      </a>
    </div>
  );
}

export default Home;
