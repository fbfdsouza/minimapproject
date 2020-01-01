import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_USERS, FETCH_USERS_SUCCESS } from "../constants";
import fetchUsers from "../api/fetchUsers";

function* asyncFetchUsers() {
  const response = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
}

export function* watchFetchingUsers() {
  yield takeEvery(FETCH_USERS, asyncFetchUsers);
}
