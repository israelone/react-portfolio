import "./App.css";
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "./Components/Home/home";

import Footer from "./Components/Footer/footer";

const Button = styled.button`
  &:hover {
    background-color: black;
  }
  color: white;
  border-radius: 4px;
  position: fixed;
  width: 50px;
  height: 50px;
  border: none;
  top: 10px;
  right: 25px;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.28);
`;

const GoBackTopButton = styled(Button)`
  position: fixed;
  top: initial;
  bottom: 20px;
`;
const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  background-color: #434343;
`;

const HorizontalLineContainer = styled.div`
  padding: 0 124px;
  background-color: #f0f2f5;
`;

const App = () => {
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let composedPath = e.composedPath();
      setCurrentView(composedPath[1].scrollY);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      {currentView !== 0 && (
        <GoBackTopButton
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fas fa-chevron-up"
        ></GoBackTopButton>
      )}
      <Home />
      <About />
      <Projects />
      <Contact />
      <HorizontalLineContainer>
        <HorizontalLine></HorizontalLine>
      </HorizontalLineContainer>
      <Footer />
    </>
  );
};

export default App;
