import '@testing-library/jest-dom';
import { render } from '../../lib/redux/reduxRender';
import Footer from '.';

describe('Test Footer component', () => {
    test('Should render the component', () => {
        const { getByRole } = render(<Footer />);
        expect(getByRole('contentinfo')).toBeInTheDocument();
    });
});