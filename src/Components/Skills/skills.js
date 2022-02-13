import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 10px 0 10px 0;
  background-color: #094067;
  display: flex;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 42px;
  @media only screen and (min-width: 1000px) {
    width: 240px;
  }
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.i`
  color: #094067;
  font-size: 25px;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 5px;
`;

const SkillHeader = styled.h4`
  font-size: 22px;
  color: white;
  margin: 10px 0;
`;

const SkillsContainer = styled.div`
  display: block;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

const Description = styled.p`
  color: white;
  margin: 0;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Header>Skills</Header>
      <SkillsContainer>
        <SkillContainer>
          <IconContainer>
            <Icon style={{ color: "#e96228" }} className="fab fa-html5"></Icon>
            <Icon
              style={{ color: "#2287c2" }}
              className="fab fa-css3-alt"
            ></Icon>
            <Icon
              style={{ color: "#f5d33c" }}
              className="fab fa-js-square"
            ></Icon>
            <Icon style={{ color: "#CF649A" }} className="fab fa-sass"></Icon>
          </IconContainer>
          <SkillHeader>Foundations</SkillHeader>
          <Description>HTML5, CSS3, and Javascript</Description>
        </SkillContainer>
        <SkillContainer>
          <IconContainer>
            <Icon
              style={{ color: "#5ed3f3", fontSize: "45px" }}
              className="fab fa-react"
            ></Icon>{" "}
            <Icon
              style={{ color: "#C3002F", fontSize: "45px" }}
              className="fab fa-angular"
            ></Icon>
          </IconContainer>
          <SkillHeader>Framework</SkillHeader>
          <Description>React</Description>
        </SkillContainer>
        <SkillContainer>
          <IconContainer>
            <Icon
              style={{ color: "#eb4c27", fontSize: "38px" }}
              className="fab fa-git-alt"
            ></Icon>
            <Icon
              style={{ color: "#302f2f", fontSize: "38px" }}
              className="fab fa-github"
            ></Icon>
            <Icon
              style={{ color: "#FE641B", fontSize: "38px" }}
              className="fab fa-gitlab"
            ></Icon>
          </IconContainer>
          <SkillHeader>Version Control</SkillHeader>
          <Description>Git and Github</Description>
        </SkillContainer>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
