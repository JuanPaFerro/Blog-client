import React from "react";
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
  SocialLink,
} from "./About";
import ProjectCard from "../ProjectCard";
import Image from "../../assets/about.jpg";
import { BsLinkedin, BsGithub, BsEnvelope, BsPhone } from "react-icons/bs";

const About = () => {
  const skills = {
    "PROGRAMMING LANGUAGES": [
      { name: "Javascript", level: 4 },
      { name: "Python", level: 3 },
      { name: "PHP", level: 3 },
    ],
    "WEB FRAMEWORKS": [
      { name: "React", level: 4 },
      { name: "Angular", level: 4 },
      { name: "Node", level: 4 },
      { name: "Express", level: 4 },
      { name: "Tailwind", level: 2.5 },
      { name: "Bootstrap", level: 3 },
    ],
    DATABASE: [
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "GraphQl", level: 2.5 },
    ],
    "UNIT TEST FRAMEWORKS": [{ name: "Jest", level: 3 }],
    "CODE MANAGEMENT TOOLS": [{ name: "GIT", level: 3.5 }],
  };

  return (
    <AboutContainer id="about">
      <Title>ABOUT ME</Title>
      <Separator />
      <BioContainer>
        <div>
          <Photo src={Image} />
          <ImageFooter>JUAN PABLO FERRO</ImageFooter>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            nunc lobortis mattis aliquam faucibus. Gravida arcu ac tortor
            dignissim convallis. Et sollicitudin ac orci phasellus egestas
            tellus rutrum tellus pellentesque. In nisl nisi scelerisque eu
            ultrices vitae. Sapien nec sagittis aliquam malesuada bibendum arcu.
            Vulputate eu scelerisque felis imperdiet proin fermentum. Id aliquet
            risus feugiat in ante metus dictum at. Nisl pretium fusce id velit
            ut. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim.
          </p>
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
        {Object.entries(skills).map((category) => (
          <Skills>
            <strong>{category[0]}</strong>
            <SkillCategory>
              {category[1].map((el) => (
                <>
                  <SkillItem>
                    <span>{el.name}</span>
                    <StarsRating stars={el.level} />
                  </SkillItem>
                </>
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
      <ProjectCard />
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
            <span>+53 54605861</span>
          </SocialLink>
          <SocialLink>
            <BsEnvelope />
            <br />
            <span>juanpabloferroarroyo</span>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/juan-pablo-ferro-a55a58151/">
            <BsLinkedin />
            <br />
            <span>Juan Pablo Ferro</span>
          </SocialLink>
          <SocialLink href="https://github.com/JuanPaFerro">
            <BsGithub />
            <br />
            <span>JuanPaFerro</span>
          </SocialLink>
        </SocialLinksContainer>
      </DarkerSection>
    </AboutContainer>
  );
};

export default About;
