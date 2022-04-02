import styled from "styled-components";
import img from "../../assets/bg.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 60%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;

  @media (max-width: 576px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  padding: 5px 2.5px;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.title};
  width: 100%;
  text-align: left;
  padding-left: 1rem;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.4);
  height: 2rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.main};
  color: whitesmoke;
  font-weight: bold;
  padding-left: 5px;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #2c3d48;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  color: whitesmoke;
  font-size: 18px;
  font-weight: bold;
  opacity:95% ;
  cursor: pointer ;
`;
export const AlternateAuth = styled.span`
cursor: pointer ;
`