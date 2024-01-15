import {all} from 'redux-saga/effects';
import watchProductSaga from './sagas/productSaga';

function* rootSaga() {
  yield all([watchProductSaga()]);
}

export default rootSaga;
