import React from "react";
import styled from "styled-components";
import Project from "./Project/project";

const ProjectsContainer = styled.div``;
const Header = styled.h1`
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Header>Projects</Header>
      <Project />
    </ProjectsContainer>
  );
};

export default Projects;
