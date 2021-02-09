import "./App.css";
import About from "./About/about";
import NavBar from "./Components/Navigation/Navbar/navbar";
import React from "react";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <About /> */}
      {/* <Projects /> */}
      <Contact />
    </React.Fragment>
  );
}

export default App;
