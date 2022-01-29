import React from 'react';
import { render, screen } from '@testing-library/react';
import Blank from '.';
import theme from '../../../theme/mainTheme'
test('renders button with label', () => {
  render(<Blank />);
  const linkElement = screen.getByTestId('box');
  expect(linkElement).toHaveStyle(`background-color: ${theme.palette.textcolor.light}`);
});
