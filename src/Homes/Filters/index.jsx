import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

import FilterDate from "./FilterDate";

const Content = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`;

const Wrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

export default class Filters extends React.Component {
  state = {
    dropdown: null
  };

  setDropdown = (dropdown, callback) => {
    this.setState(
      { dropdown: this.state.dropdown === dropdown ? null : dropdown },
      callback
    );
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <Content>
            <FilterDate
              closeDropdown={() => this.setDropdown(null)}
              onApply={(startDate, endDate) =>
                this.setState({ startDate, endDate })}
            />
          </Content>
        </Grid>
      </Wrapper>
    );
  }
}
