import axios from 'axios';
import { getRequest } from '../../../../services/axiosClient';
export function requestGetUser() {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/atothey/demo/user',
  });
}

export function requestGetIdentityUsers() {
  return getRequest('users');
}
