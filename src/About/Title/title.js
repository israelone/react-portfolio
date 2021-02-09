import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.h1`
  color: #5f35eb;

  grid-row: 2;
  margin: 0;
  font-family: "Poppins", sans-serif;
  /* text-shadow: 3px 6px 2px #2d86d1; */
`;

const Paragraph = styled.p`
  grid-row: 2;
  margin: 30px 0;
`;

const TitleContainer = styled.div`
  text-align: center;
  grid-row: 2;
`;
class Title extends Component {
  state = {};

  render() {
    return (
      <TitleContainer>
        <Header>Israel Lopez</Header>
        <Paragraph>
          <mark>Front End Developer</mark>
        </Paragraph>
        <span onClick={this.props.toggle}>About Me =&gt; </span>
      </TitleContainer>
    );
  }
}

export default Title;
