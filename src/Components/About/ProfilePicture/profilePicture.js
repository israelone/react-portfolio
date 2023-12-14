import React, { Component } from "react";
import picture from "../../../images/ProfilePicture/profilebnw.png";
import styled from "styled-components";

const Picture = styled.img`
  width: 180px;
  height: 14%;
  margin: 20px auto;
  border-radius: 100%;
`;

const Introduction = styled.p``;

const ProfileContainer = styled.div`
  display: flex;
`;

class Profile extends Component {
  render() {
    return (
      <ProfileContainer>
        <Picture src={picture} alt="profile"></Picture>
      </ProfileContainer>
    );
  }
}

export default Profile;
