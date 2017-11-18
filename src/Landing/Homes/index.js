import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import salentina from "./salentina.jpg";
import your from "./your.jpg";
import dreamy from "./dreamy.jpg";

import { SectionWrapper, Title, SeeAll } from "../../UI";
import { ListCardsWrapper, ListCards, Card, HomeMoreButton } from "./styled";

export default () => (
  <SectionWrapper>
    <Grid fluid>
      <Row>
        <Col xs={8} md={12}>
          <Title>Homes</Title>
        </Col>
        <Col xs={4} className="hidden-md hidden-lg hidden-xl">
          <SeeAll href="#">See All</SeeAll>
        </Col>
      </Row>
      <ListCardsWrapper>
        <Row>
          <ListCards>
            <Col xs={8} sm={5} md={4}>
              <Card
                price="$82"
                src={salentina}
                count="97"
                type="Entire house"
                beds="9"
              >
                La Salentina, see, nature & relax
              </Card>
            </Col>
            <Col xs={8} sm={5} md={4}>
              <Card
                price="$82"
                src={your}
                count="161"
                type="Entire house"
                beds="5"
              >
                Your private 3 bedr. riad and exclusi…
              </Card>
            </Col>
            <Col xs={8} sm={5} md={4}>
              <Card
                price="$200"
                src={dreamy}
                count="364"
                type="Entire threehouse"
                beds="1"
              >
                Dreamy Tropical Tree House
              </Card>
            </Col>
            <HomeMoreButton />
          </ListCards>
        </Row>
      </ListCardsWrapper>
    </Grid>
  </SectionWrapper>
);
