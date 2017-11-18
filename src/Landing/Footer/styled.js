import styled from "styled-components";
import arrow from "./arrow.svg";
import { BoldText } from "../../UI";

export const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 64px;
`;

export const Menu = styled.div`
  padding: 16px 0px 0px 0px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: row;

  @media screen and (min-width: 576px) {
    padding: 48px 0px 0px 0px;
  }
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  font-family: inherit;
  font-weight: 300;
  line-height: 21px;
  color: #383838;
  padding: 12px 35px 13px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  appearance: none;
  background: url(${arrow}) no-repeat 90%;
  border: 1px solid rgba(72, 72, 72, 0.3);
  margin: 0 auto;
  font-size: 12px;

  &:-ms-expand {
    display: none;
  }

  @media only screen and (min-width: 576px) {
    max-width: 176px;
    font-size: 15px;
    margin: 0 20px 16px 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 12px 45px 13px 16px;
    max-width: 229px;
  }
`;

export const Link = styled.a`
  font-family: inherit;
  line-height: 18px;
  color: #636363;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

export const MenuTitle = BoldText.extend`
  font-size: 12px;
  margin-bottom: 16px;
  color: #383838;
  display: block;

  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px 0px;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  margin-top: 24px;

  @media screen and (min-width: 576px) {
    margin-top: 48px;
  }
`;

export const MenuBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

  @media only screen and (min-width: 576px) {
    justify-content: flex-end;
    margin: initial;
  }
`;

export const LinkCopyright = Link.extend`
  margin-left: 12px;
  margin-bottom: 0px;
`;

export const LinkBottom = Link.extend`
  margin-left: 12px;

  &:first-child {
    margin-left: 0px;
  }

  @media only screen and (min-width: 576px) {
    margin-left: 15px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
`;

export const Social = styled.div`
  display: flex;
  margin-left: 12px;

  @media screen and (min-width: 576px) {
    margin-left: 24px;
  }

  @media screen and (min-width: 992px) {
    margin-left: 28px;
  }
`;

export const SocialLink = LinkBottom.extend`
  display: flex;
  align-items: center;

  @media screen and (min-width: 576px) {
    margin-left: 12px;
  }
`;
