import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '.';

describe('Test Home component', () => {
    const results = [
        {
            Title: "Batman v Superman: Dawn of Justice",
            Year: "2016",
            imdbID: "tt2975590",
            Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            Title: "Superman Returns",
            Year: "2006",
            imdbID: "tt0348150",
            Poster: "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        }
    ];

    test('should render the result div', () => {
        const { getAllByTestId } = render(<Home results={results} />);
        expect(getAllByTestId('result').length).toBe(2);
    });
});