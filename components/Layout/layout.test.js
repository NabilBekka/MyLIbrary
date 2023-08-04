import '@testing-library/jest-dom';
import { fireEvent, render } from '../../lib/redux/reduxRender';
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

    test('Should render the title', () => {
        const { getByRole } = render(<Layout />);
        expect(getByRole('heading').textContent).toBe('BIENVENUE SUR MY LIBRARY');
    });

    test('Should render the introduction', () => {
        const { getByText } = render(<Layout />);
        expect(getByText('Connectez-vous et remplissez votre bibliothèque')).toBeInTheDocument();
    });

    test('Should render the input', () => {
        const { getByPlaceholderText } = render(<Layout />);
        expect(getByPlaceholderText('Rechercher')).toBeInTheDocument();
    });

    test('Should change the entry of the input', () => {
        const { getByPlaceholderText } = render(<Layout />);
        const input = getByPlaceholderText('Rechercher');
        fireEvent.change(input, { target: { value: 'Marvel' } });
        expect(input.value).toBe('Marvel');
    });

    test('Should render PageNav component', () => {
        const { getByTestId } = render(<Layout />);
        expect(getByTestId('pageNav')).toBeInTheDocument();
    });

    test('Should render links of PageNav component', () => {
        const { getAllByRole } = render(<Layout />);
        expect(getAllByRole('link')[1].textContent).toBe('Films');
        expect(getAllByRole('link')[2].textContent).toBe('Séries');
        expect(getAllByRole('link')[3].textContent).toBe('Jeux');
        expect(getAllByRole('link')[4].textContent).toBe('Livres');
    });

    test('Should reset input on submit', () => {
        const { getByTestId, getByPlaceholderText } = render(<Layout />);
        const input = getByPlaceholderText('Rechercher');
        fireEvent.change(input, { target: { value: 'Marvel' } });
        fireEvent.submit(getByTestId('form'));
        expect(input.value).toBe('');
    });
});