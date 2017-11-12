import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import logo from "./logo.svg";

import { SectionWrapper } from "../UI";
import {
  Header,
  VerticalCenterWrapper,
  LogoLink,
  Link,
  Logo,
  Search,
  Nav
} from "./styled";

export default () => (
  <Header>
    <SectionWrapper>
      <Grid fluid>
        <Row>
          <Col xs={2} sm={1} md={1} lg={1}>
            <VerticalCenterWrapper>
              <LogoLink href="#">
                <Logo src={logo} />
              </LogoLink>
            </VerticalCenterWrapper>
          </Col>
          <Col xs={10} sm={11} md={5} lg={5}>
            <VerticalCenterWrapper>
              <Search placeholder="Try &quot;Miami&quot;" />
            </VerticalCenterWrapper>
          </Col>
          <Col md={6} className="hidden-xs hidden-sm">
            <Nav>
              <Link href="#">Become a host</Link>
              <Link href="#">Help</Link>
              <Link href="#">Sign Up</Link>
              <Link href="#">Log In</Link>
            </Nav>
          </Col>
        </Row>
      </Grid>
    </SectionWrapper>
  </Header>
);
