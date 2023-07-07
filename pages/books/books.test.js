import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Books from '.';

describe('Test Home component', () => {
    const results = [
        {
            id:1,
            volumeInfo: {
                title: "Une Justice nauséabonde",
                authors: [
                    "Nabil Nasr",
                    "Jone Doe"
                ],
                publisher: "Librinova",
                description: "My description"
            }
        },
        {   
            id:2,
            volumeInfo : {
                title: "My book",
                authors: [
                    "Jone Doe"
                ],
                publisher: "My publisher",
                description: "My description"
            }
            
        }
    ];
    test('Should render BookResults component', () => {
        const { getAllByTestId } = render(<Books results={results}/>);
        expect(getAllByTestId('bookResult').length).toBe(2);
    })
});