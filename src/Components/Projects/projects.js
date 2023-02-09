import React from "react";
import styled from "styled-components";
import Project from "./Project/project";
import ECommerceImage from "../../images/projectsImages/e-commerce.png";
import RESTCountries from "../../images/projectsImages/rest-countries.png";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #3da9fc;
  gap: 28px;
  @media only screen and (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ProjectSection = styled.section`
  background-color: #3da9fc;
  padding: 15px;
`;

const Header = styled.h1`
  font-size: 45px;

  color: white;
  letter-spacing: 2px;
`;

const Projects = () => {
  return (
    <ProjectSection>
      <Header>Projects</Header>
      <ProjectsContainer id="projects">
        <Project
          projectImage={ECommerceImage}
          url="https://israelone.github.io/e-commerce/"
          githubUrl="https://github.com/israelone/e-commerce"
          projectTitle="E-Commerce"
          color="darkblue"
        />
        <Project
          projectImage={RESTCountries}
          url="https://israelone.github.io/REST-countries/"
          githubUrl="https://github.com/israelone/REST-countries"
          projectTitle="Countries REST API"
          color="blue"
        />
        {/* <Project projectImage="resources/projectImages/e-commerce.png" color="green" />
        <Project projectImage="resources/projectImages/e-commerce.png" color="darkgreen" /> */}
      </ProjectsContainer>
    </ProjectSection>
  );
};

export default Projects;
