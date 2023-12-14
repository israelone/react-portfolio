import React from "react";
import styled from "styled-components";
import Profile from "../About/ProfilePicture/profilePicture";

const Container = styled.section`
  font-size: 25px;
  background-color: #f0f2f5;
  height: 100vh;
  padding: 0 39px;
  @media only screen and (min-width: 1000px) {
    font-size: 25px;
    background-color: #f0f2f5;
    height: 100vh;
    padding: 0 280px;
  }
`;
// display: flex;
// align-content: space-around;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// flex-direction: row;
// flex-wrap: nowrap;
// align-content: space-around;
// justify-content: center;
// align-items: center;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
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
  text-align: center;
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Icon = styled.i`
  color: white;
`;

const LinkedIcon = styled(Icon)`
  color: #094067;
`;

const NavBar = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinksList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 15px 0;
`;

const NavLink = styled.li`
  padding: 0 10px;
  font-size: 18px;
`;

const ContactButton = styled.button`
  background: black;
  color: white;
  border-radius: 40px;
  border: none;
  padding: 10px 18px;
`;

const IntroContainer = styled.div`
  margin: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 40px;
  border: none;
  padding: 10px 18px;
`;

const GrayOnBlackButton = styled(Button)`
  background-color: transparent;
  border: 1px solid black;
  padding: 15px 30px;
`;

const BlackOnWhiteButton = styled(Button)`
  background: black;
  color: white;
  padding: 15px 30px;
`;

const Home = () => {
  return (
    <Container id="home">
      <NavBar>
        <Logo></Logo>
        <NavLinksList>
          <NavLink>Home</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>About</NavLink>
        </NavLinksList>
        <div>
          <BlackOnWhiteButton>LET'S TALK</BlackOnWhiteButton>
        </div>
      </NavBar>
      {/* <div>
        <span>israelopez</span>
        <IconsContainer>
          <a href="https://www.linkedin.com/in/israelone/" _blank="true">
            <Icon className="fab fa-linkedin-in"> </Icon>
          </a>
          <a href="https://github.com/israelone">
            <Icon className="fab fa-github"></Icon>
          </a>
        </IconsContainer>
      </div> */}
      <IntroContainer>
        <Profile />
        <Introduction>
          Hello, I'm <span>Israel Lopez,</span> <br></br>creative Software
          Engineer based on the USA.
        </Introduction>
        <p>A Software Engineer specialized in Front End technologies.</p>
      </IntroContainer>
      <NavigationButtons>
        <BlackOnWhiteButton>GET IN TOUCH</BlackOnWhiteButton>
        <GrayOnBlackButton>VIEW PROJECTS</GrayOnBlackButton>
      </NavigationButtons>
      {/* <LinkedinLink
        href="https://www.linkedin.com/in/israelone/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Connect On </span>
        <LinkedIcon className="fab fa-linkedin"></LinkedIcon>
      </LinkedinLink> */}
    </Container>
  );
};

export default Home;
