import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import MDEditor from "@uiw/react-md-editor";
import {
  GeneralContainer,
  MDContainer,
  Form,
  Subtitle,
  Title,
  PostTitleContainer,
  PostInput,
  ImageContainer,
  AddButton,
  ButtonContainer,
  Banner,
  UserImage,
  UserName,
  BannerInfoContainer,
} from "./AdminPost";
import axios from "axios";
import { useGetOnePostById } from "../../hooks/useGetOnePostById";
import DefaultImage from "../../assets/bg.jpg";
import DefaultAuthorImage from "../../assets/bg.jpg";

const AdminPost = () => {
  const { id } = useParams();
  const { post } = useGetOnePostById(id);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: post[0]?.title,
      desc: post[0]?.desc,
      photo: post[0]?.photo || "",
      userId: post[0]?.userId || sessionStorage.getItem("id"),
      username: post[0]?.user[0].username,
      profilePic: post[0]?.user[0].profilePic,
    },
    onSubmit: ({ username, profilePic, ...values }) => {
      if (id === "new") {
        console.log(values)
        axios.post(`http://localhost:5000/api/posts/`, values);
      } else {
        console.log(values)
        axios.put(`http://localhost:5000/api/posts/${id}`, values);
      }
    },
  });

  return (
    <GeneralContainer>
      <Title>
        {id === "new" ? "Create a new Post" : `Edit : '${formik.values.title}'`}
      </Title>
      <ImageContainer>
        <Banner background={formik.values.photo || DefaultImage}>
          {id === "new" ? (
            ""
          ) : (
            <BannerInfoContainer>
              <UserImage src={formik.values.profilePic || DefaultAuthorImage} />
              <UserName>{formik.values.username}</UserName>
            </BannerInfoContainer>
          )}
        </Banner>
      </ImageContainer>
      <Form onSubmit={formik.handleSubmit}>
        <PostTitleContainer>
          <Subtitle>Title</Subtitle>
          <PostInput
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange("title")}
          />
          <Subtitle>Upload Image</Subtitle>
          <PostInput
            type="file"
            value={formik.values.photo}
            onChange={formik.handleChange("photo")}
          />
        </PostTitleContainer>
        <MDContainer>
          <Subtitle>Content</Subtitle>
          <MDEditor
            value={formik.values.desc}
            onChange={formik.handleChange("desc")}
            style={{ width: "80%" }}
          />
        </MDContainer>
        <ButtonContainer>
          <AddButton >Save</AddButton>
        </ButtonContainer>
      </Form>
    </GeneralContainer>
  );
};

export default AdminPost;
