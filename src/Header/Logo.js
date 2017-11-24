import React from "react";
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import logo from "./logo.svg";
import arrowDown from "./arrowDown.svg";

const Link = styled(ReactLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 43%;
    left: 37px;
    background: url(${arrowDown});
    width: 11px;
    height: 6px;
  }

  @media (min-width: 992px) {
    &:after {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 28px;

  @media only (min-width: 576px) {
    height: 30px;
  }
`;

export default () => (
  <Link to="/">
    <Logo src={logo} />
  </Link>
);
