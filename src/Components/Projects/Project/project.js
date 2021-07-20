import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-color: #fffffe;
`;

const ProjectTitle = styled.h5`
  margin: 0;
  padding-left: 30px;
`;

const ProjectSummary = styled.p`
  padding-left: 30px;
  margin: 5px 0 25px 0;
`;

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Shopping Cart</ProjectTitle>
      <ProjectSummary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </ProjectSummary>
    </ProjectContainer>
  );
};

export default Project;
