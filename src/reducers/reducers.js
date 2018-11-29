import { combineReducers } from 'redux';
import search from './search';
import resultsFilter from './resultsFilter';
import searchField from './searchField';
import film from './film';

export default combineReducers({
    resultsFilter,
    searchField,
    search,
    film
});
