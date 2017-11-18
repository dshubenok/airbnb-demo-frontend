import React from "react";
import { Grid } from "react-flexbox-grid";

import { Header, Wrapper, LeftBlock, Link, Search, Nav } from "./styled";
import Logo from "./Logo";

export default props => (
  <Header className={props.className}>
    <Grid>
      <Wrapper>
        <LeftBlock>
          <Logo />
          <Search placeholder="Try &quot;Miami&quot;" />
        </LeftBlock>
        <div className="hidden-xs hidden-sm hidden-md">
          <Nav>
            <Link href="#host">Become a host</Link>
            <Link href="#help">Help</Link>
            <Link href="#signup">Sign Up</Link>
            <Link href="#login">Log In</Link>
          </Nav>
        </div>
      </Wrapper>
    </Grid>
  </Header>
);
