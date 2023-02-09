import React from "react";
import styled from "styled-components";

const ProjectTitle = styled.h5`
  margin: 0;
  position: relative;
  z-index: 10;
  transition: visibility ease 0.2s;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const ProjectSummary = styled.p`
  margin: 5px 0 25px 0;
  @media only screen and (min-width: 1000px) {
    visibility: hidden;
  }
`;

const BackgroundImage = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 220px;
`;
const ProjectContainer = styled.div`

position: relative;
  background-position:center;
  background-size:100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  @media only screen and (min-width: 1000px) {
    width: initial;
    margin: 0;
    height: 220px;
    animation: scale-down-center 0.5s 1;
    &:hover {
      -webkit-transform: scale(0.5);
      transform: scale(0.9);
   
    ${BackgroundImage}{
      opacity: 0.3;
    }
    ${ProjectTitle}, ${ProjectSummary}{
      display:initial;
      visibility: visible;
      transition: visibility ease 0.2s;
    
  }
  }
`;

const Icon = styled.i`
  &:hover {
    color: #094067;
  }
  color: #fffffe;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 25px;
  border-radius: 100%;
`;

const GithubLink = styled.div``;

const ProjectLinksContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 5px;
  align-items: center;
`;
const ProjectTools = styled.div``;

const Project = (props) => {
  return (
    <ProjectContainer className="project-tile" backgroundcolor={props.color}>
      <BackgroundImage src={props.projectImage} alt="" />
      <ProjectLinksContainer>
        <ProjectTitle>
          <a href={props.url} target="_blank" rel="noreferrer">
            {props.projectTitle}
          </a>
        </ProjectTitle>
        <GithubLink>
          <a href={props.githubUrl} target="_blank" rel="noreferrer">
            <Icon className="fab fa-github"></Icon>
          </a>
        </GithubLink>
      </ProjectLinksContainer>
      <ProjectTools></ProjectTools>
    </ProjectContainer>
  );
};

export default Project;
