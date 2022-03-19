import styled from "styled-components";
import { Link } from "react-router-dom";

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @include media(large) {
    grid-gap: 3rem;
  }
`;

export const AddButton = styled(Link)`
`;
