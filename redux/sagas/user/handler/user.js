import { call, put } from 'redux-saga/effects';
import { errorResponse } from '../../../../services/responseHandler';
import { setAction } from '../../../reducers/api/api';
import { setIdentityUsers, setUser } from '../../../reducers/user/user';
import { requestGetIdentityUsers, requestGetUser } from '../requests/user';

export function* handleGetUser(action) {
  try {
    yield put(setAction(action));
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(errorResponse(error));
  }
}

export function* handleGetIdentityUsers(action) {
  try {
    yield put(setAction(action));
    const response = yield call(requestGetIdentityUsers);
    const { data } = response;
    yield put(setIdentityUsers(data));
  } catch (error) {
    console.log(errorResponse(error));
  }
}
