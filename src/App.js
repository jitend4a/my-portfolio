import "./styles.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";  // 👈 ye line add karo
import Navbar from "./Navbar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar onChangePage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}   {/* 👈 ye line bhi add karo */}
    </div>
  );
}

export default App;
