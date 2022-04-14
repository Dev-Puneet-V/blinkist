import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '.';
import {BrowserRouter} from 'react-router-dom';

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
        response = await fetch('https://blinkist-json.herokuapp.com/extra');
        data = await response.json();
        response = await fetch('https://blinkist-json.herokuapp.com/library');
        library = await response.json();
        response = await fetch('https://blinkist-json.herokuapp.com/books');
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
    test('should render a circularbox if library is empty', async () => {
        let librarys = false;
        render(router(data, books, librarys));
        const circularElement = await screen.findAllByTestId('circular-progress');
        expect(circularElement.length).toBe(data.length);
    })
    test('clickable library handler', async () => {
        render(router(data, books, library));
        const linkElement = await screen.findAllByTestId('card-library-handler');
        fireEvent.click(linkElement[0]);
    })
});