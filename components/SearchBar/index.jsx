import { useState } from 'react';
import styles from '../Layout/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction, searchBarActivatedAction } from '../../lib/redux/features/search/searchSlice';
import { fetchMovies } from '../../lib/redux/features/results/resultsMovies';
import { fetchSeries } from '../../lib/redux/features/results/resultsSeries';
import { fetchGames } from '../../lib/redux/features/results/resultsGames';
import { fetchBooks } from '../../lib/redux/features/results/resultsBooks';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const link = useSelector( state => state.link);

    const handleSubmit = e => {
        e.preventDefault();
        if (search !== ''){
            dispatch(searchBarActivatedAction());
            dispatch(searchAction(search));
            dispatch(fetchMovies(search));
            dispatch(fetchSeries(search));
            dispatch(fetchGames(search));
            dispatch(fetchBooks(search));
            }
        setSearch('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} data-testid='form'>
            <input
            type="text"
            placeholder="Rechercher"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={styles.input}
            />
        </form>
    )
}

export default SearchBar;