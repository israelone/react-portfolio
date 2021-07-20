import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fffffe;
  padding: 80px 20px;
`;

const Header = styled.h1``;
const Introduction = styled.p`
  color: #5f6c7b;
`;

const About = () => {
  return (
    <Container id="about">
      <Header>Hello!</Header>
      <Introduction>
        Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
      </Introduction>
    </Container>
  );
};

export default About;
