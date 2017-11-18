import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import logoFooter from "./logo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

import { SectionWrapper } from "../../UI";
import {
  Footer,
  Menu,
  Select,
  LinkBold,
  Link,
  FooterBottom,
  BlockInline,
  LinkCopyright,
  BlockInlineBottom,
  LinkBottom,
  SocialIcon
} from "./styled";

export default () => (
  <Footer>
    <SectionWrapper>
      <Grid fluid>
        <Row>
          <Menu>
            <Col xs={12} sm={3}>
              <Row>
                <Col xs={6} sm={12}>
                  <Select>
                    <option default>English</option>
                    <option>Russian</option>
                  </Select>
                </Col>
                <Col xs={6} sm={12}>
                  <Select>
                    <option default>United States</option>
                    <option>RUB</option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col sm={2} smOffset={1} className="hidden-xs">
              <LinkBold href="#">Airbnb</LinkBold>
              <Link href="#">About us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Help</Link>
              <Link href="#">Diversity & Belonging</Link>
            </Col>
            <Col sm={2} smOffset={1} className="hidden-xs">
              <LinkBold href="#">Discover</LinkBold>
              <Link href="#">Trust & Safety</Link>
              <Link href="#">Travel Credit</Link>
              <Link href="#">Gift Cards</Link>
              <Link href="#">Airbnb Citizen</Link>
              <Link href="#">Business Travel</Link>
              <Link href="#">Guidebooks</Link>
              <Link href="#">Airbnbmag</Link>
            </Col>
            <Col sm={2} smOffset={1} className="hidden-xs">
              <LinkBold href="#">Hosting</LinkBold>
              <Link href="#">Why Host</Link>
              <Link href="#">Hospitality</Link>
              <Link href="#">Responsible Hosting</Link>
              <Link href="#">Community Center</Link>
            </Col>
          </Menu>
        </Row>
        <Row>
          <FooterBottom>
            <Col xs={12} sm={7}>
              <BlockInline>
                <img src={logoFooter} alt="logoAirbnb" />

                <LinkCopyright href="#">© Airbnb Inc.</LinkCopyright>
              </BlockInline>
            </Col>
            <Col xs={12} sm={5}>
              <BlockInlineBottom>
                <LinkBottom href="#">Terms</LinkBottom>
                <LinkBottom href="#">Privacy</LinkBottom>
                <LinkBottom href="#">Site map</LinkBottom>
                <LinkBottom href="#">
                  <SocialIcon src={facebook} alt="Facebook" />
                </LinkBottom>
                <LinkBottom href="#">
                  <SocialIcon src={twitter} alt="Twitter" />
                </LinkBottom>
                <LinkBottom href="#">
                  <SocialIcon src={instagram} alt="Instagram" />
                </LinkBottom>
              </BlockInlineBottom>
            </Col>
          </FooterBottom>
        </Row>
      </Grid>
    </SectionWrapper>
  </Footer>
);
