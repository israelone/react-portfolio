import React, { Component } from "react";
import Logo from "../Logo/logo";
import Navigation from "../NavigationItems/navigation-items";
import styled from "styled-components";

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 5fr;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  justify-self: center;
  -webkit-box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 7px -2px rgba(0, 0, 0, 0.75);
  background-color: var(--blue);
`;

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar>
          <Logo />
          <Navigation />
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
