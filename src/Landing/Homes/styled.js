import styled from "styled-components";

import { MoreButton } from "../../UI";

export const HomeNextButton = MoreButton.extend`
  top: 24%;

  @media screen and (min-width: 992px) {
    top: 30%;
  }
`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  overflow: scroll;

  @media screen and (min-width: 768px) {
    overflow: initial;
  }
`;
