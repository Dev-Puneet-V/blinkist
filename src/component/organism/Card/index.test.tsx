import React from 'react';
import BookCard from ".";
import { ThemeProvider } from "@material-ui/core/styles";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'
const props = {
    id: 0,
    imgHeight: 300,
    url: '/assets/book.png',
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    inLibrary: false,
};

test('BookCard', () => {
    const component = renderer.create(
        <BrowserRouter>
            <BookCard {...props}></BookCard>
        </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
});