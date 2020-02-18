import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ContainerDiv = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  background-color: #0677a1;
  background-color: #2d4159;
  background-color: #3a5372;
  background-color: #3a5372;
`;

const InnerContainerDiv = styled.div``;

const StyledMain = styled.main``;

const Layout = ({ children, title }) => {
  return (
    <ContainerDiv className="layout">
      <InnerContainerDiv className="inner-container">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <StyledMain>
          <div>{children}</div>
        </StyledMain>
        <Footer />
      </InnerContainerDiv>
    </ContainerDiv>
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
