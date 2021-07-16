import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: blue;
  display: flex;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.i`
  color: blue;
  font-size: 25px;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const SkillHeader = styled.h4`
  color: white;
  margin: 0;
`;

const Description = styled.p`
  color: white;
  margin: 0;
`;

const Skills = () => {
  return (
    <Container>
      <Header>Skills</Header>
      <SkillContainer>
        <IconContainer>
          <Icon className="fas fa-code"></Icon>
        </IconContainer>
        <SkillHeader>Technologies</SkillHeader>
        <Description>Html, CSS, Javascript, React</Description>
      </SkillContainer>
      <SkillContainer>
        <IconContainer>
          <Icon className="fas fa-code"></Icon>
        </IconContainer>
        <SkillHeader>Technologies</SkillHeader>
        <Description>Html, CSS, Javascript, React</Description>
      </SkillContainer>
      <SkillContainer>
        <IconContainer>
          <Icon className="fas fa-code"></Icon>
        </IconContainer>
        <SkillHeader>Technologies</SkillHeader>
        <Description>Html, CSS, Javascript, React</Description>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
