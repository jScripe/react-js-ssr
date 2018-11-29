import {
    FETCH_FILM,
    FETCH_FILM_REJECT,
    FETCH_FILM_SUCCESS
} from '../actions/types/film';

let initialState = {
    chosenFilm: {
        release_date: '',
        genres: []
    }
};

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FILM:
            return { ...state, isFetching: true };
        case FETCH_FILM_SUCCESS:
            return { ...state, isFetching: false, chosenFilm: action.data };
        case FETCH_FILM_REJECT:
            return { ...state, isFetching: false };
        default:
            return state;
    }
}
