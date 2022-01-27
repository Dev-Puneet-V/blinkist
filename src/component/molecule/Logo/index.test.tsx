import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '.';

test('Logo', () => {
  render(<Logo name='blinkist'/>);
  const linkElement = screen.getByText('blinkist')
  expect(linkElement).toBeInTheDocument();
});