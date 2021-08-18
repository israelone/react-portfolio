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
        <Project color="darkblue" />
        <Project color="blue" />
        <Project color="green" />
        <Project color="darkgreen" />
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;
