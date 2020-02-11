import React from 'react';

import IndexPage from './index';

// this sadly really only tests the fixture, but hey...
test('posts are ordered', () => {
  const { container } = render(<IndexPage />);
  const headingArray = container.querySelectorAll('h2');
  expect(headingArray.length).toBe(3);
  expect(headingArray[0].innerHTML).toMatch(/post 1/i);
  expect(headingArray[1].innerHTML).toMatch(/post 2/i);
  expect(headingArray[2].innerHTML).toMatch(/post 3/i);
});

test('it renders', () => {
  const { getByText } = render(<IndexPage />);
  expect(getByText(/test post 3./i)).toBeInTheDocument();
});
