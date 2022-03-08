import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.content};
  color: ${({ theme }) => theme.content};
  padding: 10px 20px;
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
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme} theme={theme}>
      {theme.body === "#FBFBFE" ? " Dark 🌙" : "Light ⛅"}
    </Button>
  );
};
export default Toggle;
