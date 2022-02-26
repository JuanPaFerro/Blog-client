import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  position: sticky;
  background: ${({ theme }) => theme.body};
  top: 0;
  height: 50px;
  margin: 0px;
  padding: 0 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const TextLogo = styled(Link)`
  color: ${({ theme }) => theme.title};
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
  margin-right: 10px;
  padding: 10px 20px;
  text-decoration: none;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.content};
  transition: 0.5s;
  &:hover {
    border: 2px solid ${({ theme }) => theme.content};
  }
`;
