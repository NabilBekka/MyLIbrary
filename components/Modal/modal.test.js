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

    test('Should render the exit logo', () => {
        const { getByRole } = render(<Modal />);
        expect(getByRole('img')).toBeInTheDocument();
    });

    test('Should call exit', () => {
        const { getByRole } = render(<Modal exit={exit} />);
        fireEvent.click(getByRole('img'));
        expect(exit).toBeCalled();
    });
})