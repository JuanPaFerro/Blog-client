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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      _id: id,
      username,
      email,
      profilePic,
    },
    onSubmit: async (values) => {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/users/${id}`,
        values
      );

      navigate("/user");
    },
  });

  return (
    <Container>
      <Title>Edit your personal data</Title>
      <Form onSubmit={formik.handleSubmit}>
        <ImageContainer>
          <Subtitle>Photo:</Subtitle>
          <Image
            src={
              formik.values.profilePic
                ? formik.values.profilePic
                : UserPlaceholderImage
            }
          />
          <Input
            type="text"
            value={formik.values.profilePic}
            onChange={formik.handleChange("profilePic")}
          />
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
