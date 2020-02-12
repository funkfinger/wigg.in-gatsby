import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
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
