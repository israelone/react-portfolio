import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #c1c14b;
  height: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-style: italic;
`;

const Header = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  border: none;
  padding: 22px;
  border-radius: 3px;
`;

const Home = () => {
  return (
    <Container>
      <Header>Israel Lopez</Header>
      <Paragraph>Front End Developer</Paragraph>
      <Button>Find Out More</Button>
    </Container>
  );
};

export default Home;
