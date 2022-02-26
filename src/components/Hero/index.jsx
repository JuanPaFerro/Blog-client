import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroText,
  Arrow,
  ArrowElement,
} from "./Hero";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>Hello, my name is Juan Pablo Ferro and I am</HeroText>
        <HeroTitle>SOFTWARE ENGINEER</HeroTitle>
        <HeroText>creating amazing web applications</HeroText>
      </HeroContent>
      <Arrow href="#about">
        <ArrowElement />
        <ArrowElement />
        <ArrowElement />
      </Arrow>
    </HeroContainer>
  );
};
