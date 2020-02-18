import styled from 'styled-components';

export default styled.h2`
  font-size: 2.8em;
  font-weight: normal;
  margin-bottom: 0.3em;
  line-height: 1em;
  color: #d6ce15;
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
