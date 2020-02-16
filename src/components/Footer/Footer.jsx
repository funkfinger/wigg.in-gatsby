import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  margin-top: 4em;
  font-size: 0.8em;
  text-align: center;
  color: #666;
`;

const Footer = () => (
  <FooterStyled>
    <p
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...{ 'xmlns:dct': 'http://purl.org/dc/terms/' }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...{ 'xmlns:vcard': 'http://www.w3.org/2001/vcard-rdf/3.0#' }}
    >
      <a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/">
        <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" alt="CC0" />
      </a>
      <br />
      To the extent possible under law,{' '}
      <a rel="dct:publisher" href="https://jaywiggins.com">
        I
      </a>{' '}
      have waived all copyright and related or neighboring rights to any content
      I have created for <span property="dct:title">jaywiggins.com</span>. This
      work is published from:{' '}
      <span
        property="vcard:Country"
        datatype="dct:ISO3166"
        content="US"
        about="https://jaywiggins.com"
      >
        United States
      </span>
      .
    </p>
  </FooterStyled>
);

export default Footer;
