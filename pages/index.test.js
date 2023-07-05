import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '.';

describe('Testing home page', () => {
    test('Should render Results component', () => {
        const { getByTestId } = render(<Home />);
        expect(getByTestId('results')).toBeInTheDocument();
    });
});