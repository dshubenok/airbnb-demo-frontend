import React from "react";

import { Grid, Row, Col } from "react-flexbox-grid";

import speakeasy from "./speakeasy.jpg";
import korean from "./korean.jpg";
import german from "./german.jpg";
import fine from "./fine.jpg";

import { SectionWrapper, Title, SeeAll } from "../UI";
import { ListCards, Card, PopularMoreButton } from "./styled";

export default () => (
  <SectionWrapper>
    <Grid fluid>
      <Row>
        <Col xs={9} sm={8} md={12} lg={12}>
          <Title>Popular reservations around the world</Title>
        </Col>
        <Col xs={3} sm={4} className="hidden-md hidden-lg hidden-xl">
          <SeeAll href="#">See All</SeeAll>
        </Col>
      </Row>
      <Row>
        <ListCards>
          <Col xs={6} sm={4} md={3}>
            <Card src={speakeasy} price="$60" name="Chumley's">
              Speakeasy
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card md={3} src={korean} price="$50" name="Hanjan">
              Korean gastropub
            </Card>
          </Col>
          <Col sm={4} md={3} className="hidden-xs">
            <Card src={german} price="$55" name="Prime Meats">
              German american
            </Card>
          </Col>
          <Col md={3} className="hidden-xs hidden-sm">
            <Card src={fine} price="$70" name="Seaprice">
              Fine seafood
            </Card>
          </Col>
          <PopularMoreButton />
        </ListCards>
      </Row>
    </Grid>
  </SectionWrapper>
);
