import { all } from 'redux-saga/effects';
import watchFetchSearch from './searchSaga';
import { watchFetchFilmsByTheSameGenre } from './filmsByTheSameGenreSaga';
import { watchFetchFilm } from './filmSaga';

export default function* rootSaga() {
    yield all([
        watchFetchSearch(),
        watchFetchFilmsByTheSameGenre(),
        watchFetchFilm()
    ]);
}
