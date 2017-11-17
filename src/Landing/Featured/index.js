import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import paris from "./paris.jpg";
import miami from "./miami.jpg";
import tokyo from "./tokyo.jpg";
import capetown from "./capetown.jpg";
import seoul from "./seoul.jpg";
import losangeles from "./losangeles.jpg";

import { MoreButton, SectionWrapper, Title } from "../../UI";
import { ListCards, Card } from "./styled";

export default () => (
  <SectionWrapper>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Title>Featured destinations</Title>
        </Col>
      </Row>
      <Row>
        <ListCards>
          <Col xs={4} sm={3} md={2}>
            <Card src={paris}>Paris</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={miami}>Miami</Card>
          </Col>
          <Col sm={3} md={2} className="hidden-xs">
            <Card src={tokyo}>Tokyo</Card>
          </Col>
          <Col xs={4} sm={3} md={2}>
            <Card src={capetown}>Cape town</Card>
          </Col>
          <Col md={2} className="hidden-xs hidden-sm">
            <Card src={seoul}>Seoul</Card>
          </Col>
          <Col md={2} className="hidden-xs hidden-sm">
            <Card src={losangeles}>Los Angeles</Card>
          </Col>
          <MoreButton />
        </ListCards>
      </Row>
    </Grid>
  </SectionWrapper>
);
