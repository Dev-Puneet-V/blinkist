import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '.';

test('should render input element', () => {
  render(<Input placeholder="Search by title or author"/>);
  const inputElement = screen.getByPlaceholderText(/Search by title or author/);
  expect(inputElement).toBeInTheDocument();
});


test('should be able to type in input', () => {
    render(<Input placeholder="Search by title or author"/>);
    const inputElement = screen.getByPlaceholderText(/Search by title or author/) ;
    fireEvent.change(inputElement as HTMLInputElement, { target: { value : 'Employee'}})
    expect((inputElement as HTMLInputElement).value).toBe('Employee');
});
