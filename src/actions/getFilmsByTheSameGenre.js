/*eslint-disable */
import {
    START_FETCH_FILMS_BY_THE_SAME_GENRE,
    FETCH_FILMS_BY_THE_SAME_GENRE,
    FETCH_FILMS_BY_THE_SAME_GENRE_REJECT,
    FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS
} from './types/get-films-by-the-same-genre';


export const fetchFilmsByTheSameGenre= () => ({ type: FETCH_FILMS_BY_THE_SAME_GENRE});

export const fetchFilmsByTheSameGenreSuccess = result => ({
    type: FETCH_FILMS_BY_THE_SAME_GENRE_SUCCESS,
    data: result
});

export const fetchFilmsByTheSameGenreReject = error => ({
    type: FETCH_FILMS_BY_THE_SAME_GENRE_REJECT,
    error
});

export const startFetchFilmsByTheSameGenre = (genre) => (
    {
        type: START_FETCH_FILMS_BY_THE_SAME_GENRE,
        genre
    }
);

