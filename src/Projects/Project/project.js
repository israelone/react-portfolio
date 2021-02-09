import React from "react";
import styled from "styled-components";
import ProjectsSummary from "./ProjectSummary/projectSummary";

const ProjectContainer = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 420px;
  margin: 20px auto;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Project = () => {
  return (
    <ProjectContainer>
      <Image src={"../Pictures/etchasketch.svg"}></Image>
      <ProjectsSummary />
    </ProjectContainer>
  );
};

export default Project;
