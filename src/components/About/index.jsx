import React, { useContext } from "react";
import StarsRating from "../StarsRating";
import {
  AboutContainer,
  Title,
  Photo,
  Separator,
  ImageFooter,
  BioContainer,
  DarkerSection,
  Quote,
  SkillCategory,
  Skills,
  SkillItem,
  SocialLinksContainer,
  EditAboutLink,
  SocialLink,
} from "./About";
import Projects from "../Projects";
import { Context } from "../../Context";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsPhone,
  BsPencil,
} from "react-icons/bs";
import { useAboutInfo } from "../../hooks/useAboutInfo";
import MDEditor from "@uiw/react-md-editor";

const About = () => {
  const { about, loading } = useAboutInfo();
  const { image, description, skills, phone, email, linkedin, github } = about;
  const publicFiles = "http://localhost:5000/images/";
  const { isAuth } = useContext(Context);

  return (
    <AboutContainer id="about">
      {isAuth && window.sessionStorage.getItem("role") === "1" && (
        <EditAboutLink to="/admin/about">
          <BsPencil /> Edit
        </EditAboutLink>
      )}

      <Title>ABOUT ME</Title>
      <Separator />
      <BioContainer>
        <div>
          <Photo src={image ? publicFiles + image : ""} />
          <ImageFooter>JUAN PABLO FERRO</ImageFooter>
        </div>
        <div>
          {loading ? "loading" : <MDEditor.Markdown source={description} />}
        </div>
      </BioContainer>
      <DarkerSection>
        <Title>MY SKILLS</Title>
        <Separator />
        <Quote>
          "We cannot solve our problems with the same thinking we used when we
          created them."
          <br />
          -Albert Einstein
        </Quote>
        {loading
          ? "loading"
          : skills &&
            Object.entries(skills[0]).map((category) => (
              <Skills key={category[0]}>
                <strong>{category[0]}</strong>
                <SkillCategory>
                  {category[1].map((el, index) => (
                    <SkillItem key={index}>
                      <span>{el.name}</span>
                      <StarsRating stars={el.level} />
                    </SkillItem>
                  ))}
                </SkillCategory>
              </Skills>
            ))}
      </DarkerSection>
      <Title>PROJECTS</Title>
      <Separator />
      <Quote>
        Listed below are all the projects I was involved in during my working
        period at each company with a brief description of the software.
        <br />
        All these projects are property of each company.
      </Quote>
      <Projects />
      <DarkerSection>
        <Title>GET IN TOUCH</Title>
        <Separator />
        <Quote>
          "Quality is more important than quantity. One home run is much better
          than two doubles."
          <br />
          -Steve Jobs
        </Quote>
        <SocialLinksContainer>
          <SocialLink>
            <BsPhone />
            <br />
            <span>{loading ? "loading" : phone}</span>
          </SocialLink>
          <SocialLink>
            <BsEnvelope />
            <br />
            <span>{loading ? "loading" : email}</span>
          </SocialLink>
          <SocialLink href={loading ? "" : linkedin}>
            <BsLinkedin />
            <br />
            <span>{loading ? "loading" : linkedin}</span>
          </SocialLink>
          <SocialLink href={loading ? "" : github}>
            <BsGithub />
            <br />
            <span>{loading ? "loading" : github}</span>
          </SocialLink>
        </SocialLinksContainer>
      </DarkerSection>
    </AboutContainer>
  );
};

export default About;
