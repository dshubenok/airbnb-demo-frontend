import React from "react";
import styled from "styled-components";
import mapIcon from "./map.svg";
import GoogleMap from "google-map-react";

export const MapWrapper = styled.div`
  position: fixed;
  top: 160px;
  bottom: 0;
  right: 0;
  left: 64.4444444%;
  left: calc(((992px) / 12 * 8 + (100% - 992px) / 2) + 8px);

  @media screen and (min-width: 1200px) {
    left: calc(((1200px) / 12 * 8 + (100% - 1200px) / 2) + 8px);
  }
`;

export const FilterButton = styled.button`
  margin: 12px 6px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font-family: inherit;
  line-height: 18px;
  font-size: 14px;
  background-color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;

  &:focus {
    background-color: #008489;
    color: #fff;
  }
`;

export const FilterWrapper = styled.div`
  border-bottom: 0.5px rgba(72, 72, 72, 0.3) solid;
  background-color: #ffffff;
`;

export const MapButton = styled.button`
  position: fixed;
  right: 8px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);

  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 20px;
    background-image: url(${mapIcon});
    background-repeat: no-repeat;
    background-position: contain;
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const Main = styled.div`margin-top: 160px;`;

export const Map = props => (
  <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom} />
);
