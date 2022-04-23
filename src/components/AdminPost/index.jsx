import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  DeleteButton,
} from "./AdminPost";
import axios from "axios";
import { useGetOnePostById } from "../../hooks/useGetOnePostById";
import DefaultImage from "../../assets/post.jpg";
import DefaultAuthorImage from "../../assets/user.png";

const AdminPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    onSubmit: async ({ username, profilePic, ...values }) => {
      if (id === "new") {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/posts/`, values);
      } else {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/posts/${id}`, values);
      }
      navigate("/blog");
    },
  });

  const handleDelete = async () => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/posts/${id}`);
    navigate("/blog");
  };

  return (
    <GeneralContainer>
      <Title>
        {id === "new" ? "Create a new Post" : `Edit : '${formik.values.title}'`}
      </Title>
      <ImageContainer>
        <Banner
          background={
            formik.values.photo
              ? formik.values.photo
              : DefaultImage
          }
        >
          {id === "new" ? (
            ""
          ) : (
            <BannerInfoContainer>
              <UserImage
                src={
                  formik.values.profilePic
                    ? formik.values.profilePic
                    : DefaultAuthorImage
                }
              />
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
            type="text"
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
          <AddButton>Save</AddButton>
          <DeleteButton onClick={() => handleDelete()}>Delete</DeleteButton>
        </ButtonContainer>
      </Form>
    </GeneralContainer>
  );
};

export default AdminPost;
