import './App.css';
import About from './Components/About/about';
import NavBar from './Components/Navbar/navbar';
import Projects from './Projects/projects';
import Contact from './Contact/contact';
import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './Components/Home/home';
import Skills from './Components/Skills/skills';

const MenuButton = styled.button`
  &:hover {
    background-color: black;
  }
  color: white;
  border-radius: 4px;
  position: absolute;
  width: 50px;
  height: 50px;
  border: none;
  top: 10px;
  right: 25px;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.28);
`;

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MenuButton
        onClick={() => showMenuToggle()}
        className={showMenu ? 'fas fa-times' : 'fas fa-bars'}
      />
      <NavBar showMenu={showMenu} />
      <Home />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
