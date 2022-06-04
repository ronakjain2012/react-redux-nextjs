import { call, put } from "redux-saga/effects";
import { setIdentityUsers, setUser } from "../../../reducers/user/user";
import { requestGetIdentityUsers, requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetIdentityUsers(action) {
  try {
    const response = yield call(requestGetIdentityUsers);
    const { data } = response;
    yield put(setIdentityUsers(data));
  } catch (error) {
    console.log(error);
  }
}