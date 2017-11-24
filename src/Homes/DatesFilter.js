import React from "react";
import styled from "styled-components";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { FilterButton } from "./Filters";

import { DayPickerRangeController } from "react-dates";

const Wrap = styled.div`
  position: relative;
`;

const Main = styled.div`
  position: absolute;
`;

export default class Dates extends React.Component {
  constructor(props) {
    super(props);

    //react-dates
    this.state = {
      focusedInput: props.autoFocusEndDate ? "endDate" : "startDate",
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  //toggle
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { startDate, endDate, isOpen } = this.state;
    const startDateString = startDate && startDate.format("MMM Do");
    const endDateString = endDate && endDate.format("MMM Do");

    return (
      <Wrap>
        <FilterButton active={!isOpen} onClick={this.toggle}>
          {startDateString || "Check in"} — {endDateString || "Check out"}
        </FilterButton>
        <Main>
          {!isOpen && (
            <DayPickerRangeController
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
            />
          )}
        </Main>
      </Wrap>
    );
  }
}
