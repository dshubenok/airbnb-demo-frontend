import React from "react";
import styled from "styled-components";

import { BoldText, Text, Stars, MoreButton } from "../../UI";

export const HomeMoreButton = MoreButton.extend`
  top: 24%;

  @media (min-width: 992px) {
    top: 30%;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BlockTitle = Text.extend`padding: 8px 0 6px 0;`;
export const BlockAbout = Text.extend`padding: 2px 0 6px 0;`;

export const ListCards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.img`max-width: 100%;`;

export const Card = props => (
  <Link href={props.href}>
    <Img src={props.src} alt={props.children} />
    <BlockTitle>
      <BoldText>
        {props.price} {props.children}
      </BoldText>
    </BlockTitle>
    <BlockAbout>
      {props.type} · {props.beds} {props.beds > 1 ? "beds" : "bed"}
    </BlockAbout>
    <Stars count={props.count} text="· Superhost" />
  </Link>
);

export const ListCardsWrapper = styled.div`
  overflow: scroll;

  @media (min-width: 768px) {
    overflow: initial;
  }
`;
