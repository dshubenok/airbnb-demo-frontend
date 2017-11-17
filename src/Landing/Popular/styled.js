import React from "react";
import styled from "styled-components";

import { MoreButton } from "../../UI";

export const PopularMoreButton = MoreButton.extend`
  top: 22%;

  @media (min-width: 992px) {
    top: 25%;
  }
`;

export const TextTag = styled.p`
  margin: 0;
  font-family: inherit;
  font-weight: bold;
  line-height: 12px;
  font-size: 8px;
  padding: 12px 0 0 0;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 10px;
  }
`;

export const TextName = styled.p`
  margin: 0;
  font-family: inherit;
  font-weight: bold;
  line-height: 21px;
  font-size: 14px;
  padding: 2px 0 0 0;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

export const TextAbout = styled.p`
  margin: 0;
  font-family: inherit;
  font-weight: 300;
  line-height: 21px;
  font-size: 14px;
  padding: 4px 0 0 0;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

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
    <TextTag>{props.children}</TextTag>
    <TextName>{props.name}</TextName>
    <TextAbout>About {props.price} per person</TextAbout>
  </Link>
);

export const ListCards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
