// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenHub/i);
    expect(titleElement).toBeInTheDocument();
});
