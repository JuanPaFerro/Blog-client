import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 5rem;
    background-color: ${(theme)=> theme.container};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({theme})=> theme.content};
`