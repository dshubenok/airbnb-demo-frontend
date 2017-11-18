import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import CardOriginal from "./Card";

import salentina from "./salentina.png";
import your from "./your.png";
import dreamy from "./dreamy.png";
import best from "./best.png";
import lussuoso from "./lussuoso.png";
import ins from "./ins.png";

const Wrapper = styled.div`
  margin: 12px 0px 0px;

  @media screen and (min-width: 768px) {
    margin: 4px 0px 0px;
  }
`;

const Card = styled(CardOriginal)`
  margin: 12px 0px;

  @media screen and (min-width: 576px) {
    margin: 20px 0px;
  }
`;

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
          to="#"
        >
          La Salentina, see, nature & relax
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card
          price={82}
          src={your}
          count={161}
          type="Entire house"
          beds={5}
          to="#"
        >
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
          to="#"
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
          to="#"
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
          to="#"
        >
          Lussuoso. Vista incantevole.
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card
          price={72}
          src={ins}
          count={221}
          type="Entire house"
          beds={3}
          to="#"
        >
          In the historical center of Lecce
        </Card>
      </Col>
    </Row>
  </Wrapper>
);
