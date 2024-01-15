import {call, put, takeEvery} from 'redux-saga/effects';
import {apiNetwork} from '../../network/apiService';
import {
  fetchAllProductsError,
  fetchAllProductsRequest,
  fetchAllProductsSuccess,
} from '../slices/allProductsSlice';
import {
  fetchProductError,
  fetchProductRequest,
  fetchProductSuccess,
} from '../slices/productSlice';

export function* getAllProducts(): Generator<any, void, any> {
  try {
    const response = yield call(apiNetwork.get, '/products');
    yield put(fetchAllProductsSuccess(response.data.products));
  } catch (error) {
    console.log('error', error);
    yield put(fetchAllProductsError(error.message));
  }
}

export function* getProductById(action: any): Generator<any, void, any> {
  try {
    const productId = action.payload;
    const response = yield call(apiNetwork.get, `/products/${productId}`);
    yield put(fetchProductSuccess(response.data));
  } catch (error) {
    console.log('error', error);
    yield put(fetchProductError(error.message));
  }
}

export default function* watchProductSaga() {
  yield takeEvery(fetchAllProductsRequest.type, getAllProducts);
  yield takeEvery(fetchProductRequest.type, getProductById);
}
