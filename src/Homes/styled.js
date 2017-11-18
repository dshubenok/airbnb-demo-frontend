import React from "react";
import styled from "styled-components";
import mapIcon from "./map.svg";
import GoogleMap from "google-map-react";

export const MapWrapper = styled.div`
  position: fixed;
  top: 158px;
  bottom: 0;
  right: 0;
  left: 64.4444444%;
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

export const GMap = props => (
  <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom} />
);
