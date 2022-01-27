import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

test('renders button with label', () => {
  render(<Button label='button'/>);
  const linkElement = screen.getByTestId('button');
  expect(linkElement.textContent).toBe('button');
});
