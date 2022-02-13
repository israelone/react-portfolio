import React from "react";
import styled from "styled-components";
import Project from "./Project/project";
import "./projects.css";

const ProjectsContainer = styled.div`
  background-color: #3da9fc;
  padding: 10px 0;
  gap: 58px;
  @media only screen and (min-width: 1000px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ProjectSection = styled.section`
  background-color: #3da9fc;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Header = styled.h1`
  text-align: center;
  margin: 0;
  color: white;
  letter-spacing: 2px;
`;

const Projects = () => {
  return (
    <ProjectSection>
      <Header>Projects</Header>
      <ProjectsContainer id="projects">
        <Project
          projectImage="resources/projectImages/e-commerce.png"
          color="darkblue"
        />
        {/* <Project projectImage="resources/projectImages/e-commerce.png" color="blue" />
        <Project projectImage="resources/projectImages/e-commerce.png" color="green" />
        <Project projectImage="resources/projectImages/e-commerce.png" color="darkgreen" /> */}
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;
