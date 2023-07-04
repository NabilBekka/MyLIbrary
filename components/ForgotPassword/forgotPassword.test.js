import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import ForgotPassword from ".";
import { act } from "react-dom/test-utils";

describe('Test ForgotPassword component', () => {
    const reset = jest.fn();
    test('Should render the ForgotPassword component', () => {
        const { getByTestId } = render(<ForgotPassword />);
        expect(getByTestId('forgotPassword')).toBeInTheDocument();
    });    

    test('Should render the title ', async () => {
        jest.useFakeTimers();
        const { getByRole } = render(<ForgotPassword />);
        await act(async () => {
            jest.runAllTimers(); // Exécuter immédiatement tous les setTimeout
        });
        expect(getByRole('heading').textContent).toBe('Réinitialisation du mot de passe');
    });    

    test('Should render the email input', async () => {
        jest.useFakeTimers();
        const { getByPlaceholderText } = render(<ForgotPassword />);
        await act(async () => {
            jest.runAllTimers();
        });
        expect(getByPlaceholderText('Entrez votre email')).toBeInTheDocument();
    });    

    test('Should render the button', async () => {
        jest.useFakeTimers();
        const { getByRole } = render(<ForgotPassword />);
        await act(async () => {
            jest.runAllTimers();
        });
        expect(getByRole('button').textContent).toBe('Réinitialiser');
    });    

    test('Should call reset function', async () => {
        jest.useFakeTimers();
        const { getByTestId } = render(<ForgotPassword exit={reset} />);
        await act(async () => {
            jest.runAllTimers();
        });
        fireEvent.submit(getByTestId('forgotPassword'));
        await act(async () => {
            jest.runAllTimers();
        });
        expect(reset).toBeCalled();
    });    

    test('Should check that the button is disabled or not disabled ', async () => {
        jest.useFakeTimers();
        const { getByRole, getByPlaceholderText } = render(<ForgotPassword />);
        await act(async () => {
            jest.runAllTimers();
        });
        const button = getByRole('button');
        const email = getByPlaceholderText('Entrez votre email');
        expect(button).toBeDisabled();
        fireEvent.change(email, { target: { value: 'jonedoe@gmail.com' } });
        expect(button).not.toBeDisabled();
        fireEvent.change(email, { target: { value: 'jonedoe' } });
        expect(button).toBeDisabled();
    });    

    test('Should confirm password reset', async () => {
        jest.useFakeTimers();
        const { getByTestId, getByText } = render(<ForgotPassword exit={reset} />);
        await act(async () => {
            jest.runAllTimers();
        });
        fireEvent.submit(getByTestId('forgotPassword'));
        expect(getByText('Un mail de réinitialisation a été envoyer à votre adresse email, si celle-ci est valide')).toBeInTheDocument();
    });    
});