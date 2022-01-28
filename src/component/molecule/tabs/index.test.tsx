import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import Tabs from '.';

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
  render(<Tabs tabData={tabData}/>);
  const tabsElement = screen.getAllByTestId(/tab-/);
  expect(tabsElement.length).toBe(2);
});

it("should have green indicator color for currently reading tab by default", ()=>{
    render(<Tabs tabData={tabData}/>);
    const tabsElement = screen.getByTestId('tab-category');
    fireEvent.click(tabsElement);
    expect(tabsElement).toHaveStyle("border-bottom-color:#2CE080");
})