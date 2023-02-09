import React from "react";
import styled from "styled-components";
import Profile from "../About/ProfilePicture/profilePicture";

const Container = styled.section`
  font-size: 25px;
  background-color: #151515;
  height: 100vh;
  display: -ms-flexbox;
  display: flex;
  align-content: space-around;
  justify-content: center;
  align-items: center;
  padding: 0 69px;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    font-size: 25px;
    background-color: #151515;
    height: 100vh;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    padding: 0 280px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 98px;
  height: 87px;
`;

const Description = styled.p`
  font-style: italic;
  margin: 0;
  font-weigth: 300;
  font-size: 21px;
  color: #b9b9b9;
  text-align: center;
`;

const Introduction = styled.p`
  margin: 0;
  letter-spacing: 7px;
  font-family: "Teko", sans-serif;
  color: white;
  font-size: 40px;
  span {
    text-decoration: underline;
    text-decoration-color: aquamarine;
  }
`;

const LinkedinLink = styled.a`
  margin: 17px 0;
  border: 2px solid #094067;
  padding: 10px 17px;
  font-size: 20px;
  background-color: #fffffe;
  color: #094067;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  cursor: pointer;

  text-decoration: none;

  span {
    color: #094067;
  }
`;

const Icon = styled.i``;

const Home = () => {
  return (
    <Container id="home">
      <div>
        <Profile />
        <Introduction>
          Hello, <br /> I'm <span>Israel Lopez</span>
        </Introduction>
        <Description>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications
        </Description>
      </div>
      <LinkedinLink
        href="https://www.linkedin.com/in/israelone/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Connect On </span>
        <Icon className="fab fa-linkedin"></Icon>
      </LinkedinLink>
    </Container>
  );
};

export default Home;
