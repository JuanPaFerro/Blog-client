import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.nav`
  height: 50px;
  margin: 0px;
  padding: 0 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MenuItem = styled(Link)`
  text-decoration: none;
  background-color: #fff;
  color: #000;
  margin-right: 10px;
`;
export const ToggleDarkModeButton = styled.button`
`


