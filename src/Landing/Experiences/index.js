import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import whale from "./whale.jpg";
import forest from "./forest.jpg";
import table from "./table.jpg";
import salsa from "./salsa.jpg";

import { Title, MoreButton, SeeAll } from "../../UI";
import { CardsWrapper, Card, Cards } from "./styled";

export default () => (
  <Grid>
    <Row>
      <Col xs={8}>
        <Title>Experiences</Title>
      </Col>
      <Col xs={4}>
        <SeeAll to="#all">See All</SeeAll>
      </Col>
    </Row>
    <CardsWrapper>
      <Row>
        <Cards>
          <Col xs={6} sm={4} md={3}>
            <Card price={29} src={forest} count={44}>
              Forest therapy
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card price={69} src={whale} count={46}>
              Whale watching
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card price={69} src={table} count={44}>
              Table Mountain Summit, Cable Car Down
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card price={50} src={salsa} count={44}>
              Salsa Night
            </Card>
          </Col>
          <MoreButton />
        </Cards>
      </Row>
    </CardsWrapper>
  </Grid>
);
