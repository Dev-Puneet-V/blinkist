import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '.';
import {BrowserRouter} from 'react-router-dom';

const handleExploreMenu = jest.fn();
let exploreOption = true
let blankStatus = true
const setBlankStatus = jest.fn();
const router = (books:any)=>{
    return (
        <BrowserRouter>
            <Header 
                    url= '/assets/logo.png'
                    name= 'Blinkist'
                    handleExploreMenu={handleExploreMenu}
                    exploreOption={exploreOption}
                    blankStatus={blankStatus}
                    setBlankStatus={setBlankStatus}
                    books={books}
                />
        </BrowserRouter>
    )
}

describe('Header', () => {
    let response, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3004/books');
        books = await response.json();
    })
    test('search-state-button button should be clickable', () => {
        render(router(books));
        const searchButtonElement = screen.getByTestId('box');
    });

});

jest.setTimeout(30000);  