import React from "react";
import styled from "styled-components";

const NavigationItems = styled.ul`
  padding: 0 20px;
  list-style: none;
  float: left;

  li {
    font-size: 4vw;
    margin: 0px 21px;
    display: inline-block;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
`;

const navigation = () => {
  return (
    <NavigationContainer>
      <NavigationItems>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </NavigationItems>
    </NavigationContainer>
  );
};

export default navigation;
