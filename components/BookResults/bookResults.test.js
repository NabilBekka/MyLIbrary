import '@testing-library/jest-dom';
import { render } from '../../lib/redux/reduxRender';
import BooksResult from '.';

describe('Test Home component', () => {
    const volumeInfo = {
            title: "Une Justice nauséabonde",
            authors: [
                "Nabil Nasr",
                "Jone Doe"
              ],
            publisher: "Librinova",
            description: "My description"
        };

    test('Should render title', () => {
        const { getByRole } = render(<BooksResult infos={volumeInfo}/>);
        expect(getByRole('heading').textContent).toBe("Une Justice nauséabonde");
    });

    test('Should render authors', () => {
        const { getAllByRole } = render(<BooksResult infos={volumeInfo}/>);
        expect(getAllByRole('listitem')[0].textContent).toBe("Nabil Nasr");
        expect(getAllByRole('listitem')[1].textContent).toBe("Jone Doe");
    });

    test('Should render publisher', () => {
        const { getByText } = render(<BooksResult infos={volumeInfo}/>);
        expect(getByText('Librinova')).toBeInTheDocument();
    });

    test('Should render the add to favorite button', () => {
        const { getByRole } = render(<BooksResult infos={volumeInfo}/>);
        expect(getByRole('button').textContent).toBe('Ajouter');
    });
});