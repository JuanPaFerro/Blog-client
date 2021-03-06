import styled from "styled-components";
import { Link } from "react-router-dom";

export const Grid = styled.div`
  display: grid;
  width: 80%;
  margin: 0 10%;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @include media(large) {
    grid-gap: 3rem;
  }
`;
export const GridItem = styled.div`
  max-width: 300px;
`;
export const GridItemLink = styled(Link)`
  max-width: 300px;
  text-decoration: none;
`;

export const Card = styled.div`
  margin: 2rem auto;
  width: 300px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 300px;
  height: 160px;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.title};
`;

export const CardText = styled.p`
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 1.4;
  color: ${({ theme }) => theme.content};
  margin-bottom: 1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const CardBtn = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
  padding: 0.5rem;
  color: ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.container};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 0.4rem;
  transition: $transition;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.main};
  }
`;
