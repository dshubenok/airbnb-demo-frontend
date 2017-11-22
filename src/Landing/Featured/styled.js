import React from "react";
import styled from "styled-components";

import { Text, BoldText } from "../UI";

export const CardText = Text.extend`padding: 8px 0 6px 0;`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 176px;
  max-width: 100%;
  margin-left: 16px;

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    width: auto;
    max-width: 117px;
    margin: 0;
  }

  @media (min-width: 992px) {
    max-width: initial;
  }
`;

export const Img = styled.img`width: 100%;`;

export const Card = props => (
  <Link>
    <Img src={props.src} alt={props.children} />
    <CardText>
      <BoldText>{props.children}</BoldText>
    </CardText>
  </Link>
);

export const ListCards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
