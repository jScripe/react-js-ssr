import { combineReducers } from 'redux';
import search from './search';
import resultsFilter from './resultsFilter';
import searchField from './searchField';
import filmsByTheSameGenreReducer from './films-by-the-same-genre';
import film from './film';

export default combineReducers({
    resultsFilter,
    searchField,
    search,
    filmsByTheSameGenreReducer,
    film
});
