import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Modal from '.';

describe('Test Modal component', () => {
    const exit = jest.fn();

    test('Should render the Modal compoenent', () => {
        const { getByTestId } = render(<Modal />);
        expect(getByTestId('modal')).toBeInTheDocument();
    });

    test('Should render the modal-container compoenent', () => {
        const { getByTestId } = render(<Modal />);
        expect(getByTestId('modal-container')).toBeInTheDocument();
    });

    test('Should call exit', () => {
        const { getByTestId } = render(<Modal exit={exit} />);
        fireEvent.click(getByTestId('modal'));
        expect(exit).toBeCalled();
    });
})