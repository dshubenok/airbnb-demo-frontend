import React from "react";
import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

import logo from "./logo.svg";
import arrow from "./arrow.svg";

const Link = styled(RLink)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 43%;
    left: 37px;
    background: url(${arrow});
    width: 11px;
    height: 6px;
  }

  @media screen and (min-width: 992px) {
    &:after {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 28px;

  @media only screen and (min-width: 576px) {
    height: 30px;
  }
`;

export default () => (
  <Link to="/">
    <Logo src={logo} />
  </Link>
);
