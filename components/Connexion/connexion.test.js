import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Connexion from '.';

const handleLogin = jest.fn();
const handleRegister = jest.fn();

describe('Test Connexion component', () => {
    test('should render register button', () => {
        const {getAllByRole} = render(<Connexion />);
        expect(getAllByRole('button')[0].textContent).toBe('Inscription');
    });

    test('should render login button', () => {
        const {getAllByRole} = render(<Connexion />);
        expect(getAllByRole('button')[1].textContent).toBe('Se connecter');
    });
    
    test('should click on login button', () => {
        const {getAllByRole} = render(<Connexion isLogin={handleLogin}/>);
        fireEvent.click(getAllByRole('button')[1]);
        expect(handleLogin).toBeCalled();
    });
    
    test('should click on register button', () => {
        const {getAllByRole} = render(<Connexion isRegister={handleRegister}/>);
        fireEvent.click(getAllByRole('button')[0]);
        expect(handleRegister).toBeCalled();
    });
});