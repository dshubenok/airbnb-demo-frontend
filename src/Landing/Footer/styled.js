import styled from "styled-components";
import arrow from "./arrow.svg";

export const Footer = styled.footer`
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 64px;
`;

export const Menu = styled.div`
  padding: 48px 0px 0 0px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  font-family: inherit;
  font-weight: 300;
  line-height: 21px;
  color: #383838;
  padding: 12px 45px 13px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  appearance: none;
  background: url(${arrow}) no-repeat 90%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  margin: 0 auto;
  font-size: 12px;
  padding-right: 35px;

  &:-ms-expand {
    display: none;
  }

  @media (min-width: 576px) {
    max-width: 176px;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    margin: 0 20px 16px 0;
    font-size: 18px;
    padding: 12px 45px 13px 16px;
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

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const LinkBold = Link.extend`
  font-weight: 700;
  margin-bottom: 16px;
  color: #383838;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px 0;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 48px;
`;

export const BlockInline = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BlockInlineBottom = BlockInline.extend`
  justify-content: flex-start;
  margin-top: 10px;

  @media (min-width: 576px) {
    justify-content: space-between;
    margin: initial;
  }
`;

export const LinkCopyright = Link.extend`margin-left: 12px;`;

export const LinkBottom = Link.extend`
  margin-left: 12px;

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 576px) {
    margin: 0;
  }
`;

export const SocialIcon = styled.img`
  position: relative;
  top: -3px;
`;
