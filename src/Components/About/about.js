import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: #fffffe;
  padding: 80px 20px;
  @media only screen and (min-width: 1000px) {
    padding: 100px 260px;
  }
`;

const Header = styled.h1`
  text-align: center;
`;
const Introduction = styled.p`
  color: #5f6c7b;
  @media only screen and (min-width: 1000px) {
    font-size: 25px;
  }
`;

const SectionTitle = styled.h1`
  color: #5f6c7b;
  text-align: center;
`;

const AboutContent = styled.div`
  color: #5f6c7b;

  display: flex;
`;

const TextSection = styled.div`
  color: #5f6c7b;
  width: 50%;
`;

const SkillsSection = styled.div`
  color: #5f6c7b;
  width: 50%;
`;

const SkillsContainer = styled.div`
  color: #5f6c7b;
  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    gap: 20px;
    width: 297px;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`;

const Skill = styled.div`
  height: 30px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

const SkillName = styled.span`
  padding: 0 10px;
`;

const About = () => {
  const skills = [
    "Html",
    "Css",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "NodeJs",
    "MongoDB",
    ".Net",
  ];
  return (
    <Container id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <TextSection>
          <Header>Hello!</Header>
          <Introduction>
            My name is Israel Lopez, I'm an Enthusiastic and detail-oriented
            Front-End Developer who is comfortable working with JavaScript,
            HTML/CSS, and React looking to leverage my experience building
            responsive and scalable web apps to solve interesting problems that
            delight end-users.
          </Introduction>
        </TextSection>
        <SkillsSection>
          <Header>Skills</Header>
          <SkillsContainer>
            {skills.map((skill) => {
              return (
                <Skill>
                  <SkillName>{skill}</SkillName>
                </Skill>
              );
            })}
          </SkillsContainer>
        </SkillsSection>
      </AboutContent>
    </Container>
  );
};

export default About;
