import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Gist from 'react-gist';

// import Gist from '../Gist/Gist';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hilight from '../Highlight';

const components = {
  // eslint-disable-next-line react/jsx-props-no-spreading
  pre: props => <div {...props} />,
  code: Hilight,
  Gist,
};

const ContainerDiv = styled.div``;

const InnerContainerDiv = styled.div``;

const StyledMain = styled.main``;

const Layout = ({ children, title }) => {
  return (
    <MDXProvider components={components}>
      <ContainerDiv className="layout">
        <InnerContainerDiv className="inner-container">
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Header />
          <StyledMain className="main-content">{children}</StyledMain>
          <Footer />
        </InnerContainerDiv>
      </ContainerDiv>
    </MDXProvider>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Jay, Trying To Remember...',
};

export default Layout;
