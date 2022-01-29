import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import theme from '../../../theme/mainTheme'
import {BrowserRouter} from 'react-router-dom';
const props = {
    imgHeight: 300,
    url: '/assets/book.png',
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    inLibrary: false,
}

const router = ()=>{
    return (
        <BrowserRouter>
            <Card {...props}></Card>
        </BrowserRouter>
    )
}

test('should render same bookname text', () => {
  render(router());
  const linkElement = screen.getByText('Being Boss');
  expect(linkElement).toBeInTheDocument();
});


test('should render same writer name text', () => {
    render(router());
    const linkElement = screen.getByText('Kathleen Shannon and Emily...');
    expect(linkElement).toBeInTheDocument();
});
  
test('should render same time read text', () => {
    render(router());
    const linkElement = screen.getByText('13-minute read');
    expect(linkElement).toBeInTheDocument();
});
  