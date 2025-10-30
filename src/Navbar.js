import React from "react";

function Navbar({ onChangePage }) {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <button
        style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
        onClick={() => onChangePage("home")}
      >
        Home
      </button>

      <button
        style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
        onClick={() => onChangePage("about")}
      >
        About
      </button>

      <button
        style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
        onClick={() => onChangePage("projects")}
      >
        Projects
      </button>

      {/* 👇 Ye naya Contact button add karo */}
      <button
        style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
        onClick={() => onChangePage("contact")}
      >
        Contact
      </button>
    </div>
  );
}

export default Navbar;
