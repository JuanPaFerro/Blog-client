import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1.5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.title};
`;
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.title};
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.content};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const MDContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Image = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const Input = styled.input`
  margin: 15px 0;
  background-color: transparent;
  opacity: 60%;
  border: 2px solid ${({ theme }) => theme.content};
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.content};

  &:hover {
    border: 2px solid ${({ theme }) => theme.main};
  }
`;

export const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.content};
  color: ${({ theme }) => theme.content};
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.title};
    color: ${({ theme }) => theme.body};
  }
`;
