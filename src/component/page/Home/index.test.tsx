import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '.';
import {BrowserRouter} from 'react-router-dom';
import { AnyCnameRecord } from 'dns';

const setLibrary = jest.fn();
const setData = jest.fn();
const setBooks = jest.fn();

const router = (data:any, books:any, library: any)=>{
    return (
        <BrowserRouter>
             <Home books={books} setBooks={setBooks} data={data} setData={setData} library={library} setLibrary={setLibrary} />
        </BrowserRouter>
    )
}

describe('Home', () => {
    let response, data:any, library: any, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3004/extra');
        data = await response.json();
        response = await fetch('http://localhost:3004/library');
        library = await response.json();
        response = await fetch('http://localhost:3004/books');
        books = await response.json();
    })
    test('should render input', () => {
        render(router(data, books, library));
        const bannerElement = screen.getByPlaceholderText('Search by title or author');
        expect(bannerElement).toBeInTheDocument();
    })
    test('should render containers matching to data length', async () => {
        render(router(data, books, library));
        const extraElement = await screen.findAllByTestId('container');
        expect(extraElement.length).toBe(data.length);
    })
});