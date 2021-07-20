import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #094067;
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
  margin-bottom: 42px;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.i`
  color: #094067;
  font-size: 25px;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 5px;
`;

const SkillHeader = styled.h4`
  font-size: 22px;
  color: white;
  margin: 10px 0;
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
          <Icon style={{ color: '#e96228' }} className="fab fa-html5"></Icon>
          <Icon style={{ color: '#2287c2' }} className="fab fa-css3-alt"></Icon>
          <Icon
            style={{ color: '#f5d33c' }}
            className="fab fa-js-square"
          ></Icon>
        </IconContainer>
        <SkillHeader>Foundations</SkillHeader>
        <Description>HTML5, CSS3, and Javascript</Description>
      </SkillContainer>
      <SkillContainer>
        <IconContainer>
          <Icon
            style={{ color: '#5ed3f3', fontSize: '45px' }}
            className="fab fa-react"
          ></Icon>
        </IconContainer>
        <SkillHeader>Framework</SkillHeader>
        <Description>React</Description>
      </SkillContainer>
      <SkillContainer>
        <IconContainer>
          <Icon
            style={{ color: '#eb4c27', fontSize: '38px' }}
            className="fab fa-git-alt"
          ></Icon>
          <Icon
            style={{ color: '#302f2f', fontSize: '38px' }}
            className="fab fa-github"
          ></Icon>
        </IconContainer>
        <SkillHeader>Version Control</SkillHeader>
        <Description>Git and Github</Description>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
