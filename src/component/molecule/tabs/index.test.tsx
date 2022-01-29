import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import Tabs from '.';
import {BrowserRouter} from 'react-router-dom'
const tabData = [
    { 
      'value': 'category',
      'label': 'Explore by category',
    },
    { 
      'value': 'recent',
      'label': 'See recently added titles'
    }
]


test('should render 2 tabw for 2 length data', () => {
  render(<BrowserRouter><Tabs tabData={tabData}/></BrowserRouter>);
  const tabsElement = screen.getAllByTestId(/tab-/);
  expect(tabsElement.length).toBe(2);
});

const mockCallback = jest.fn();

it("should have green indicator color for currently reading tab by default", ()=>{
    render(<BrowserRouter><Tabs tabData={tabData} stateHandler={mockCallback }/></BrowserRouter>);
    const tabsElement = screen.getByTestId('tab-recent');
    fireEvent.click(tabsElement);
    
})