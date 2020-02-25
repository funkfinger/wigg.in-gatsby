/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/oceanicNext';
import theme from 'prism-react-renderer/themes/dracula';
import styled from 'styled-components';

const CodeDivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const PreStyled = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  max-width: 100%;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  // white-space: pre-wrap;
  overflow-x: auto;
  max-width: 100%;
`;

export default ({ children, className = 'language-bash' }) => {
  console.log(`classname: ${className}`);
  const language = className.replace(/language-/, '');
  return (
    <CodeDivStyled>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <PreStyled
            className={className}
            style={{ ...style, padding: '20px' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </PreStyled>
        )}
      </Highlight>
    </CodeDivStyled>
  );
};
