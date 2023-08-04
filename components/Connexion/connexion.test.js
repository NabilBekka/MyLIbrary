import '@testing-library/jest-dom';
import { fireEvent, render } from '../../lib/redux/reduxRender';
import Connexion from '.';

const dispalyModal = jest.fn();

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
        const {getAllByRole} = render(<Connexion displayModal={dispalyModal}/>);
        fireEvent.click(getAllByRole('button')[1]);
        expect(dispalyModal).toBeCalled();
    });
    
    test('should click on register button', () => {
        const {getAllByRole} = render(<Connexion displayModal={dispalyModal}/>);
        fireEvent.click(getAllByRole('button')[0]);
        expect(dispalyModal).toBeCalled();
    });
});