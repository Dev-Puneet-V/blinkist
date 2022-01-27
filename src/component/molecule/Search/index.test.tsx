import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '.';



// describe("Search Box", () =>{
    
// })
test('render input box', () => {
    render(<Search />);
    const linkElement = screen.getByPlaceholderText('Search by title or author')
    expect(linkElement).toBeInTheDocument();
});