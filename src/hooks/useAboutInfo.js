import React, { useState } from "react";
import Image from "../assets/about.jpg";

export const useAboutInfo = () => {
  const [image, setImage] = useState(Image);
  const [description, setDescription] = useState([
    `I am a 26-year-old software engineer who graduated from University of Pinar del Rio in July 2020.`,
    `In September 2020 I started working at Desoft, one of the most important tech corporations on the country & Leaders at development of high-tech solutions for national and foreign companies`,
    `I’m currently working at Desoft as a Frontend Engineer although I am constantly developing new features for the backend side of a few projects, so I’m on my way to becoming a skilled full stack developer.`,
    `I love teamwork and I don't feel bad when I don't know something, I take it as an opportunity to learn. I always ask my colleagues for help and I am willing to give them mine whenever they need it. I think that together we grow faster`,
  ]);

  const [skills, setSkills] = useState({
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
  });

  return {image,description, skills}
};
