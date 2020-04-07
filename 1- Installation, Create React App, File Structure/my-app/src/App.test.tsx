import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/**
 * This file is going to be where you can run automated tests. This is a topic to come up later.
 */

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
