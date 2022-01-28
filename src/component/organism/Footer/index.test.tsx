import React from 'react';
import {render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    it('renders logo', () => {
        render(<Footer/>);
        const logoElement = screen.getByTestId('logo');;
        expect(logoElement).toBeInTheDocument();
    });
    it('renders slogan text', () => {
        render(<Footer/>);
        const logoElement = screen.getByTestId('slogan');;
        expect(logoElement.textContent).toBe('Big ideas in small packages Start learning now');
    });
    it('renders three topics', () => {
        render(<Footer/>);
        const logoElement = screen.getAllByTestId('topics');
        expect(logoElement.length).toBe(3)
    });
});