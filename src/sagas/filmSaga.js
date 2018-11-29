import { takeEvery, call, put } from 'redux-saga/effects';
import {
    fetchFilm,
    fetchFilmSuccess,
    fetchFilmReject
} from '../actions/film';


export function* watchFetchFilm() {
    yield takeEvery('START_FETCH_FILM', getFilmAsync);
}

export default function* getFilmAsync({ id }) {
    yield put(fetchFilm());
    try {
        const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${id}`);
        const data = yield response.json();
        yield put(fetchFilmSuccess(data));
    } catch {
        yield put(fetchFilmReject());
    }
}
