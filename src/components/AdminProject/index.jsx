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
  const publicFiles = "http://192.168.1.103:5000/images/";

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
        await axios.post(`http://192.168.1.103:5000/api/projects/`, values);
      } else {
        await axios.put(`http://192.168.1.103:5000/api/projects/${id}`, values);
      }
      navigate("/");
    },
  });

  const handleDelete = () => {
    axios.delete(`http://192.168.1.103:5000/api/projects/${id}`);
    navigate("/");
  };

  const handleFile = async (fileInput) => {
    const data = new FormData();
    const filename = Date.now() + fileInput.name;
    data.append("name", filename);
    data.append("file", fileInput);

    try {
      await axios.post("http://192.168.1.103:5000/api/upload", data);
      formik.setFieldValue("image", filename);
    } catch (error) {
      console.log(error);
    }
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
                ? publicFiles + formik.values.image
                : DefaultImage
            }
          />
          <Input type="file" onChange={(e) => handleFile(e.target.files[0])} />
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
