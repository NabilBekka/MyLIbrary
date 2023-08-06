import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import resultsMoviesReducer from "./features/results/resultsMovies";
import resultsSeriesReducer from "./features/results/resultsSeries";
import resultsGamesReducer from "./features/results/resultsGames";
import resultsBooksReducer from "./features/results/resultsBooks";
import linkReducer from "./features/link/linkSlice";

const store = configureStore({
    reducer: {
        search: searchReducer,
        link: linkReducer,
        resultsMovies: resultsMoviesReducer,
        resultsSeries: resultsSeriesReducer,
        resultsGames: resultsGamesReducer,
        resultsBooks: resultsBooksReducer
    }
});

export default store;