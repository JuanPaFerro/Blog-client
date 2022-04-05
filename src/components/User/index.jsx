import React, { useContext } from "react";
import { Context } from "../../Context";
import {
  Container,
  EditLink,
  InfoContainer,
  InfoRoleLabel,
  InfoText,
  LogoutButton,
  ProfilePic,
  ProfilePicContainer,
} from "./User";
import UserImagePlaceholder from "../../assets/user.png";
import { BsPencil } from "react-icons/bs";

const User = () => {
  const { removeAuth } = useContext(Context);
  const username = window.sessionStorage.getItem("username");
  const id = window.sessionStorage.getItem("id");
  const image = window.sessionStorage.getItem("image");
  const email = window.sessionStorage.getItem("email");
  const role = window.sessionStorage.getItem("role");
  const publicFiles = "http://192.168.1.103:5000/images/";

  return (
    <Container>
      <ProfilePicContainer>
        <ProfilePic src={image ? publicFiles + image : UserImagePlaceholder} />
      </ProfilePicContainer>
      <InfoContainer>
        <InfoText>Username: {username}</InfoText>
        <InfoText>Email: {email}</InfoText>
        <InfoRoleLabel isAdmin={role === "1"}>
          {role === "1" ? "Admin" : "User"}
        </InfoRoleLabel>
        <EditLink to={`/admin/user/${id}`}>
          <BsPencil /> Edit
        </EditLink>
      </InfoContainer>

      <LogoutButton onClick={removeAuth}>Log Out</LogoutButton>
    </Container>
  );
};

export default User;
