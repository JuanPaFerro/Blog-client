import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;
export const ImageContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
export const DescContainer = styled.div`
  color: ${({ theme }) => theme.content};

`;
export const AuthorInfoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px){
    width: 100% ;
    justify-content: space-between ;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 970px){
    flex-direction:column ;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.title};
`;
export const Image = styled.img`
  width: 100%;
  max-height: 300px ;
  object-fit: cover;
`;
export const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-left: 1.5rem;
  border-radius: 50%;
`;
export const AuthorName = styled.span`
  color: ${({ theme }) => theme.content};
  font-weight: bold;
`;
export const EditButton = styled(Link)`
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
