import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Explore from '.';
import { BrowserRouter } from "react-router-dom";
function renderExplore() {
    render(
      <BrowserRouter>
        <Explore />
      </BrowserRouter>
    );
  }

describe("Explore", () => {
    test('render Explore by category heading', () => {
        renderExplore();
        const linkElement = screen.getByText('Explore by category')
        expect(linkElement).toBeInTheDocument();
    });

    test("should recently added text to be clickable", () => {
        renderExplore();
        const ButtonElement = screen.getByText(/See recently added titles/);
        fireEvent.click(ButtonElement);
        expect(window.location.pathname).toBe("/");
    });
    test("should See popular titles to be clickable", () => {
        renderExplore();
        const ButtonElement = screen.getByText(/See popular titles/);
        fireEvent.click(ButtonElement);
        expect(window.location.pathname).toBe("/");
    });
    test("Explore by category text should be blue", () => {
        renderExplore();
        const linkElement = screen.getByText('Explore by category')
        expect(linkElement).toHaveStyle("color: #116BE9");
    });
    test("Nav Icon count should be 26", () => {
        renderExplore();
        const navIconElements = screen.getAllByTestId('nav-icon');
        expect(navIconElements.length).toBe(26);
    })
});