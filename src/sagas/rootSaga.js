import { all } from 'redux-saga/effects';
import watchFetchSearch from './searchSaga';
import { watchFetchFilm } from './filmSaga';

export default function* rootSaga() {
    yield all([
        watchFetchSearch(),
        watchFetchFilm()
    ]);
}
