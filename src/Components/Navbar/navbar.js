import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  position: fixed;
  background-color: #094067;
  height: 100%;
  width: 225px;
  top: 0;
  right: ${(props) => (props.show ? '0' : '-225px')};
  transition: all ease 0.5s;
  -webkit-box-shadow: -2px 0px 6px 0px #000000;
  box-shadow: -2px 0px 6px 0px #000000;
`;

const Header = styled.h1`
  margin: 0;
  background-color: #fffffe;
  padding: 15px;
  cursor: pointer;
  color: #094067;
`;

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavigationLink = styled.a`
  padding: 15px;
  display: block;
  color: white;
  text-decoration: none;
`;

const NavigationItem = styled.li`
  &:hover {
    background-color: #3da9fc;
  }
`;

const NavBar = (props) => {
  return (
    <Container show={props.showMenu}>
      <Header>Izzy Dev</Header>
      <NavigationList>
        <NavigationItem>
          <NavigationLink href="#home">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#about">About</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#skills">Skills</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Resume</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#projects">Portfolio</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#contact">Contact</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Container>
  );
};

export default NavBar;
