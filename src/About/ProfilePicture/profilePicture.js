import React, { Component } from "react";
import picture from "./profile.jpg";
import styled from "styled-components";

const Picture = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
  border-radius: 100%;
  border: 5px solid black;
`;

const Introduction = styled.p``;

const ProfileContainer = styled.div`
  display: flex;
`;

class Profile extends Component {
  state = {};
  render() {
    return (
      <ProfileContainer>
        {this.props.showPicture ? (
          <Picture src={picture} alt="profile"></Picture>
        ) : (
          <Introduction>
            Hello, I'm Israel, I am a Front-End Developer{" "}
          </Introduction>
        )}
      </ProfileContainer>
    );
  }
}

export default Profile;
