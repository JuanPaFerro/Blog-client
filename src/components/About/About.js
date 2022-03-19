import styled from "styled-components";
import { Link } from "react-router-dom";

export const Separator = styled.div`
  width: 100px;
  height: 1px;
  background: ${({ theme }) => theme.clear};
  margin: 0 auto 30px;
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.title};
  margin: 30px 0;
  font-size: 30px;
  text-align: center;
`;
export const Photo = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
export const ImageFooter = styled.h3`
  letter-spacing: 1px;
  margin: 0px;
  padding: 0px;
  font-size: 13px;
  color: ${({ theme }) => theme.title};
  &::after {
    content: "CUBA";
    font-size: 10px;
    color: ${({ theme }) => theme.content};
    margin-left: 5px;
  }
`;

export const BioContainer = styled.div`
  color: ${({ theme }) => theme.title};
  width: 100%;
  margin: 30px 30px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 1px;
  & > div {
    max-width: 50%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    div {
      max-width: 80%;
    }
  }
`;
export const DarkerSection = styled.div`
  background: ${({ theme }) => theme.container};
  width: 100%;
`;
export const Quote = styled.p`
  color: ${({ theme }) => theme.content};
  line-height: 30px;
  text-align: center;
`;

export const SkillCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
export const Skills = styled.div`
  color: ${({ theme }) => theme.content};
  margin: 0 50px;
`;
export const SkillItem = styled.li`
  width: 500px;
  margin: 20px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLinksContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const SocialLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.content};
  font-size: 40px;
  text-align: center;
  margin: 3rem 0;
  transition: 0.2s ease-in-out;
  span {
    font-size: 20px;
  }
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const EditAboutLink = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.content};
  transition: 0.5s;
  &:hover {
    border: 1px solid ${({ theme }) => theme.content};
  }
`;
