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

    test('should render title', () => {
        const { getByText, getByRole } = render(<Header />);
        fireEvent.click(getByText('Se connecter'));
        expect(getByRole('button').textContent).toBe('Mon profil');
    });
});