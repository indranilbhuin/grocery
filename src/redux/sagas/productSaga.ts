import {call, put, takeEvery} from 'redux-saga/effects';
import {apiNetwork} from '../../network/apiService';
import {
  fetchAllProductsError,
  fetchAllProductsRequest,
  fetchAllProductsSuccess,
} from '../slices/allProductsSlice';

export function* getAllProducts(): Generator<any, void, any> {
  try {
    const response = yield call(apiNetwork.get, '/products');
    yield put(fetchAllProductsSuccess(response.data.products));
  } catch (error) {
    console.log("error", error)
    yield put(fetchAllProductsError(error));
  }
}

export default function* watchProductSaga() {
  yield takeEvery(fetchAllProductsRequest.type, getAllProducts);
}
