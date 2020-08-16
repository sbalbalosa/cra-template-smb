import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Sample from './Sample';

test('load mock content', async () => {
  const { getByText } = render(<Sample />);
  const statusText = getByText('not loaded');
  expect(statusText.innerHTML).toEqual('not loaded');
  await waitFor(() => {
    expect(statusText.innerHTML).toEqual('loaded');
  });
});
