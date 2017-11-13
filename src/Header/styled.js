import styled from "styled-components";
import search from "./search.svg";
import arrow from "./arrow.svg";

export const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  padding: 16px 0px 18px 0px;

  @media (min-width: 576px) {
    padding: 27px 0px 29px 0px;
  }
`;

export const VerticalCenterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.img`
  width: 30px;
  height: 28px;

  @media (min-width: 576px) {
    height: 30px;
  }
`;

export const Search = styled.input`
  width: 100%;
  max-width: 392px;
  font-family: inherit;
  line-height: 24px;
  font-size: 16px;
  background: url(${search}) no-repeat 10px center;
  padding: 11px 10px 11px 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  max-width: 432px;
  margin-left: 8px;

  @media (min-width: 576px) {
    margin-left: 18px;
    max-width: initial;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
`;

export const Link = styled.a`
  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  color: #383838;
  padding: 0px 0px 0px 10px;
  margin: 0 2px;
  text-decoration: none;
`;

export const LogoLink = styled.a`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 43%;
    right: -17px;
    background: url(${arrow});
    width: 11px;
    height: 6px;
  }

  @media (min-width: 768px) {
    &:after {
      display: none;
    }
  }
`;
