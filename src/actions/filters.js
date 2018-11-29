import { CHANGE_RESULTS_FILTER } from './types/resultsFilter';
import { CHANGE_SEARCH_FILTER } from './types/search';
import { CHANGE_SEARCH_FIELD_TEXT } from './types/searchField';

/*eslint-disable */
export function changeFilterOfSearch(text) {
    return {
        type: CHANGE_SEARCH_FILTER,
        data: text
    };
}

export function changeResultsFilter(text) {
    console.log(text);
    return {
        type: CHANGE_RESULTS_FILTER,
        data: text
    };
}

export function changeValueOfSearchField(text) {
    return {
        type: CHANGE_SEARCH_FIELD_TEXT,
        data: text
    };
}
