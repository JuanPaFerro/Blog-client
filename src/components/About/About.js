import styled from "styled-components";

export const Separator = styled.div`
  width: 100px;
  height: 1px;
  background: ${({ theme }) => theme.clear};
  margin-bottom: 30px;
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
`;
export const AboutImage = styled.img`
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

export const AboutBioContainer = styled.div`
  color: ${({ theme }) => theme.title};
  margin: 30px 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  letter-spacing: 1px;
`;
export const AboutSkills = styled.div`
    background: ${({theme})=> theme.clear};
    width: 100vw;
    height: 100vh;
`