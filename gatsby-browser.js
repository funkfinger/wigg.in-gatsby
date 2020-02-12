/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import Layout from './src/components/Layout/Layout';

// props provide same data to Layout as Page element will get
// including location, data, etc - you don't need to pass it
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
