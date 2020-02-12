import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
