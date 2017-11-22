import React from "react";
import styled from "styled-components";

import stars from "./stars.svg";
import more from "./more.png";
import arrow from "./arrow.svg";

export const Title = styled.h3`
  font-family: inherit;
  font-weight: 700;
  line-height: 34px;
  font-size: 24px;
  color: #383838;
  margin: 40px 0 16px 0;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

export const BoldText = styled.span`
  font-family: inherit;
  font-weight: 700;
`;

export const Text = styled.p`
  font-family: inherit;
  font-weight: 300;
  margin: 0;
  line-height: 18px;
  font-size: 13px;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

export const MoreButton = styled.img.attrs({
  src: more
})`
  position: absolute;
  z-index: 2;
  right: -15px;
  top: 35%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const StarsImage = styled.img.attrs({
  src: stars
})`
  padding-right: 4px;
`;

export const Stars = props => (
  <StarsText>
    <StarsImage />
    {props.count} {props.text}
  </StarsText>
);

export const StarsText = styled.p`
  padding: 0;
  margin: 0;
  font-family: inherit;
  line-height: 14px;
  font-size: 12px;
`;

export const SeeAll = styled.a`
  color: inherit;
  text-decoration: none;
  margin: 14px 2px 0px 0px;
  display: inline-block;
  padding-right: 10px;
  background: url(${arrow});
  background-position: 100% 50%;
  background-repeat: no-repeat;
  float: right;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 12px;

  @media (min-width: 576px) {
    font-size: 14px;
    padding-right: 15px;
  }
`;
