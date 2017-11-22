import styled from "styled-components";

import { MoreButton } from "../../UI";

export const HomeMoreButton = MoreButton.extend`
  top: 24%;

  @media (min-width: 992px) {
    top: 30%;
  }
`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  overflow: scroll;

  @media (min-width: 768px) {
    overflow: initial;
  }
`;
