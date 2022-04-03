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

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Input = styled.input`
  margin: 15px 0;
  max-width: 200px;
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
  width: 80px;
  height: 30px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.body};
  }
`;
export const DeleteButton = styled.button`
  width: 80px;
  height: 30px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.body};
  color: red;
  border: 2px solid red;
  border-radius: 5px;
  margin-left: 20px;

  &:hover {
    background-color: red;
    color: ${({ theme }) => theme.body};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
