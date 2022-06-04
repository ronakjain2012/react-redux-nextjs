import { takeEvery, takeLatest  } from "redux-saga/effects";
import { handleGetUser,handleGetIdentityUsers } from "./user/handler/user";
import { GET_IDENTITY_USERS, GET_USER } from "../reducers/user/user";

export function* sagas() {
  yield takeEvery(GET_USER, handleGetUser);
  yield takeLatest(GET_IDENTITY_USERS, handleGetIdentityUsers)
}
