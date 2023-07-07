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

    test('should render parameter logo', () => {
        const { getByRole } = render(<Header />);
        expect(getByRole('img')).toBeInTheDocument();
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

    test('should render Login Component after clicking on login', () => {
        const { getByTestId, getByText } = render(<Header />);
        fireEvent.click(getByText('Se connecter'));
        expect(getByTestId('login')).toBeInTheDocument();
    });

    test('should render Register Component after clicking on register', () => {
        const { getByTestId, getByText } = render(<Header />);
        fireEvent.click(getByText('Inscription'));
        expect(getByTestId('register')).toBeInTheDocument();
    });

    test('should render ForgotPassword component after clicking on forgot password', () => {
        const { getByText, getByTestId } = render(<Header />);
        fireEvent.click(getByText('Se connecter'));
        fireEvent.click(getByText('Mot de passe oublié?'));
        expect(getByTestId('forgotPassword')).toBeInTheDocument();
    });

    test('should render profil after connection', () => {
        const { getByText, getByPlaceholderText } = render(<Header />);
        fireEvent.click(getByText('Se connecter'));
        const email = getByPlaceholderText('Entrer votre email');
        const password = getByPlaceholderText('Entrer votre mot de passe');
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(password, { target: { value: 'myPassword' } });
        fireEvent.click(getByText('Connexion'));
        expect(getByText('Mon profil')).toBeInTheDocument();
    });

    test('should render profil after connection', () => {
        const { getByText, getByPlaceholderText } = render(<Header />);
        fireEvent.click(getByText('Inscription'));
        const firstname = getByPlaceholderText('Entrez votre prénom');
        const lastname = getByPlaceholderText('Entrez votre nom');
        const email = getByPlaceholderText('Entrez votre email');
        const password = getByPlaceholderText('6 caractères au minimum');
        const pswConfirm = getByPlaceholderText('Confirmez votre mot de passe');
        fireEvent.change(firstname, { target: { value: 'Jone' } });
        fireEvent.change(lastname, { target: { value: 'Doe' } });
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        fireEvent.change(pswConfirm, { target: { value: 'myPasseword' } });
        fireEvent.click(getByText('Enregistrer'));
        expect(getByText('Mon profil')).toBeInTheDocument();
    });
});