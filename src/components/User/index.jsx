import React, { useContext } from "react";
import { Context } from "../../Context";
import {
  Container,
  InfoContainer,
  InfoRoleLabel,
  InfoText,
  LogoutButton,
  ProfilePic,
  ProfilePicContainer,
} from "./User";
import UserImagePlaceholder from "../../assets/user.png";

const User = () => {
  const { removeAuth } = useContext(Context);
  const username = window.sessionStorage.getItem("username");
  const image = window.sessionStorage.getItem("image");
  const email = window.sessionStorage.getItem("email");
  const role = window.sessionStorage.getItem("role");
  const publicFiles = "http://localhost:5000/images/";


  return (
    <Container>
      <ProfilePicContainer>
        <ProfilePic src={image ? publicFiles + image : UserImagePlaceholder} />
      </ProfilePicContainer>
      <InfoContainer>
        <InfoText>Username: {username}</InfoText>
        <InfoText>Email: {email}</InfoText>
        <InfoRoleLabel isAdmin={ role==="1" }>
          {role === "1" ? "Admin" : "User"}
        </InfoRoleLabel>
      </InfoContainer>

      <LogoutButton onClick={removeAuth}>Log Out</LogoutButton>
    </Container>
  );
};

export default User;
