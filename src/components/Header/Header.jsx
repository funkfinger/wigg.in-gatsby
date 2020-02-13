import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px #000 solid;
  margin: 0;
  padding: 0;
  background: #333;
`;

const H1Styled = styled.h1`
  text-transform: uppercase;
  border: 1px #000 solid;
  font-size: 28px;
  text-align: center;
  hover: {
  }
`;

const H2Styled = styled.h2`
  text-transform: uppercase;
  font-size: 1.2em;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  :hover {
    font-size: 30px;
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderStyled>
    <LinkStyled to="/">
      <H1Styled>Jay, Trying To Remember...</H1Styled>
    </LinkStyled>
    <H2Styled>just some dumb stuff I&apos;ll forget anyway</H2Styled>
  </HeaderStyled>
);

export default Header;
