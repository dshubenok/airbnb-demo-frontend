import styled from "styled-components";
import { media } from "../constants";

export const Main = styled.main``;

export const Section = styled.section`
  padding: 0.35rem 0;

  ${media.tablet`padding:0.5rem 0;`};
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 1em;
  box-sizing: border-box;
  position: relative;

  ${media.desktop`
    width: 960px;
    box-sizing: content-box;
  `};
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0.7em 0;
  line-height: 1.25;

  ${media.tablet`font-size: 32px;`};
`;
