import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import salentina from "./salentina.jpg";
import your from "./your.jpg";
import dreamy from "./dreamy.jpg";

import { Title, SeeAll } from "../../UI";
import { CardsWrapper, Cards, HomeMoreButton } from "./styled";
import Card from "../../Homes/Card";

export default () => (
  <Grid>
    <Row>
      <Col xs={8}>
        <Title>Homes</Title>
      </Col>
      <Col xs={4}>
        <SeeAll to="/homes">See All</SeeAll>
      </Col>
    </Row>
    <CardsWrapper>
      <Row>
        <Cards>
          <Col xs={8} sm={5} md={4}>
            <Card
              price={82}
              src={salentina}
              count={97}
              type="Entire house"
              beds={9}
              to="/homes"
            >
              La Salentina, see, nature & relax
            </Card>
          </Col>
          <Col xs={8} sm={5} md={4}>
            <Card
              price={82}
              src={your}
              count={161}
              type="Entire house"
              beds={5}
              to="/homes"
            >
              Your private 3 bedr. riad and exclusi…
            </Card>
          </Col>
          <Col xs={8} sm={5} md={4}>
            <Card
              price={200}
              src={dreamy}
              count={364}
              type="Entire threehouse"
              beds={1}
              to="/homes"
            >
              Dreamy Tropical Tree House
            </Card>
          </Col>
          <HomeMoreButton />
        </Cards>
      </Row>
    </CardsWrapper>
  </Grid>
);
