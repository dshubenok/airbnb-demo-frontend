import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import whale from "./whale.jpg";
import forest from "./forest.jpg";
import table from "./table.jpg";
import salsa from "./salsa.jpg";

import { SectionWrapper, Title, MoreButton, SeeAll } from "../UI";
import { ListCards, Card } from "./styled";

export default () => (
  <SectionWrapper>
    <Grid fluid>
      <Row>
        <Col xs={8} sm={8} md={12} lg={12}>
          <Title>Experiences</Title>
        </Col>
        <Col xs={4} sm={4} className="hidden-md hidden-lg hidden-xl">
          <SeeAll href="#">See All</SeeAll>
        </Col>
      </Row>
      <Row>
        <ListCards>
          <Col xs={6} sm={4} md={3}>
            <Card price="$29" src={forest} count={44}>
              Forest therapy
            </Card>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <Card price="$69" src={whale} count={46}>
              Whale watching
            </Card>
          </Col>
          <Col sm={4} md={3} className="hidden-xs">
            <Card price="$69" src={table} count={44}>
              Table Mountain Summit, Cable Car Down
            </Card>
          </Col>
          <Col md={3} className="hidden-xs hidden-sm">
            <Card price="$50" src={salsa} count={44}>
              Salsa Night
            </Card>
          </Col>
          <MoreButton />
        </ListCards>
      </Row>
    </Grid>
  </SectionWrapper>
);
