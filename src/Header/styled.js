import styled from "styled-components";
import searchIcon from "./searchIcon.svg";

export const Header = styled.header`
  padding: 16px 0px 18px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  background: #fff;

  @media (min-width: 576px) {
    padding: 27px 0px 29px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const LeftSideBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`;

export const Search = styled.input`
  margin-left: 28px;
  margin-right: 13px;
  width: 392px;
  max-width: 100%;
  height: 100%;
  max-height: 48px;
  font-family: inherit;
  line-height: 24px;
  font-size: 16px;
  background: url(${searchIcon}) no-repeat 10px center;
  padding: 11px 10px 11px 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 432px;
    margin-left: 35px;
    margin-right: 0;
  }

  @media (min-width: 992px) {
    margin-left: 50px;
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
  margin: 0px 2px;
  margin-left: 30px;
  padding-bottom: 8px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  margin-top: 10px;

  &:hover {
    border-color: #767676;
  }
`;
