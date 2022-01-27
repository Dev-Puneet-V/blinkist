import React from 'react';
import {render, screen } from '@testing-library/react';
import Typography from '.';

test('should render progressbar', () => {
  render(<Typography children='Hello' />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});