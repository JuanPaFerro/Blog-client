import React from "react";
import { useFormik } from "formik";
import { useAboutInfo } from "../../hooks/useAboutInfo";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import {
  GeneralContainer,
  ImageContainer,
  MDEditorContainer,
  Subtitle,
  Title,
  Image,
  Form,
  ContactContainer,
  ContactItem,
  SkillsContainer,
  Skills,
  SkillsCategory,
  SkillItem,
  AddButton,
  Input,
  DeleteButon,
  FlexRowContainer,
} from "./AdminAbout";
import { BsLinkedin, BsGithub, BsEnvelope, BsPhone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const AdminAbout = () => {
  const { about } = useAboutInfo();
  const navigate = useNavigate();
  const { _id, image, description, skills, phone, email, linkedin, github } =
    about;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: image || "",
      description: description || "",
      skills: skills || "",
      phone: phone || "",
      email: email || "",
      linkedin: linkedin || "",
      github: github || "",
    },
    onSubmit: async (values) => {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/about/${_id}`,
        values
      );
      navigate(`/`);
    },
  });

  const handleSkillChange = (event, category, index, type) => {
    const newSkills = formik.values.skills;
    if (type === "level") {
      newSkills[0][category][index].level = Number(event.target.value);
    } else if (type === "name") {
      newSkills[0][category][index].name = Number(event.target.value);
    }
    formik.setFieldValue("skills", newSkills);
  };
  const addSkill = (category) => {
    const newSkills = formik.values.skills;
    const name = document.getElementById(`${category}-name`).value;
    const level = document.getElementById(`${category}-level`).value;

    if (name.length > 0 && level > 0) {
      newSkills[0][category].push({ name, level });
      formik.setFieldValue("skills", newSkills);

      document.getElementById(`${category}-name`).value = "";
      document.getElementById(`${category}-level`).value = 0;
    }
  };
  const addCategory = () => {
    const newSkills = formik.values.skills;
    const name = document.getElementById("new-skill-category").value;
    newSkills[0][name] = [];
    formik.setFieldValue("skills", newSkills);
  };
  const deleteCategory = (category) => {
    const newSkills = formik.values.skills;
    delete newSkills[0][category];
    formik.setFieldValue("skills", newSkills);
  };
  const deleteSkill = (category, index) => {
    const newSkills = formik.values.skills;

    let firstHalf = newSkills[0][category].slice(0, index);
    let secondHalf = newSkills[0][category].slice(index + 1);

    newSkills[0][category] = [...firstHalf, ...secondHalf];

    formik.setFieldValue("skills", newSkills);
  };

  return (
    <GeneralContainer>
      <Title>Edit your personal Data</Title>
      <Form onSubmit={formik.handleSubmit}>
        <ImageContainer>
          <Subtitle>Photo</Subtitle>
          <Image src={formik.values.image && formik.values.image} />
          <Input type="text" value={formik.values.image} onChange={formik.handleChange("image")} />
        </ImageContainer>
        <MDEditorContainer>
          <Subtitle>Description</Subtitle>
          <MDEditor
            value={formik.values.description}
            height="500"
            onChange={formik.handleChange("description")}
          />
        </MDEditorContainer>

        <ContactContainer>
          <Subtitle>Contact Info</Subtitle>
          <div>
            <ContactItem>
              <BsPhone />
              <Input
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange("phone")}
              />
            </ContactItem>
            <ContactItem>
              <BsEnvelope />
              <Input
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              />
            </ContactItem>
            <ContactItem>
              <BsLinkedin />
              <Input
                type="text"
                value={formik.values.linkedin}
                onChange={formik.handleChange("linkedin")}
              />
            </ContactItem>
            <ContactItem>
              <BsGithub />
              <Input
                type="text"
                value={formik.values.github}
                onChange={formik.handleChange("github")}
              />
            </ContactItem>
          </div>
        </ContactContainer>

        <SkillsContainer>
          <Subtitle>Skills</Subtitle>
          <SkillItem>
            <Input
              type="text"
              id="new-skill-category"
              placeholder="NEW CATEGORY"
            />
            <AddButton type="button" onClick={addCategory}>
              Add
            </AddButton>
          </SkillItem>

          <Skills>
            {formik.values.skills &&
              Object.entries(formik.values.skills[0]).map((category) => (
                <div key={category[0]}>
                  <SkillsCategory key={category[0]}>
                    <FlexRowContainer>
                      <Subtitle>{category[0]}</Subtitle>
                      <DeleteButon
                        type="button"
                        onClick={() => deleteCategory(category[0])}
                      >
                        -
                      </DeleteButon>
                    </FlexRowContainer>
                    {category[1].map((el, index) => (
                      <SkillItem key={index}>
                        <Input
                          type="text"
                          value={
                            formik.values.skills[0][category[0]][index].name
                          }
                          onChange={(event) =>
                            handleSkillChange(event, category[0], index, "name")
                          }
                        />
                        <Input
                          type="number"
                          step="0.1"
                          max={5}
                          min={1}
                          value={
                            formik.values.skills[0][category[0]][index].level
                          }
                          onChange={(event) =>
                            handleSkillChange(
                              event,
                              category[0],
                              index,
                              "level"
                            )
                          }
                        />
                        <DeleteButon
                          type="button"
                          onClick={() => deleteSkill(category[0], index)}
                        >
                          Delete
                        </DeleteButon>
                      </SkillItem>
                    ))}
                  </SkillsCategory>
                  <>
                    <SkillItem>
                      <Input
                        type="text"
                        placeholder="skill name"
                        id={`${category[0]}-name`}
                      />
                      <Input
                        type="number"
                        placeholder="skill level"
                        max={5}
                        min={1}
                        step="0.1"
                        id={`${category[0]}-level`}
                      />
                      <AddButton
                        type="button"
                        onClick={() => addSkill(category[0])}
                      >
                        Add
                      </AddButton>
                    </SkillItem>
                  </>
                </div>
              ))}
          </Skills>
        </SkillsContainer>

        <AddButton style={{ margin: "10px auto" }} type="submit">
          Save
        </AddButton>
      </Form>
    </GeneralContainer>
  );
};
