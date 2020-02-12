import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Layout';

const testComponent = (
  <HelmetProvider>
    <Layout>
      <p>hi</p>
    </Layout>
  </HelmetProvider>
);

test.skip('it has a default title', async () => {
  render(testComponent);
  await waitForDomChange();
  expect(document.title).toEqual('Jay, Trying To Remember...');
});

test('it has a waived copyright', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/waived all copyright/i)).toBeInTheDocument();
});

test('it has a title', () => {
  const { getByText } = render(testComponent);
  expect(getByText(/Jay, trying to remember/i)).toBeInTheDocument();
});
