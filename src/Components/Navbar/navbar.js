import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  position: fixed;
  background-color: #226969;
  height: 100%;
  width: 225px;
  top: 0;
  right: ${(props) => (props.show ? '0' : '-225px')};
  transition: all ease 0.5s;
`;

const Header = styled.h1`
  padding-left: 15px;
`;

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  &:hover {
    background-color: #7ea07f;
  }
  padding: 18px 15px;
  color: white;
  cursor: pointer;
`;

const NavBar = (props) => {
  return (
    <Container show={props.showMenu}>
      <Header>Izzy Dev</Header>
      <NavigationList>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>About</NavigationItem>
        <NavigationItem>Skils</NavigationItem>
        <NavigationItem>Portfolio</NavigationItem>
        <NavigationItem>Contact</NavigationItem>
      </NavigationList>
    </Container>
  );
};

export default NavBar;
