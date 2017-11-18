import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { HeaderWrapper, Main, MapWrapper, MapButton, GMap } from "./styled";

import Header from "../Header";
import Filters from "./Filters";

import Cards from "./Cards";

import Pagination from "./Pagination";

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
            <Cards />
            <Pagination />
          </Col>
          <Col lg={4} className="hidden-xs hidden-sm hidden-md">
            <MapWrapper>
              <GMap center={{ lat: 45.8536, lng: 20.5234 }} zoom={11} />
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
