import { CHANGE_SEARCH_FIELD_TEXT } from '../actions/types/searchField';

const initialState = {
    value: ''
};

function searchField(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD_TEXT:
            return { ...state, value: action.data };
        default:
            return state;
    }
}

export default searchField;
