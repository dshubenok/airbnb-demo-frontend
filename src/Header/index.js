import React from "react";
import { Grid } from "react-flexbox-grid";

import Logo from "./Logo";

import { Header, Wrapper, LeftSideBlock, Search, Nav, Link } from "./styled";

export default props => (
  <Header className={props.className}>
    <Grid>
      <Wrapper>
        <LeftSideBlock>
          <Logo />
          <Search placeholder="Try &quot;Miami&quot;" />
        </LeftSideBlock>
        <div className="hidden-xs hidden-sm hidden-md">
          <Nav>
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign Up</Link>
            <Link href="#">Log In</Link>
          </Nav>
        </div>
      </Wrapper>
    </Grid>
  </Header>
);
