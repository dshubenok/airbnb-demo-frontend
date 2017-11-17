import React from "react";
import styled from "styled-components";

import { BoldText, Text, Stars } from "../../UI";

export const CardText = Text.extend`padding: 8px 0 6px 0;`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 240px;
  max-width: 100%;
  margin-left: 16px;

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: 180px;
    margin-left: 0;
  }

  @media (min-width: 992px) {
    max-width: 229px;
    width: auto;
  }
`;

export const ListCards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Img = styled.img`width: 100%;`;

export const Card = props => (
  <Link>
    <Img src={props.src} alt={props.children} />
    <CardText>
      <BoldText>{props.price}</BoldText> {props.children}
    </CardText>
    <Stars count={props.count} text="reviews" />
  </Link>
);
