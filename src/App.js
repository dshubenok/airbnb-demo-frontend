import React, { Component } from "react";

import Experiences from "./Experiences";
import Explore from "./Explore";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import Homes from "./Homes";
import Popular from "./Popular";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default App;
