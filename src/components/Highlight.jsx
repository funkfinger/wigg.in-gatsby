/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/oceanicNext';
import theme from 'prism-react-renderer/themes/dracula';
import styled from 'styled-components';

import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-ruby');

const CodeDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default ({ children, className = 'language-bash' }) => {
  const createCodeLines = (
    { className, style, tokens, getLineProps, getTokenProps },
    language,
  ) => {
    tokens.pop();
    let i = 0;
    const codeBlock = (
      <pre className={className} style={style}>
        {tokens.map(line => {
          i += 1;
          return (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          );
        })}
      </pre>
    );

    const lineNumbers = (
      <pre className={className} style={style}>
        {[...Array(i)].map((_, i) => (
          <div key={i + 1}>{i + 1}</div>
        ))}
      </pre>
    );

    return (
      <CodeDivStyled>
        <div className="line-numbers">{lineNumbers}</div>
        {codeBlock}
      </CodeDivStyled>
    );
  };

  const language = className.replace(/language-/, '');
  return (
    <CodeDivStyled>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={theme}
      >
        {highlight => createCodeLines(highlight, language)}
      </Highlight>
    </CodeDivStyled>
  );
};
