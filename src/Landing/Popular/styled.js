import React from "react";
import styled from "styled-components";

import { MoreButton } from "../../UI";

export const PopularNextButton = MoreButton.extend`
  top: 22%;

  @media screen and (min-width: 992px) {
    top: 25%;
  }

  @media screen and (min-width: 1200px) {
    top: 30%;
  }
`;

export const CardTag = styled.p`
  margin: 0px;
  font-family: inherit;
  font-weight: bold;
  line-height: 12px;
  font-size: 8px;
  padding: 12px 0px 0px 0px;
  text-transform: uppercase;

  @media only screen and (min-width: 576px) {
    font-size: 10px;
  }
`;

export const CardName = styled.p`
  margin: 0px;
  font-family: inherit;
  font-weight: bold;
  line-height: 21px;
  font-size: 14px;
  padding: 2px 0px 0px 0px;

  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

export const CardAbout = styled.p`
  margin: 0px;
  font-family: inherit;
  font-weight: 300;
  line-height: 21px;
  font-size: 14px;
  padding: 4px 0px 0px 0px;

  @media only screen and (min-width: 576px) {
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
  cursor: pointer;

  &:first-child {
    margin-left: 0px;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    max-width: 180px;
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
    <CardTag>{props.children}</CardTag>
    <CardName>{props.name}</CardName>
    <CardAbout>About ${props.price} per person</CardAbout>
  </Link>
);
