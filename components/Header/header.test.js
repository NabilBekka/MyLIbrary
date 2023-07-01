import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Header from '.';

describe ('Test Header component', () => {
    test('should render Connexion component', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('connexion-component')).toBeInTheDocument();
    });

    test('should render link', () => {
        const { getByRole } = render(<Header />);
        expect(getByRole('link').textContent).toBe('MY LIBRARY');
    });

    test('should render Modal Component after clicking on login', () => {
        const { getByTestId, getByText } = render(<Header />);
        fireEvent.click(getByText('Se connecter'));
        expect(getByTestId('modal')).toBeInTheDocument();
    });

    test('should render Modal Component after clicking on register', () => {
        const { getByTestId, getByText } = render(<Header />);
        fireEvent.click(getByText('Inscription'));
        expect(getByTestId('modal')).toBeInTheDocument();
    });
});