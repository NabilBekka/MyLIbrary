import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Layout from '.';

describe('Test Layout component', () => {
    test('Should render the Header component', () => {
        const { getByTestId } = render(<Layout />);
        expect (getByTestId('header')).toBeInTheDocument();
    });
    
    test('Should render the main', () => {
        const { getByTestId } = render(<Layout />);
        expect (getByTestId('main')).toBeInTheDocument();
    });
    
    test('Should render the Footer component', () => {
        const { getByTestId } = render(<Layout />);
        expect (getByTestId('footer')).toBeInTheDocument();
    });
});