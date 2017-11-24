import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Wrapper = styled.div`margin-bottom: 40px;`;

const Page = styled.a`
  display: inline-flex;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin: 0 8px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #ffffff;
  color: #0f7276;
  font-family: inherit;
  line-height: 20px;
  font-size: 16px;
  border-radius: 50%;
  transition: all 0.18s;

  &:hover {
    text-decoration: underline;
  }
`;
const ActivePage = Page.extend`
  background-color: #008489;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 0px 15px;
`;

const MoreButton = Page.extend`
  position: relative;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid #008489;

  &:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 10px;
    background-image: url(${arrow});
    transition: all 0.18s;
  }
`;

const Offset = styled.p`
  font-family: inherit;
  line-height: 20px;
  font-size: 16px;
  color: #383838;
  text-align: center;
  margin: 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const PricingInfo = styled.p`
  margin: 0px;
  font-family: inherit;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #636363;
`;

export default props => (
  <Wrapper>
    <Container>
      <ActivePage>1</ActivePage>
      <Page>2</Page>
      <Page>3</Page>
      <Page>...</Page>
      <Page>17</Page>
      <MoreButton />
    </Container>
    <Offset>1 – 18 of 300+ Rentals</Offset>
    <PricingInfo>
      Enter dates to see full pricing. Additional fees apply. Taxes may be
      added.
    </PricingInfo>
  </Wrapper>
);
