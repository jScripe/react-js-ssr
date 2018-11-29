import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchSearch, fetchSearchSuccess, fetchSearchReject } from '../actions/search';
import 'regenerator-runtime/runtime';

// require('isomorphic-fetch');


export default function* watchFetchSearch() {
    yield takeEvery('START_FETCH_SEARCH', fetchSearchAsyncWorker);
}


export function* fetchSearchAsyncWorker({ filter, value, resultsFilter }) {
    resultsFilter = resultsFilter === 'rating' ? 'vote_average' : 'release_date';
    let limit = 10;

    yield put(fetchSearch());
    try {
        const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?sortBy=${resultsFilter}&sortOrder=desc&search=${value}&searchBy=${filter}&limit=${limit}`);
        const data = yield response.json();
        yield put(fetchSearchSuccess(data));
    } catch (error) {
        yield put(fetchSearchReject(error));
    }
}
