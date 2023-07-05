import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Results from '.';

describe('Testing home page', () => {
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
    
    test('Should render results', () => {
        const { getAllByTestId } = render(<Results results={results}/>);
        expect(getAllByTestId('result')[0]).toBeInTheDocument();
        expect(getAllByTestId('result')[1]).toBeInTheDocument();
    });

    test('Should render results elements', () => {
        const { getAllByRole, getAllByTestId } = render(<Results results={results}/>);
        expect(getAllByRole('img')[0]).toBeInTheDocument();
        expect(getAllByRole('heading')[0]).toBeInTheDocument();
        expect(getAllByTestId('p')[0]).toBeInTheDocument();
        expect(getAllByRole('button')[0].textContent).toBe('Ajouter');
    });
});