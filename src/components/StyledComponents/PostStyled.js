import styled from 'styled-components';

export default styled.div`
  padding: 0.5em 2em;
  width: 100%;
  background-color: #2d4159;
  p {
    line-height: 1.6em;
  }
  h1,
  h2,
  h3 {
    font-weight: normal;
    margin-top: 2em;
    margin-bottom: 0.3em;
    line-height: 1em;
    color: #d6ce15;
    &: {
      text-decoration: none;
    }
    code {
      font-size: 0.9em;
    }
  }
`;
