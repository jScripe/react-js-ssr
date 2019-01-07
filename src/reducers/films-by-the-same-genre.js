import {
    FETCH_FILMS_BY_THE_SAME_GENRE,
    FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS,
    FETCH_FILMS_BY_THE_SAME_GENRE_REJECT
} from '../actions/types/get-films-by-the-same-genre';

const initialState = {
    filmsByTheSameGenre: []
};

function filmsByTheSameGenreReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FILMS_BY_THE_SAME_GENRE:
            return { ...state, isFetching: true };
        case FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                filmsByTheSameGenre: action.data.data
            };
        case FETCH_FILMS_BY_THE_SAME_GENRE_REJECT:
            return { ...state, isFetching: false, filmsByTheSameGenre: [] };
        default:
            return state;
    }
}

export default filmsByTheSameGenreReducer;
