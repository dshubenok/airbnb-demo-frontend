import React from "react";
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import { Stars, Text, BoldText } from "../UI";

const Link = styled(ReactLink)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const Name = Text.extend`padding: 8px 0 0 0;`;

const About = Text.extend`
  padding: 2px 0 6px 0;
  font-size: 12px;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

const Img = styled.img`width: 100%;`;

export default props => (
  <Link to={props.to} className={props.className}>
    <Img src={props.src} alt={props.children} />
    <Name>
      <BoldText>
        ${props.price} {props.children}
      </BoldText>
    </Name>
    <About>
      {props.type} · {props.beds} {props.beds > 1 ? "beds" : "bed"}
    </About>
    <Stars count={props.count} text="· Superhost" />
  </Link>
);
