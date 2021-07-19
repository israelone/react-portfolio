import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Icon = styled.i`
  width: 60px;
  background-color: blue;
  height: 60px;
  text-align: center;
  font-size: 25px;
  line-height: 60px;
  border-radius: 100%;
  margin: 20px;
`;

const Paragraph = styled.p`
  text-align: center;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const NavigationItem = styled.li`
  margin: 0 10px;
  display: inline;
`;
const NavigationLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <Container>
      <IconsContainer>
        <Icon className="fab fa-linkedin-in"></Icon>
        <Icon className="fab fa-github"></Icon>
      </IconsContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink>Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>About</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Skills</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Resume</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Portfolio</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Contact</NavigationLink>
        </NavigationItem>
      </NavigationList>
      <Paragraph>Created By: Izzy</Paragraph>
    </Container>
  );
};

export default Footer;
