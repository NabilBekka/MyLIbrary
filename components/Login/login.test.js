import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Login from ".";

describe('Test Login component', () => {
    const exit = jest.fn();

    test('Should render the Login component', () => {
        const { getByTestId } = render(<Login />);
        expect(getByTestId('login')).toBeInTheDocument();
    });

    test('Should render the email label', () => {
        const { getByText } = render(<Login />);
        expect(getByText('Email:')).toBeInTheDocument();
    });

    test('Should render the email input', () => {
        const { getByPlaceholderText } = render(<Login />);
        expect(getByPlaceholderText('Entrer votre email')).toBeInTheDocument();
    });

    test('Should render the passeword label', () => {
        const { getByText } = render(<Login />);
        expect(getByText('Mot de passe:')).toBeInTheDocument();
    });

    test('Should render the passeword input', () => {
        const { getByPlaceholderText } = render(<Login />);
        expect(getByPlaceholderText('Entrer votre mot de passe')).toBeInTheDocument();
    });

    test('Should render the login button', () => {
        const { getByText } = render(<Login />);
        expect(getByText('Mot de passe oublié?')).toBeInTheDocument();
    });

    test('Should render the login button', () => {
        const { getByRole } = render(<Login />);
        expect(getByRole('button').textContent).toBe('Connexion');
    });

    test('Should change the value of email input', () => {
        const { getByPlaceholderText } = render(<Login />);
        const email = getByPlaceholderText('Entrer votre email');
        fireEvent.change(email, { target: { value: 'name@gmail.com' } });
        expect(email.value).toBe('name@gmail.com');
    });

    test('Should change the value of password input', () => {
        const { getByPlaceholderText } = render(<Login />);
        const password = getByPlaceholderText('Entrer votre mot de passe');
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        expect(password.value).toBe('myPasseword');
    });

    test('Should call function by clicking on forgot password', () => {
        const { getByText } = render(<Login exit={exit}/>);
        fireEvent.click(getByText('Mot de passe oublié?'));
        expect(exit).toBeCalled();
    });

    test('Should submit the form on button click', () => {
        const { getByTestId } = render(<Login exit={exit}/>);
        fireEvent.submit(getByTestId('login'));
        expect(exit).toBeCalled();
      });

    test('Should check if the button is disabled', () => {
        const { getByRole, getByPlaceholderText } = render(<Login />);
        const button = getByRole('button');
        const email = getByPlaceholderText('Entrer votre email');
        const password = getByPlaceholderText('Entrer votre mot de passe');
        expect(button).toBeDisabled();
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(password, { target: { value: 'myPassword' } });
        expect(button).not.toBeDisabled();
        fireEvent.change(email, { target: { value: 'jonedoe' } });
        fireEvent.change(password, { target: { value: 'myPassword' } });
        expect(button).toBeDisabled();
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(password, { target: { value: 'myPa' } });
        expect(button).toBeDisabled();
      });
});