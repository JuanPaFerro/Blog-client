import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProjectById } from "../../hooks/useGetOneProjectById";
import { useFormik } from "formik";
import axios from "axios";
import {
  Container,
  ImageContainer,
  Image,
  Form,
  Input,
  Subtitle,
  Title,
  TitleContainer,
  MDContainer,
  SaveButton,
  DeleteButton,
  ButtonContainer,
} from "./AdminProject";
import DefaultImage from "../../assets/placeholder.png";
import MDEditor from "@uiw/react-md-editor";

const AdminProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { project } = useGetOneProjectById(id);
  const { title, image, content, link } = project;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title,
      image,
      content,
      link,
    },
    onSubmit: async (values) => {
      if (id === "new") {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/projects/`, values);
      } else {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/projects/${id}`, values);
      }
      navigate("/");
    },
  });

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
    navigate("/");
  };

  return (
    <Container>
      <Title>Edit Project {`"${formik.values.title}"`}</Title>
      <Form onSubmit={formik.handleSubmit}>
        <ImageContainer>
          <Subtitle>Image:</Subtitle>
          <Image
            src={
              formik.values.image
                ? formik.values.image
                : DefaultImage
            }
          />
          <Input type="text" value={formik.values.image} onChange={formik.handleChange("image")} />
        </ImageContainer>

        <MDContainer>
          <Subtitle>Description</Subtitle>
          <MDEditor
            value={formik.values.content}
            onChange={formik.handleChange("content")}
          />
        </MDContainer>

        <TitleContainer>
          <div>
            <Subtitle>Title:</Subtitle>
            <Input
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange("title")}
            />
          </div>
          <div>
            <Subtitle>Link:</Subtitle>
            <Input
              type="text"
              value={formik.values.link}
              placeholder="http://yourlink.com"
              onChange={formik.handleChange("link")}
            />
          </div>
        </TitleContainer>
        <ButtonContainer>
          <SaveButton type="submit">Save</SaveButton>
          <DeleteButton type="button" onClick={() => handleDelete()}>
            Delete
          </DeleteButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AdminProject;
