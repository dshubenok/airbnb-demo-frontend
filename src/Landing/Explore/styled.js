import React from "react";
import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

export const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Link = styled(RLink)`
  display: flex;
  background: #ffffff;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

export const CardName = styled.p`
  padding-left: 0px;
  font-family: inherit;
  font-size: 17px;
  font-weight: 700;
  color: #383838;

  @media only screen and (min-width: 576px) {
    padding-left: 24px;
  }
`;

export const Img = styled.img`
  width: 100%;

  @media only screen and (min-width: 576px) {
    width: auto;
  }
`;

export const CardsWrapper = styled.div`
  overflow: scroll;

  @media screen and (min-width: 768px) {
    overflow: initial;
  }
`;

export const Card = props => (
  <Link to={props.to}>
    <Img src={props.src} alt={props.name} />
    <CardName>{props.name}</CardName>
  </Link>
);
