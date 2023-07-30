import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PageNav from '.';

describe('Test PageNav component', () => {
    test('Should render links', () => {
        const { getAllByRole } = render(<PageNav />);
        expect(getAllByRole('link')[0].textContent).toBe('Films');
        expect(getAllByRole('link')[1].textContent).toBe('Séries');
        expect(getAllByRole('link')[2].textContent).toBe('Jeux');
        expect(getAllByRole('link')[3].textContent).toBe('Livres');
    });
});