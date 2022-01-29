import React from 'react';
import { render, screen } from '@testing-library/react';
import MyLibrary from '.';
import {BrowserRouter} from 'react-router-dom';

const router = (prop:any)=>{
    return (
        <BrowserRouter>
            <MyLibrary {...prop}></Card>
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
    // test('renders button with label', async () => {
    //     render(<MyLibrary books={books} library={library}/>);
    //     const linkElement = screen.getByTestId('button');
    //     expect(linkElement.textContent).toBe('button');
    // });
})

            