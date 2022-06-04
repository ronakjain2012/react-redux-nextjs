import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user"
  });
}

export function requestGetIdentityUsers() {
  return axios.request({
    method: "get",
    url: "http://localhost:8080/api/users"
  });
}
