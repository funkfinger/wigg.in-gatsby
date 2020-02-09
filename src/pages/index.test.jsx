import React from 'react';

import IndexPage from './index';

test('it renders', () => {
  const { getByText } = render(<IndexPage />);
  expect(getByText('site')).toBeInTheDocument();
});
