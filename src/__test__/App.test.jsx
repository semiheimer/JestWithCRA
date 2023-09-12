import {render, screen} from '@testing-library/react';
import React from 'react';
import App from '../App';

function Test() {
    return (
        <>
            <button type="button">deneme 1</button>
            <button type="button">deneme 2</button>
        </>
    );
}

// debug();

// getByText
test('should render App without crashing', () => {
    render(<App />);
    const appElement = screen.getByText('Hello');
    expect(appElement).toBeInTheDocument();
});

// getByRole
test('should render element correctly', () => {
    render(<Test />);
    const appElement = screen.getByRole('button', {name: 'deneme 2'});
    expect(appElement).toBeInTheDocument();
});
