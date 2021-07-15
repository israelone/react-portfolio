import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.nav``;

const Header = styled.h1``;

const NavigationList = styled.ul``;

const NavigationItem = styled.li``;

const NavBar = () => {
  return (
    <Container>
      <Header>
        Izzy <br></br>Dev
      </Header>

      <NavigationList>
        <NavigationItem></NavigationItem>
        <NavigationItem></NavigationItem>
        <NavigationItem></NavigationItem>
      </NavigationList>
    </Container>
  );
};

export default NavBar;
