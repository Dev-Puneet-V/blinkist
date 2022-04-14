
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BookInfo from '.';
import {MemoryRouter, BrowserRouter, Route} from 'react-router-dom';
const setLibrary = jest.fn();

const router = (library: any)=>{
    return (
        <BrowserRouter>
            <BookInfo library={library} setLibrary={setLibrary}/>
        </BrowserRouter>
        
    )
}



describe('Book Info', () => {
    let response, library: any;
    beforeAll(async ()=> {
        response = await fetch('https://blinkist-json.herokuapp.com/library');
        library = await response.json();
    });
    test('should render circular bar if data is empty', () => {
        render(router(library));
        const linkElement = screen.getByTestId('circular-progress');
        expect(linkElement).toBeInTheDocument()
    });
    test('should not render circular bar if data is not empty', async () => {
        render(router(library));
        await new Promise((r) => setTimeout(r, 2000));
        const linkElement = screen.queryByTestId('circular-progress');
        expect(linkElement).not.toBeInTheDocument()
    });
    test('should render tabs with clickable option',async () => {
        render(router(library));
        await new Promise((r) => setTimeout(r, 2000));
        const tabsElement = screen.getByTestId(/tab-audience/);
        fireEvent.click(tabsElement);
        expect(tabsElement).toHaveStyle('border-bottom-color:#2CE080')
    });
    test('should render third tab with clickable option',async () => {
        render(router(library));
        await new Promise((r) => setTimeout(r, 2000));
        const tabsElement = screen.getByTestId(/tab-author/);
        fireEvent.click(tabsElement);
        expect(tabsElement).toHaveStyle('border-bottom-color:#2CE080')
    });
    // test('should remove button finished reading on click', async () => {
    //     render(
    //         <BrowserRouter>
    //             <MemoryRouter initialEntries={['book-info/11']}>
    //                 <BookInfo library={library} setLibrary={setLibrary}/>
    //             </MemoryRouter>
    //         </BrowserRouter>
            
    //     )
    //     await new Promise((r) => setTimeout(r, 2000));
    //     const button = screen.getByRole('button', {name: 'Finished Reading'});
    //     // fireEvent.click(button);
    //     // await new Promise((r) => setTimeout(r, 2000));
    //     // expect(button).not.toBeInTheDocument();
    // })
});

jest.setTimeout(30000);
