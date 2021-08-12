import React from 'react';
import styled from 'styled-components';
import Project from './Project/project';

const ProjectsContainer = styled.div`
  background-color: #3da9fc;
  padding: 10px 0;
  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, auto);
    width: 80%;
    margin: 0 auto;
  }
`;

const ProjectSection = styled.section`
  background-color: #3da9fc;
  padding-top: 27px;
`;

const Header = styled.h1`
  text-align: center;
  margin: 0;
`;

const Projects = () => {
  return (
    <ProjectSection>
      <Header>Projects</Header>
      <ProjectsContainer id="projects">
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;
