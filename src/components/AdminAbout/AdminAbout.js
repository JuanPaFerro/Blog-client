import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.title};
`;
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.title};
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.content};
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 100px;
`;

export const MDEditorContainer = styled.div`
  width: 70%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  color: ${({ theme }) => theme.content};

  &:hover {
    color: ${({ theme }) => theme.main};

    & > input {
      border: 2px solid ${({ theme }) => theme.main};
    }
  }
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

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Skills = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SkillsCategory = styled.div``;

export const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 0.4fr;
  grid-column-gap: 10px;
  align-items: center;
`;

export const AddButton = styled.button`
  width: 80px;
  height: 30px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.main};
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.title};
  }
`;
export const DeleteButon = styled.button`
  width: 80px;
  height: 30px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.body};
  color: #880000;
  border: 2px solid #880000;
  border-radius: 5px;

  &:hover {
    background-color: #880000;
    color: white;
  }
`;
export const FlexRowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
