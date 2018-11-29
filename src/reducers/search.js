import {
    FETCH_SEARCH,
    FETCH_SEARCH_REJECT,
    FETCH_SEARCH_SUCCESS,
    CHANGE_SEARCH_FILTER
} from '../actions/types/search';

const initialState = {
    list: [],
    isFetching: false,
    filter: 'title',
    limit: '100'
};

function search(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH:
            return { ...state, isFetching: true };
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.data.data
            };
        case FETCH_SEARCH_REJECT:
            return { ...state, isFetching: false, list: [] };
        case CHANGE_SEARCH_FILTER:
            return { ...state, filter: action.data };
        default:
            return state;
    }
}

export default search;
