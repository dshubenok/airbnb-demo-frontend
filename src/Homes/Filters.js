import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Content = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

const Filter = styled.button`
  padding: 7px 16px;
  margin-right: 12px;
  margin-left: 6px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  font-family: inherit;
  display: block;
  background: transparent;
  border: 1px solid rgba(72, 72, 72, 0.2);

  &:first-child {
    margin-left: 0px;
  }
`;

export default class Filters extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Content>
            <Filter>Dates</Filter>
            <Filter>Guests</Filter>
            <Filter>More filters</Filter>
          </Content>
        </Grid>
      </Wrapper>
    );
  }
}
