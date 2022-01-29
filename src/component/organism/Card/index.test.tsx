import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

const router = (prop:any)=>{
    return (
        <BrowserRouter>
            <Card {...prop}></Card>
        </BrowserRouter>
    )
}

test('should render same bookname text', () => {
  render(router(props));
  const linkElement = screen.getByText('Being Boss');
  expect(linkElement).toBeInTheDocument();
});


test('should render same writer name text', () => {
    render(router(props));
    const linkElement = screen.getByText('Kathleen Shannon and Emily...');
    expect(linkElement).toBeInTheDocument();
});
  
test('should render same time read text', () => {
    render(router(props));
    const linkElement = screen.getByText('13-minute read');
    expect(linkElement).toBeInTheDocument();
});
  
test('should render white background color if inLibrary is true', () => {
    render(router(
        {...props,
            inLibrary: true
        }
    ));
    const linkElement = screen.getByTestId('card-body');
    expect(linkElement).toHaveStyle('background-color: white'); 
})


test('should render different color of card body when inLibrary is false as well as in hoveredState', () => {
    render(router(props));
    const linkElement = screen.getByTestId('card-body');
    fireEvent.mouseEnter(linkElement);
    expect(linkElement).toHaveStyle(`background-color: ${theme.palette.primary.light}`); 
});
  


test('should render different color od card box when inLibrary is false as well as in hoveredState', () => {
    render(router(props));
    const linkElement = screen.getByTestId('card-box');
    fireEvent.mouseEnter(linkElement);
    expect(linkElement).toHaveStyle(`background-color: ${theme.palette.primary.light}`); 
});