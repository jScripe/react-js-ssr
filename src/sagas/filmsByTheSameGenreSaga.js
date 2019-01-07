import { takeEvery, call, put } from 'redux-saga/effects';
import {
    fetchFilmsByTheSameGenre,
    fetchFilmsByTheSameGenreSuccess,
    fetchFilmsByTheSameGenreReject
} from '../actions/getFilmsByTheSameGenre';


export function* watchFetchFilmsByTheSameGenre() {
    yield takeEvery('START_FETCH_FILMS_BY_THE_SAME_GENRE', getFilmsByTheSameGenreAsyncWorker);
}

export default function* getFilmsByTheSameGenreAsyncWorker({ genre }) {
    let limit = 20;
    yield put(fetchFilmsByTheSameGenre());
    try {
        const response = yield call(
            fetch,
            'http://react-cdp-api.herokuapp.com/movies?search=&searchBy='+ genre+'&limit='+limit
        );
        const data = yield response.json();
        yield put(fetchFilmsByTheSameGenreSuccess(data));
    } catch {
        yield put(fetchFilmsByTheSameGenreReject());
    }
}
