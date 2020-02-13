import React from 'react';

import { TemplatePure as Template } from './MdxPostTemplate';

import { img, bodyMock } from '../../__mocks__/mdx-post-template-mocks';

test('it should render', () => {
  const { getByText } = render(
    <Template
      title="template title"
      date="2020-02-12 01:07:56"
      body={bodyMock}
      img={img}
    />,
  );
  expect(getByText(/template title/i)).toBeInTheDocument();
});
