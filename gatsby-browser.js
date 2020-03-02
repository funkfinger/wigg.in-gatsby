/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './src/components/Layout/Layout';

import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './src/style/main.scss';

// props provide same data to Layout as Page element will get
// including location, data, etc - you don't need to pass it
export const wrapPageElement = ({ element, props }) => (
  <HelmetProvider>
    <Layout {...props}>{element}</Layout>
  </HelmetProvider>
);

// export const wrapRootElement = ({ element }) => (
//   <HelmetProvider>{element}</HelmetProvider>
// );
