import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  FilterButton,
  HeaderWrapper,
  FilterWrapper,
  Main,
  MapWrapper,
  MapButton,
  Map
} from "./styled";

import Header from "../Header";

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
                <FilterButton>Dates</FilterButton>
                <FilterButton>Guests</FilterButton>
                <div className="hidden-xs hidden-sm hidden-md">
                  <FilterButton>Room type</FilterButton>
                  <FilterButton>Price</FilterButton>
                  <FilterButton>Instant book</FilterButton>
                </div>
                <FilterButton>More filters</FilterButton>
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
                  <Map center={{ lat: 45, lng: 20 }} zoom={10} />
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
