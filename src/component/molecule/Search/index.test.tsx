import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import Search from '.';



describe("Search Box", () =>{
    test('render input box', () => {
        render(<Search />);
        const linkElement = screen.getByPlaceholderText('Search by title or author')
        expect(linkElement).toBeInTheDocument();
    });
    test('should be able to type in input', () => {
        render(<Search/>);
        const inputElement = screen.getByPlaceholderText(/Search by title or author/) ;
        fireEvent.change(inputElement as HTMLInputElement, { target: { value : 'Employee'}})
        expect((inputElement as HTMLInputElement).value).toBe('Employee');
    });
    test("Search Box filters results", async ()=>{
        render(<Search />);
        const inputElement = screen.getByPlaceholderText(/Search by title or author/) ;
        fireEvent.change(inputElement as HTMLInputElement, { target: { value : 'Emp'}})
    });
})


