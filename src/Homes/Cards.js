import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

// import CardOriginal from "./Card";

import salentina from "./salentina.png";
import your from "./your.png";
import dreamy from "./dreamy.png";
import best from "./best.png";
import lussuoso from "./lussuoso.png";
import ins from "./ins.png";

import { Stars, Text, BoldText } from "../UI";

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const CardName = Text.extend`padding: 8px 0 6px 0;`;
const CardAbout = Text.extend`padding: 2px 0 6px 0;`;

const Img = styled.img`width: 100%;`;

const CardOrigin = props => (
  <Link className={props.className} href={props.href}>
    <Img src={props.src} alt={props.children} />
    <CardName>
      <BoldText>
        ${props.price} {props.children}
      </BoldText>
    </CardName>
    <CardAbout>
      {props.type} · {props.beds} {props.beds > 1 ? "beds" : "bed"}
    </CardAbout>
    <Stars count={props.count} text="· Superhost" />
  </Link>
);

const Wrapper = styled.div`margin: 4px 0px 0px;`;

const Card = styled(CardOrigin)`margin: 20px 0px;`;

export default () => (
  <Wrapper>
    <Row>
      <Col xs={12} md={6}>
        <Card
          price={82}
          src={salentina}
          count={97}
          type="Entire house"
          beds={9}
        >
          La Salentina, see, nature & relax
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card price={82} src={your} count={161} type="Entire house" beds={5}>
          Your private 3 bedr. riad and exclusi…
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Card
          price={200}
          src={dreamy}
          count={364}
          type="Entire threehouse"
          beds={1}
        >
          Dreamy Tropical Tree House
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card
          price={110}
          src={best}
          count={369}
          type="Entire apartment"
          beds={1}
        >
          Best location old town luxury loft
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Card
          price={83}
          src={lussuoso}
          count={105}
          type="Entire apartment"
          beds={6}
        >
          Lussuoso. Vista incantevole.
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card price={72} src={ins} count={221} type="Entire house" beds={3}>
          In the historical center of Lecce
        </Card>
      </Col>
    </Row>
  </Wrapper>
);
