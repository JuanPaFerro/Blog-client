import styled, { keyframes } from "styled-components";
import img from "../../assets/bg.jpg";

export const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-image: url(${img});
    filter: blur(4px);
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  z-index: 10;
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  color: #eff3f5;
  margin: 0;
`;
export const HeroText = styled.p`
  color: #eff3f5;
  margin: 5;
  font-size: 0.8rem;
`;

const arrowAnimation = keyframes`
  0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    }
`;

export const Arrow = styled.a`
  z-index: 10;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ArrowElement = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 3px solid #EFF3F5;
  border-right: 3px solid #EFF3F5;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${arrowAnimation} 2s infinite;
  &:nth-child(2) {
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    animation-delay: -0.4s;
  }
`;
