import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_LIST } from "../actions/Auth/actionTypes";
import {
  getProductListSucess,
  getProductListFaliur,
} from "../actions/Auth";
import { getRequest } from "./request";
import URls from "../constants/urls";



function* getProductListJsonData(action) {
  try {
    const response = yield call(getRequest, URls.GET_PRODUCT_LIST);
    if (response.data) {
      yield put(getProductListSucess(response.data.products));
    }
  } catch (error) {
    alert(error)
    yield put(getProductListFaliur());
  }
}

function* watchGetRequest() {
  yield takeLatest(GET_PRODUCT_LIST, getProductListJsonData);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
