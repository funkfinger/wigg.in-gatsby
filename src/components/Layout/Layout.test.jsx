import React from 'react';
import Layout from './Layout';

const testComponent = (
  <Layout>
    <p>hi</p>
  </Layout>
);

test('it has a waived copyright', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/waived all copyright/i)).toBeInTheDocument();
});

test('it has a title', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/Jay, trying to remember/i)).toBeInTheDocument();
});
