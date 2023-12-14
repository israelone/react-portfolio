import React from "react";
import styled from "styled-components";
import Project from "./Project/project";
import ECommerceImage from "../../images/projectsImages/e-commerce.png";
import RESTCountries from "../../images/projectsImages/rest-countries.png";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 28px;
  @media only screen and (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectSection = styled.section`
  background-color: #f0f2f5;
  padding: 80px 100px 80px;
`;

const Header = styled.h1`
  font-size: 45px;
  letter-spacing: 2px;
  flex: 1;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 95px;
`;

const SectionDescription = styled.p`
  flex: 1;
`;

const Projects = () => {
  return (
    <ProjectSection>
      <SectionTitleContainer>
        <Header>
          Look at My <br /> Projects
        </Header>
        <SectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </SectionDescription>
      </SectionTitleContainer>
      <ProjectsContainer id="projects">
        <Project
          projectImage={ECommerceImage}
          url="https://israelone.github.io/e-commerce/"
          githubUrl="https://github.com/israelone/e-commerce"
          projectTitle="E-Commerce"
          technologies="Angular"
          color="darkblue"
        />
        <Project
          projectImage={RESTCountries}
          url="https://israelone.github.io/REST-countries/"
          githubUrl="https://github.com/israelone/REST-countries"
          technologies="Angular"
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
