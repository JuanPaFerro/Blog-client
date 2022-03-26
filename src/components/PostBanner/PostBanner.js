import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
export const Banner = styled(Link)`
  text-decoration: none;
  width: 80%;
  height: 100%;
  background-image: url(${({ background }) => background});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 5px;

  &:hover > div {
    background: rgba(0, 0, 0, 0.4);
    padding-top: 5px;
  }
`;
export const BannerInfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  flex-direction: column;
  padding-left: 2rem;
  padding-bottom: 10px;
  border-radius: 0 0 5px 5px;
  transition: 0.3s ease-in-out;
`;
export const PostTitle = styled.h2`
  color: white;
  margin: 10px 0;
`;
export const PostAuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserName = styled.span`
  margin-left: 1rem;
  color: white;
  font-size: 1.3rem;
`;
