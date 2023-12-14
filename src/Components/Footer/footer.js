import React from "react";
import styled from "styled-components";
// import Image from "../../images/Logo/izzydevlogo.svg";

const Container = styled.footer`
  padding: 124px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50px;
  margin: 0 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const Icon = styled.i`
  &:hover {
    background-color: #fffffe;
    color: #094067;
  }
  color: #fffffe;
  width: 40px;
  background-color: #094067;
  height: 40px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  border-radius: 100%;
  margin: 20px;
`;

const Paragraph = styled.p`
  text-align: center;
  display: inline;
  color: white;
  font-weight: 500;
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
  margin: 0 7px;
  display: inline;
`;
const NavigationLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const CreatedByContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const NagivationContainer = styled.div``;

const Footer = () => {
  return (
    <>
      <Container>
        <CreatedByContainer>
          <Paragraph>Created By:</Paragraph>
          {/* <Logo src={Image} /> */}
        </CreatedByContainer>
        <NagivationContainer>
          <NavigationList>
            <NavigationItem>
              <NavigationLink href="#home">Home</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#about">About Us</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#projects">Portfolio</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink href="#contact">Contact</NavigationLink>
            </NavigationItem>
          </NavigationList>
          <IconsContainer>
            <a href="https://www.linkedin.com/in/israelone/" _blank="true">
              <Icon className="fab fa-linkedin-in"> </Icon>
            </a>
            <a href="https://github.com/israelone">
              <Icon className="fab fa-github"></Icon>
            </a>
          </IconsContainer>
        </NagivationContainer>
      </Container>
    </>
  );
};

export default Footer;
