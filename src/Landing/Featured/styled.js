import React from "react";
import styled from "styled-components";

import { Text, BoldText } from "../../UI";

export const CardName = Text.extend`padding: 8px 0px 6px;`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 176px;
  max-width: 100%;
  margin-left: 16px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    max-width: 117px;
    margin: 0px;
  }

  @media screen and (min-width: 992px) {
    max-width: initial;
  }
`;

export const Img = styled.img`width: 100%;`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardsWrapper = styled.div`
  overflow: scroll;

  @media screen and (min-width: 768px) {
    overflow: initial;
  }
`;

export const Card = props => (
  <Link>
    <Img src={props.src} alt={props.children} />
    <CardName>
      <BoldText>{props.children}</BoldText>
    </CardName>
  </Link>
);
