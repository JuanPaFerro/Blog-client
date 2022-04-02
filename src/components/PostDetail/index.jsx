import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetOnePostById } from "../../hooks/useGetOnePostById";
import {
  AuthorImage,
  AuthorInfoContainer,
  AuthorName,
  Container,
  DescContainer,
  EditButton,
  Image,
  ImageContainer,
  Title,
  TitleContainer,
} from "./PostDetail";
import { Context } from "../../Context";
import { BsPencil } from "react-icons/bs";
import MDEditor from "@uiw/react-md-editor";
import UserPlaceholderImage from "../../assets/user.png";
import PlaceholderImage from "../../assets/placeholder.png";

const PostDetail = () => {
  const { id } = useParams();
  const { post } = useGetOnePostById(id);
  const { isAuth } = useContext(Context);
  const publicFiles = "http://localhost:5000/images/";

  return (
    <Container>
      <ImageContainer>
        <Image src={post[0] && (post[0].photo ? publicFiles + post[0].photo : PlaceholderImage)} />
      </ImageContainer>
      <TitleContainer>
        <Title>{post[0] && post[0].title}</Title>
        <AuthorInfoContainer>
          <AuthorName>{post[0] && post[0].user[0].username}</AuthorName>
          <AuthorImage
            src={
              post[0] && (post[0].user[0].profilePic || UserPlaceholderImage)
            }
          />
          {isAuth && window.sessionStorage.getItem("role") === "1" && (
            <EditButton to={`/admin/post/${id}`}>
              <BsPencil /> Edit
            </EditButton>
          )}
        </AuthorInfoContainer>
      </TitleContainer>

      <DescContainer>
        <MDEditor.Markdown source={post[0] && post[0].desc} />
      </DescContainer>
    </Container>
  );
};

export default PostDetail;
