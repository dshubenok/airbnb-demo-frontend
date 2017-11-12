import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";

import { SectionWrapper, Title } from "../UI";
import { Scrolling, ExploreCards, Link, Img, CardTitle } from "./styled";

export default () => (
  <SectionWrapper>
    <Grid fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Title>Explore Airbnb</Title>
        </Col>
      </Row>
      <Scrolling>
        <Row>
          <ExploreCards>
            <Col xs={6} sm={5} md={4}>
              <Link href="#">
                <Img src={homes} />
                <CardTitle>Homes</CardTitle>
              </Link>
            </Col>
            <Col xs={6} sm={5} md={4}>
              <Link href="#">
                <Img src={experiences} />
                <CardTitle>Experiences</CardTitle>
              </Link>
            </Col>
            <Col xs={6} sm={5} md={4}>
              <Link href="#">
                <Img src={restaurants} />
                <CardTitle>Restaurants</CardTitle>
              </Link>
            </Col>
          </ExploreCards>
        </Row>
      </Scrolling>
    </Grid>
  </SectionWrapper>
);
