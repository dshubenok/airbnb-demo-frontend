import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import paris from "./paris.jpg";
import miami from "./miami.jpg";
import tokyo from "./tokyo.jpg";
import capetown from "./capetown.jpg";
import seoul from "./seoul.jpg";
import losangeles from "./losangeles.jpg";

import { MoreButton, Title } from "../../UI";
import { Card, Cards, CardsWrapper } from "./styled";

export default () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Title>Featured destinations</Title>
      </Col>
    </Row>
    <CardsWrapper>
      <Row>
        <Cards>
          <Col xs={4} sm={3} md={2}>
            <Card src={paris}>Paris</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={miami}>Miami</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={tokyo}>Tokyo</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={capetown}>Cape town</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={seoul}>Seoul</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={losangeles}>Los Angeles</Card>
          </Col>
          <MoreButton />
        </Cards>
      </Row>
    </CardsWrapper>
  </Grid>
);
