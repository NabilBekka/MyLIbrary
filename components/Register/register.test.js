import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Register from ".";

describe('Test Register component', () => {
    const exit = jest.fn();

    test('Should render the Login component', () => {
        const { getByTestId } = render(<Register />);
        expect(getByTestId('register')).toBeInTheDocument();
    });

    test('Should render the firstname label', () => {
        const { getByText } = render(<Register />);
        expect(getByText('Prénom:')).toBeInTheDocument();
    });

    test('Should render the firstname input', () => {
        const { getByPlaceholderText } = render(<Register />);
        expect(getByPlaceholderText('Entrez votre prénom')).toBeInTheDocument();
    });

    test('Should render the lastname label', () => {
        const { getByText } = render(<Register />);
        expect(getByText('Nom:')).toBeInTheDocument();
    });

    test('Should render the lastname input', () => {
        const { getByPlaceholderText } = render(<Register />);
        expect(getByPlaceholderText('Entrez votre nom')).toBeInTheDocument();
    });

    test('Should render the email label', () => {
        const { getByText } = render(<Register />);
        expect(getByText('Email:')).toBeInTheDocument();
    });

    test('Should render the email input', () => {
        const { getByPlaceholderText } = render(<Register />);
        expect(getByPlaceholderText('Entrez votre email')).toBeInTheDocument();
    });

    test('Should render the passeword label', () => {
        const { getByText } = render(<Register />);
        expect(getByText('Mot de passe:')).toBeInTheDocument();
    });

    test('Should render the passeword input', () => {
        const { getByPlaceholderText } = render(<Register />);
        expect(getByPlaceholderText('6 caractères au minimum')).toBeInTheDocument();
    });

    test('Should render the passeword confirm input', () => {
        const { getByPlaceholderText } = render(<Register />);
        expect(getByPlaceholderText('Confirmez votre mot de passe')).toBeInTheDocument();
    });

    test('Should render the register button', () => {
        const { getByRole } = render(<Register />);
        expect(getByRole('button').textContent).toBe('Enregistrer');
    });

    test('Should change the value of firstname input', () => {
        const { getByPlaceholderText } = render(<Register />);
        const firstname = getByPlaceholderText('Entrez votre prénom');
        fireEvent.change(firstname, { target: { value: 'Jone' } });
        expect(firstname.value).toBe('Jone');
    });

    test('Should change the value of email input', () => {
        const { getByPlaceholderText } = render(<Register />);
        const lastname = getByPlaceholderText('Entrez votre nom');
        fireEvent.change(lastname, { target: { value: 'Doe' } });
        expect(lastname.value).toBe('Doe');
    });

    test('Should change the value of email input', () => {
        const { getByPlaceholderText } = render(<Register />);
        const email = getByPlaceholderText('Entrez votre email');
        fireEvent.change(email, { target: { value: 'name@gmail.com' } });
        expect(email.value).toBe('name@gmail.com');
    });

    test('Should change the value of password input', () => {
        const { getByPlaceholderText } = render(<Register />);
        const password = getByPlaceholderText('6 caractères au minimum');
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        expect(password.value).toBe('myPasseword');
    });

    test('Should check that the button is disabled or not disabled ', () => {
        const { getByRole, getByPlaceholderText } = render(<Register />);
        const firstname = getByPlaceholderText('Entrez votre prénom');
        const lastname = getByPlaceholderText('Entrez votre nom');
        const email = getByPlaceholderText('Entrez votre email');
        const password = getByPlaceholderText('6 caractères au minimum');
        const pswConfirm = getByPlaceholderText('Confirmez votre mot de passe');
        const button = getByRole('button');
        expect(button).toBeDisabled();
        fireEvent.change(firstname, { target: { value: 'Jone' } });
        fireEvent.change(lastname, { target: { value: 'Doe' } });
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        fireEvent.change(pswConfirm, { target: { value: 'myPasseword' } });
        expect(button).not.toBeDisabled();
        fireEvent.change(pswConfirm, { target: { value: 'myPass' } });
        expect(button).toBeDisabled();
        fireEvent.change(password, { target: { value: '' } });
        fireEvent.change(pswConfirm, { target: { value: '' } });
        expect(button).toBeDisabled();
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        fireEvent.change(pswConfirm, { target: { value: 'myPasseword' } });
        fireEvent.change(email, { target: { value: 'jonedoegmail.com' } });
        expect(button).toBeDisabled();
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        fireEvent.change(pswConfirm, { target: { value: 'myPasseword' } });
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(firstname, { target: { value: '' } });
        expect(button).toBeDisabled();
        fireEvent.change(password, { target: { value: 'myPasseword' } });
        fireEvent.change(pswConfirm, { target: { value: 'myPasseword' } });
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        fireEvent.change(firstname, { target: { value: 'Jone' } });
        fireEvent.change(lastname, { target: { value: '' } });
        expect(button).toBeDisabled();
    })

    test('Should submit the form on button click', () => {
        const { getByTestId } = render(<Register exit={exit}/>);
        fireEvent.submit(getByTestId('register'));
        expect(exit).toBeCalled();
      });
});