import React from "react";
import styled from "styled-components";

import { BoldText, Text, Stars } from "../../UI";

export const CardName = Text.extend`padding: 8px 0px 6px;`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  max-width: 100%;
  margin-left: 16px;
  cursor: pointer;

  &:first-child {
    margin-left: 0px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Img = styled.img`width: 100%;`;

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
      <BoldText>${props.price}</BoldText> {props.children}
    </CardName>
    <Stars count={props.count} text="reviews" />
  </Link>
);
