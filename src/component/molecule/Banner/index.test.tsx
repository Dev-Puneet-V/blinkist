import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '.';

test('Banner Heading', () => {
  render(<Banner label='button' heading='Heading' discription='Discription'/>);
  const linkElement = screen.getByTestId('heading');
  expect(linkElement.textContent).toBe('Heading');
});

test('Bannner discription', () => {
  render(<Banner label='button' heading='Heading' discription='Discription'/>);
  const linkElement = screen.getByTestId('discription');
  expect(linkElement.textContent).toBe('Discription');
});
