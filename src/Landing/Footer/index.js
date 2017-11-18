import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import logoFooter from "./logo.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

import {
  Footer,
  Menu,
  Select,
  Link,
  LinkCopyright,
  LinkBottom,
  MenuTitle,
  Bottom,
  Copyright,
  MenuBottom,
  SocialLink,
  Social
} from "./styled";

export default () => (
  <Footer>
    <Grid>
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
                  <option default>United States dollar</option>
                  <option>RUB</option>
                </Select>
              </Col>
            </Row>
          </Col>
          <Col sm={2} smOffset={1} className="hidden-xs">
            <MenuTitle>Airbnb</MenuTitle>
            <Link href="#aboutus">About us</Link>
            <Link href="#careers">Careers</Link>
            <Link href="#press">Press</Link>
            <Link href="#policies">Policies</Link>
            <Link href="#help">Help</Link>
            <Link href="#diversity">Diversity & Belonging</Link>
          </Col>
          <Col sm={2} smOffset={1} className="hidden-xs">
            <MenuTitle>Discover</MenuTitle>
            <Link href="#trust">Trust & Safety</Link>
            <Link href="#travel">Travel Credit</Link>
            <Link href="#giftcards">Gift Cards</Link>
            <Link href="#citizen">Airbnb Citizen</Link>
            <Link href="#bussiness">Business Travel</Link>
            <Link href="#guidebooks">Guidebooks</Link>
            <Link href="#airbnbmag">Airbnbmag</Link>
          </Col>
          <Col sm={2} smOffset={1} className="hidden-xs">
            <MenuTitle>Hosting</MenuTitle>
            <Link href="#whyhost">Why Host</Link>
            <Link href="#hospitality">Hospitality</Link>
            <Link href="#responsiblehost">Responsible Hosting</Link>
            <Link href="#communitycenter">Community Center</Link>
          </Col>
        </Menu>
      </Row>
      <Row>
        <Bottom>
          <Col xs={12} sm={5}>
            <Copyright>
              <img src={logoFooter} alt="logoAirbnb" />
              <LinkCopyright href="#airbnb">© Airbnb Inc.</LinkCopyright>
            </Copyright>
          </Col>
          <Col xs={12} sm={7}>
            <MenuBottom>
              <LinkBottom href="#terms">Terms</LinkBottom>
              <LinkBottom href="#privacy">Privacy</LinkBottom>
              <LinkBottom href="#sitemap">Site map</LinkBottom>
              <Social>
                <SocialLink href="#facebook">
                  <img src={facebook} alt="Facebook" />
                </SocialLink>
                <SocialLink href="#twitter">
                  <img src={twitter} alt="Twitter" />
                </SocialLink>
                <SocialLink href="#instagram">
                  <img src={instagram} alt="Instagram" />
                </SocialLink>
              </Social>
            </MenuBottom>
          </Col>
        </Bottom>
      </Row>
    </Grid>
  </Footer>
);
