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
`;

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  &:hover {
    background-color: #3da9fc;
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
