import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Template from '.';
import {BrowserRouter} from 'react-router-dom';

const router = ()=>{
    return (
        // <BrowserRouter>
            <Template />
        // </BrowserRouter>
    )
}

describe('Template', () => {
    let response, data, library: any, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3004/extra');
        data = await response.json();
        response = await fetch('http://localhost:3004/library');
        library = await response.json();
        response = await fetch('http://localhost:3004/books');
        books = await response.json();

    })

    test('should render circular bar if data is empty', () => {
        render(router());
        const linkElement = screen.getByTestId('circular-progress');
        expect(linkElement).toBeInTheDocument()
    });
    
    test('should not render circular bar if data is not empty', async () => {
        render(router());
        await new Promise((r) => setTimeout(r, 5000));
        const linkElement = screen.queryByTestId('main');
        expect(linkElement).toBeInTheDocument()
    });
    test('handle-explore button should be clickable', () => {
        render(router());
        // const linkElement = screen.getByTestId('handle-explore');
        // fireEvent.click(linkElement);
        // const exploreBoxElement = screen.queryByTestId('explore-box');
        // expect(exploreBoxElement).toBeInTheDocument()
    });
});

jest.setTimeout(30000);