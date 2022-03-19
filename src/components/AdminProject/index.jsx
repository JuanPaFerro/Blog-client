import React from "react";
import { useParams } from "react-router-dom";
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
  ButtonContainer,
} from "./AdminProject";
import DefaultImage from "../../assets/tv.jpg";
import MDEditor from "@uiw/react-md-editor";

const AdminProject = () => {
  const { id } = useParams();
  const { project, loading } = useGetOneProjectById(id);
  const { title, image, content, link } = project;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title,
      image,
      content,
      link,
    },
    onSubmit: (values) => {
      if (id === "new") {
        axios.post(`http://localhost:5000/api/projects/`, values);
      } else {
        axios.put(`http://localhost:5000/api/projects/${id}`, values);
      }
    },
  });

  return (
    <Container>
      <Title>Edit Project {`"${formik.values.title}"`}</Title>
      <Form onSubmit={formik.handleSubmit}>
        <ImageContainer>
          <Subtitle>Image:</Subtitle>
          <Image src={formik.values.image || DefaultImage} />
          <Input type="file" />
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
          <SaveButton type="submit">Save</SaveButton>
        </TitleContainer>
      </Form>
    </Container>
  );
};

export default AdminProject;
