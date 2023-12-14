import React from "react";
import styled from "styled-components";

const ProjectTitle = styled.h1`
  margin: 0;
  position: relative;
  z-index: 10;
  transition: visibility ease 0.2s;
`;

const ProjectSummary = styled.p`
  margin: 5px 0 25px 0;
  @media only screen and (min-width: 1000px) {
    visibility: hidden;
  }
`;

const ProjectImage = styled.img`
  top: 0;
  left: 0;
  width: 90%;
  z-index: 5;
  height: 400px;
`;

const ProjectContainer = styled.div`
  border-radius: 10px;
  width: 558px;
  height: 585px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.i`
  color: black;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 25px;
  border-radius: 100%;
`;

const GithubLink = styled.div``;

const LiveLink = styled.a`
  text-decoration-color: aquamarine;
  color: black;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  margin-top: 5px;
  padding-left: 10px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px;
  flex: 1;
  justify-content: center;
`;
const ProjectTools = styled.div``;

const Technologies = styled.span`
  font-size: 15px;
  margin: 15px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #bfbfca;
  border-radius: 20px 20px 0 0;
`;

const Project = (props) => {
  return (
    <ProjectContainer className="project-tile" backgroundcolor={props.color}>
      <ImageContainer>
        <ProjectImage src={props.projectImage} alt="" />
      </ImageContainer>
      <ProjectLinksContainer>
        <ProjectTitle>{props.projectTitle}</ProjectTitle>
        {/* Add this to image as a link */}
        {/* <LiveLink href={props.url} target="_ blank" rel="noreferrer">
          Live
        </LiveLink> */}
        <Technologies>{props.technologies}</Technologies>
        <GithubLink>
          <a href={props.githubUrl} target="_blank" rel="noreferrer">
            <Icon className="fab fa-github"></Icon>
          </a>
        </GithubLink>
      </ProjectLinksContainer>
    </ProjectContainer>
  );
};

export default Project;
