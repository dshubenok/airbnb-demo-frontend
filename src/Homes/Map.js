import React from "react";
import GoogleMap from "google-map-react";

export default props => (
  <GoogleMap defaultCenter={props.center} defaultZoom={props.zoom} />
);
