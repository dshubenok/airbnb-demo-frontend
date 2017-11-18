import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  FilterButton,
  HeaderWrapper,
  FilterWrapper,
  Main,
  MapWrapper,
  MapButton,
  GMap
} from "./styled";

import Header from "../Header";
import Filters from "./Filters";

import Cards from "./Cards";

import Pagination from "./Pagination";

class Homes extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Header />
          <FilterWrapper>
            <Grid>
              <Row>
                <Filters />
              </Row>
            </Grid>
          </FilterWrapper>
        </HeaderWrapper>
        <Main>
          <Grid>
            <Row>
              <Col xs={12} lg={8}>
                <Row>
                  <Col xs={12}>
                    <Cards />
                  </Col>
                </Row>
                <Pagination />
              </Col>
              <Col lg={4} className="hidden-xs hidden-sm hidden-md">
                <MapWrapper>
                  <GMap center={{ lat: 45, lng: 20 }} zoom={10} />
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
  }
}

export default Homes;
