import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerImage from "../../assets/post.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 130px);
`;

export const ProfilePicContainer = styled.div`
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 125px;
`;

export const InfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 2rem;
`;

export const InfoText = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.title};
  padding: 1rem;
`;
export const InfoRoleLabel = styled.div`
  background-color: ${({ isAdmin }) =>
    isAdmin ? "rgba(0, 200, 80, 0.9)" : "rgba(50, 120, 255, 0.9)"};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  width: fit-content;
  margin-left: 1rem;
  color: ${({ theme }) => theme.body};
`;

export const ProfilePic = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  position: relative;
  bottom: -75px;
  border-radius: 50%;
`;

export const LogoutButton = styled.button`
  background-color: rgba(255, 80, 80, 0.9);
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid;
  color: ${({ theme }) => theme.body};
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const EditLink = styled(Link)`
  margin-left: 1rem ;
  padding: 5px 10px;
  width:fit-content ;
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
