import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMap from "google-map-react";

import Header from "../Header";
import Pagination from "./Pagination";
import Filters from "./Filters";

import la from "./la.jpg";
import your from "./your.jpg";
import dreamy from "./dreamy.jpg";
import best from "./best.png";
import lussuoso from "./lussuoso.png";
import ins from "./ins.png";

import {
  HeaderWrapper,
  Main,
  Wrapper,
  Card,
  MapWrapper,
  MapButton
} from "./styled";

export default () => (
  <div>
    <HeaderWrapper>
      <Header />
      <Filters />
    </HeaderWrapper>
    <Main>
      <Grid>
        <Row>
          <Col xs={12} lg={8}>
            <Wrapper>
              <Row>
                <Col xs={12} md={6}>
                  <Card
                    price={82}
                    src={la}
                    count={97}
                    type="Entire house"
                    beds={9}
                    to="#"
                  >
                    La Salentina, see, nature & relax
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card
                    price={82}
                    src={your}
                    count={161}
                    type="Entire house"
                    beds={5}
                    to="#"
                  >
                    Your private 3 bedr. riad and exclusi…
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Card
                    price={200}
                    src={dreamy}
                    count={364}
                    type="Entire threehouse"
                    beds={1}
                    to="#"
                  >
                    Dreamy Tropical Tree House
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card
                    price={110}
                    src={best}
                    count={369}
                    type="Entire apartment"
                    beds={1}
                    to="#"
                  >
                    Best location old town luxury loft
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Card
                    price={83}
                    src={lussuoso}
                    count={105}
                    type="Entire apartment"
                    beds={6}
                    to="#"
                  >
                    Lussuoso. Vista incantevole.
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card
                    price={72}
                    src={ins}
                    count={221}
                    type="Entire house"
                    beds={3}
                    to="#"
                  >
                    In the historical center of Lecce
                  </Card>
                </Col>
              </Row>
            </Wrapper>
            <Pagination />
          </Col>
          <Col lg={4} className="hidden-xs hidden-sm hidden-md">
            <MapWrapper>
              <GoogleMap center={{ lat: 59.95, lng: 30.33 }} zoom={11} />
            </MapWrapper>
          </Col>
        </Row>
        <div className="hidden-lg hidden-xl">
          <MapButton />
        </div>
      </Grid>
    </Main>
  </div>
);
