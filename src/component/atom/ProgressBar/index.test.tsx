import React from 'react';
import {render, screen } from '@testing-library/react';
import ProgressBar from '.';

test('should render progressbar', () => {
  render(<ProgressBar value={60}/>);
  const progressBarElement = screen.getByRole('progressbar');;
  expect(progressBarElement).toBeInTheDocument();
});

test('should render progressbar with value', () => {
    render(<ProgressBar value={60}/>);
    const progressBarElement = screen.getByRole('progressbar');
    expect((progressBarElement).getAttribute('aria-valuenow')).toBe('60');
});
  

test('should render 0 for value undefined', () => {
  render(<ProgressBar/>);
  const progressBarElement = screen.getByRole('progressbar');
  expect((progressBarElement).getAttribute('aria-valuenow')).toBe('0');
});
