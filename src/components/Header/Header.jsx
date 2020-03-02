import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainerStyled = styled.div``;

const HeaderStyled = styled.header``;

const H1Styled = styled.h1`
  // font-family: 'Sacramento', sans-serif;
  // font-weight: normal;
  // font-size: 60px;
  // font-size: 4em;
  // color: #e88d67;
  // color: #d6ce15;
  // color: #e69419;
  // margin: 0;
  // margin-top: 1em;
  // text-align: center;
  // line-height: 90%;
  // z-index: -1;
  // @media screen and (max-width: 800px) {
  //   font-size: 40px;
  //   font-size: 3em;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 30px;
  //   font-size: 2.5em;
  // }
`;

const H2Styled = styled.h2`
  // font-weight: normal;
  // font-size: 1.5em;
  // margin: 0.25em 0;
  // text-align: center;
  // color: #bb999c;
  // color: rgba(255, 255, 255, 0.4);

  // @media screen and (max-width: 800px) {
  //   font-size: 1em;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 1em;
  // }
`;

const LinkStyled = styled(Link)`
  // text-decoration: none;
`;

const Header = () => (
  <HeaderContainerStyled>
    <HeaderStyled>
      <LinkStyled to="/">
        <H1Styled className="site-heading">Jay, Trying To Remember...</H1Styled>
      </LinkStyled>
      <H2Styled>dumb stuff I should probably forget anyway</H2Styled>
    </HeaderStyled>
  </HeaderContainerStyled>
);

export default Header;
