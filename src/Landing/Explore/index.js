import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";

import { Title } from "../../UI";
import { Card, Cards, CardsWrapper } from "./styled";

export default () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Title>Explore Airbnb</Title>
      </Col>
    </Row>
    <CardsWrapper>
      <Row>
        <Cards>
          <Col xs={6} sm={5} md={4}>
            <Card src={homes} name="Homes" to="/homes" />
          </Col>
          <Col xs={6} sm={5} md={4}>
            <Card src={experiences} name="Experiences" to="#exp" />
          </Col>
          <Col xs={6} sm={5} md={4}>
            <Card src={restaurants} name="Restaurants" to="#rest" />
          </Col>
        </Cards>
      </Row>
    </CardsWrapper>
  </Grid>
);
