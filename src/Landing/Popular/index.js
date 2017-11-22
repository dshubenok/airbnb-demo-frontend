import React from "react";

import { Grid, Row, Col } from "react-flexbox-grid";

import speakeasy from "./speakeasy.jpg";
import korean from "./korean.jpg";
import german from "./german.jpg";
import fine from "./fine.jpg";

import { Title, SeeAll } from "../../UI";
import { Card, Cards, CardsWrapper, PopularMoreButton } from "./styled";

export default () => (
  <Grid>
    <Row>
      <Col xs={9} sm={8}>
        <Title>Popular reservations around the world</Title>
      </Col>
      <Col xs={3} sm={4}>
        <SeeAll to="#all">See All</SeeAll>
      </Col>
    </Row>
    <CardsWrapper>
      <Row>
        <Cards>
          <Col xs={6} sm={4} md={3}>
            <Card src={speakeasy} price={60} name="Chumley's">
              Speakeasy
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card md={3} src={korean} price={50} name="Hanjan">
              Korean gastropub
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card src={german} price={55} name="Prime Meats">
              German american
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card src={fine} price={70} name="Seaprice">
              Fine seafood
            </Card>
          </Col>
          <PopularMoreButton />
        </Cards>
      </Row>
    </CardsWrapper>
  </Grid>
);
