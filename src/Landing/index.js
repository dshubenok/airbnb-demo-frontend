import React from "react";

import Header from "../Header";
import Footer from "./Footer";

import Explore from "./Explore";
import Experience from "./Experiences";
import Home from "./Homes";
import Popular from "./Popular";
import Feature from "./Featured";

export default () => (
  <div>
    <Header />
    <Explore />
    <Experience />
    <Home />
    <Popular />
    <Feature />
    <Footer />
  </div>
);
