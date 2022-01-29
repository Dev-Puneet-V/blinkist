import React from 'react';
import { render, screen } from '@testing-library/react';
import MyLibrary from '.';
import {BrowserRouter} from 'react-router-dom';

const router = (books:any, library: any)=>{
    return (
        <BrowserRouter>
            <MyLibrary books={books} library={library} />
        </BrowserRouter>
    )
}

describe('Library', () => {
    let response, data, library: any, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3004/extra');
        data = await response.json();
        response = await fetch('http://localhost:3004/library');
        library = await response.json();
        response = await fetch('http://localhost:3004/books');
        books = await response.json();
    })
    test('renders cicular progress bar if books are not available', async () => {
        let books:any=[];
        render(router(books, library));
        const linkElement = screen.getByTestId('circular-progress');
        expect(linkElement).toBeInTheDocument();
    });
    test('should not render cicular progress bar if books are available', async () => {
        render(router(books, library));
        const linkElement = screen.queryByTestId('circular-progress');
        expect(linkElement).not.toBeInTheDocument();
    });
})

            