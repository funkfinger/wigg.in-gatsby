import styled from 'styled-components';

export default styled.h2`
  margin: 0;
  padding: 0.25em 0em 1em 0em;
  margin-bottom: -1.1em;
  font-family: 'Sacramento', sans-serif;
  font-size: 2.8em;
  font-weight: normal;
  text-align: center;
  // color: #e88d67;
  color: #2d132c;
  color: rgba(87, 6, 142, 1);
  &: {
    text-decoration: none;
  }
  @media screen and (max-width: 800px) {
    font-size: 2.2em;
  }
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;
