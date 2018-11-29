import {
    START_FETCH_SEARCH,
    FETCH_SEARCH,
    FETCH_SEARCH_REJECT,
    FETCH_SEARCH_SUCCESS
} from './types/search';


export const fetchSearch = () => ({ type: FETCH_SEARCH });

export const fetchSearchSuccess = result => ({
    type: FETCH_SEARCH_SUCCESS,
    data: result
});

export const fetchSearchReject = error => ({
    type: FETCH_SEARCH_REJECT,
    error
});

export const startFetchSearch = (filter, value, resultsFilter) => (
    {
        type: START_FETCH_SEARCH,
        filter,
        value,
        resultsFilter
    }
);
