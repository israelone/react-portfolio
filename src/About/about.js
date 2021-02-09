import React, { Component } from "react";
import Title from "./Title/title";
import Profile from "./ProfilePicture/profilePicture";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background-color: var(--green);
  height: 100%;
`;

class About extends Component {
  state = { pictureShown: true };

  toggleIntroHandler = () => {
    const showIntro = this.state.pictureShown;
    this.setState({
      pictureShown: !showIntro,
    });
  };

  render() {
    return (
      <Container>
        <Title toggle={this.toggleIntroHandler} />
        <Profile showPicture={this.state.pictureShown} />
      </Container>
    );
  }
}

export default About;
