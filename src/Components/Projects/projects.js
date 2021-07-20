import React from 'react';
import styled from 'styled-components';
import Project from './Project/project';

const ProjectsContainer = styled.div`
  background-color: #3da9fc;
  padding: 10px 0;
`;

const Header = styled.h1`
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Header>Projects</Header>
      <Project />
    </ProjectsContainer>
  );
};

export default Projects;
