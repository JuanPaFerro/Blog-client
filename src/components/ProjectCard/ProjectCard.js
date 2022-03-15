import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

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
  width: 300px;
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
`;

export const CardBtn = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.container};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 0.4rem;
  transition: $transition;
  cursor: pointer;

  span {
    margin-left: 1rem;
    transition: $transition;
  }

  &:hover {
    background-color: ${({ theme }) => theme.main};

    span {
      margin-left: 1.5rem;
    }
  }
`;
