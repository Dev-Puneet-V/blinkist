import React from 'react';
import { render, screen } from '@testing-library/react';
import NavIcon from '.';
import AddIcon from '@mui/icons-material/Add';
test('render the nav icon as well as label', () => {
  render(<NavIcon label='blinkist' leftIcon={<AddIcon />}/>);
  const linkElement = screen.getByTestId('nav-icon')
  expect(linkElement.textContent).toBe('blinkist');
});


test('Left icon', () => {
    render(<NavIcon label='blinkist' leftIcon={<AddIcon data-testid='left-icon'/>}/>);
    const linkElement = screen.getByTestId('left-icon')
    expect(linkElement).toBeInTheDocument();
});

test('Right icon', () => {
    render(<NavIcon label='blinkist' rightIcon={<AddIcon data-testid='right-icon'/>}/>);
    const linkElement = screen.getByTestId('right-icon')
    expect(linkElement).toBeInTheDocument();
});