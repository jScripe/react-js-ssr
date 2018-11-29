import {
    CHANGE_RESULTS_FILTER
} from '../actions/types/resultsFilter';

const initialState = {
    resultsFilter: 'rating'
};

function resultsFilter(state = initialState, action) {
    switch (action.type) {
        case CHANGE_RESULTS_FILTER:
            return { ...state, resultsFilter: action.data };
        default:
            return state;
    }
}

export default resultsFilter;
