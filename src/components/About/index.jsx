import React from "react";
import {
  AboutContainer,
  AboutTitle,
  AboutImage,
  Separator,
  ImageFooter,
  AboutBioContainer,
  AboutSkills,
} from "./About";
import Image from "../../assets/about.jpg";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle id="about">ABOUT ME</AboutTitle>
      <Separator />
      <AboutImage src={Image} />
      <ImageFooter>JUAN PABLO FERRO</ImageFooter>
      <AboutBioContainer>
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
      </AboutBioContainer>
      <AboutSkills>
        <AboutTitle>MY SKILLS</AboutTitle>
        <Separator />
      </AboutSkills>
    </AboutContainer>
  );
};

export default About;
