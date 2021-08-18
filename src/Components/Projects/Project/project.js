import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  color: white;

  width: 80%;
  height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-color: ${(props) =>
    props.backgroundcolor === 'darkblue'
      ? '#2b8cb0'
      : props.backgroundcolor === 'blue'
      ? '#4c61fc'
      : props.backgroundcolor === 'green'
      ? '#3dfc7b'
      : '#2bb056'};

  @media only screen and (min-width: 1000px) {
    width: initial;
    margin: 0;
    height: 220px;
    animation: scale-down-center 0.5s 1;
    &:hover {
      -webkit-transform: scale(0.5);
      transform: scale(0.9);
    }
  }
`;

const ProjectTitle = styled.h5`
  margin: 0;
  padding-left: 30px;
`;

const ProjectSummary = styled.p`
  padding-left: 30px;
  margin: 5px 0 25px 0;
`;

const Project = (props) => {
  console.log(props.color);
  return (
    <ProjectContainer backgroundcolor={props.color}>
      <ProjectTitle>Shopping Cart</ProjectTitle>
      <ProjectSummary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </ProjectSummary>
    </ProjectContainer>
  );
};

export default Project;
