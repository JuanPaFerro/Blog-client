import React from "react";
import {
  Container,
  Title,
  Form,
  ImageContainer,
  Image,
  Subtitle,
  Input,
  DataContainer,
  ButtonContainer,
  SaveButton,
} from "./AdminUser";
import { useFormik } from "formik";
import { useGetOneUserById } from "../../hooks/useGetOneUserById";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserPlaceholderImage from "../../assets/user.png";

const AdminUser = () => {
  const { id } = useParams();
  const { user } = useGetOneUserById(id);
  const navigate = useNavigate();
  const { username, email, profilePic } = user;
  const publicFiles = "http://localhost:5000/images/";

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      username,
      email,
      profilePic,
    },
    onSubmit: async (values) => {
      await axios.put(`http://localhost:5000/api/users/${id}`, values);

      navigate("/user");
    },
  });

  const handleFile = async (fileInput) => {
    const data = new FormData();
    const filename = Date.now() + fileInput.name;
    data.append("name", filename);
    data.append("file", fileInput);

    try {
      await axios.post("http://localhost:5000/api/upload", data);
      formik.setFieldValue("profilePic", filename);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Edit your personal data</Title>
      <Form onSubmit={formik.handleSubmit}>
        <ImageContainer>
          <Subtitle>Photo:</Subtitle>
          <Image
            src={
              formik.values.profilePic
                ? publicFiles + formik.values.profilePic
                : UserPlaceholderImage
            }
          />
          <Input type="file" onChange={(e) => handleFile(e.target.files[0])} />
        </ImageContainer>
        <DataContainer>
          <Subtitle>Username:</Subtitle>
          <Input
            value={formik.values.username}
            onChange={formik.handleChange("username")}
          />
          <Subtitle>Email:</Subtitle>
          <Input
            value={formik.values.email}
            onChange={formik.handleChange("email")}
          />
        </DataContainer>
        <ButtonContainer>
          <SaveButton type="submit">Save</SaveButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AdminUser;
