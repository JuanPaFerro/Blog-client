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

export const NavBarDark = styled(NavBar)``;

export const TextLogo = styled(Link)`
  color: #222831;
`;
export const TextLogoDark = styled(TextLogo)`
  color: #eeeeee;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: #000;
`;
export const MenuItemDark = styled(MenuItem)`
  color: #eeeeee;
`;
