import React from "react";
import styled from "styled-components";
import Image from "../../../resources/projectsImages/e-commerce.jpg";

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 220px;
`;
const ProjectContainer = styled.div`
padding: 0 10px;
position: relative;
  background-position:center;
  background-size:100%;
  color: white;
  width: 80%;
  height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${(props) =>
    props.backgroundcolor === "darkblue"
      ? "#2b8cb0"
      : props.backgroundcolor === "blue"
      ? "#4c61fc"
      : props.backgroundcolor === "green"
      ? "#3dfc7b"
      : "#2bb056"};

 
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

const Project = (props) => {
  console.log(props.projectImage);
  return (
    <ProjectContainer className="project-tile" backgroundcolor={props.color}>
      <BackgroundImage src={Image} alt="" />
      <ProjectTitle>
        <a href="#" target="_blank">
          E-Commerce
        </a>{" "}
        <a href="https://github.com/israelone/e-commerce" target="_blank">
          Github
        </a>
      </ProjectTitle>
      <ProjectSummary>E-Commerce page created using AngularJs</ProjectSummary>
    </ProjectContainer>
  );
};

export default Project;
