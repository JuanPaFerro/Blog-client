import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.title};
`;
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.title};
`;

export const MDContainer = styled.div`
  width: 72%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PostTitleContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  flex-direction: column;
`;
export const PostInput = styled.input`
  margin: 15px 0;
  background-color: transparent;
  opacity: 60%;
  border: 2px solid ${({ theme }) => theme.title};
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.title};

  &:hover {
    border: 2px solid ${({ theme }) => theme.main};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Banner = styled.div`
  text-decoration: none;
  width: 80vw;
  height: 50vh;
  background-image: url(${({ background }) => background});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 5px;
`;
export const BannerInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 5px 5px;
  transition: 0.3s ease-in-out;
  padding: .7rem  ;
`;
export const UserImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserName = styled.span`
  margin-left: 1rem;
  color: white;
  font-size: 1.5rem;
`;
