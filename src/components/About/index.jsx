import React from "react";
import StarsRating from "../StarsRating";
import {
  AboutContainer,
  AboutTitle,
  Photo,
  Separator,
  ImageFooter,
  BioContainer,
  SkillsSection,
  Quote,
  SkillCategory,
  Skills,
  SkillItem,
} from "./About";
import Image from "../../assets/about.jpg";

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
    <AboutContainer>
      <AboutTitle id="about">ABOUT ME</AboutTitle>
      <Separator />
      <Photo src={Image} />
      <ImageFooter>JUAN PABLO FERRO</ImageFooter>
      <BioContainer>
        <strong>Bio:</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc
          lobortis mattis aliquam faucibus. Gravida arcu ac tortor dignissim
          convallis. Et sollicitudin ac orci phasellus egestas tellus rutrum
          tellus pellentesque. In nisl nisi scelerisque eu ultrices vitae.
          Sapien nec sagittis aliquam malesuada bibendum arcu. Vulputate eu
          scelerisque felis imperdiet proin fermentum. Id aliquet risus feugiat
          in ante metus dictum at. Nisl pretium fusce id velit ut. Dictumst
          vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
        </p>
        <p>
          Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Purus
          non enim praesent elementum facilisis leo vel fringilla est. Eu
          ultrices vitae auctor eu augue ut lectus. Lectus sit amet est placerat
          in egestas. Felis donec et odio pellentesque diam volutpat commodo.
          Ipsum a arcu cursus vitae. Odio euismod lacinia at quis risus sed
          vulputate. Pellentesque habitant morbi tristique senectus et netus.
          Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
          Tincidunt lobortis feugiat vivamus at augue eget arcu. Ipsum a arcu
          cursus vitae congue mauris rhoncus. Viverra mauris in aliquam sem
          fringilla ut morbi. Suspendisse interdum consectetur libero id
          faucibus nisl tincidunt. Vehicula ipsum a arcu cursus vitae congue
          mauris rhoncus aenean. Accumsan tortor posuere ac ut consequat semper.
        </p>
      </BioContainer>
      <SkillsSection>
        <AboutTitle>MY SKILLS</AboutTitle>
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
      </SkillsSection>
    </AboutContainer>
  );
};

export default About;
