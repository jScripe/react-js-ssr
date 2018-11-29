/*eslint-disable */
// import { CHOOSE_FILM } from './types/search';
// export const getFilmInfo = (array, id) => {
//     return {
//         type: CHOOSE_FILM,
//         id,
//         array
//     };
// }

import {
    START_FETCH_FILM,
    FETCH_FILM,
    FETCH_FILM_REJECT,
    FETCH_FILM_SUCCESS
} from './types/film';


export const fetchFilm = () => ({ type: FETCH_FILM });

export const fetchFilmSuccess = result => ({
    type: FETCH_FILM_SUCCESS,
    data: result
});

export const fetchFilmReject = error => ({
    type: FETCH_FILM_REJECT,
    error
});

export const startFetchFilm = (id) => (
    {
        type: START_FETCH_FILM,
        id
    }
);

