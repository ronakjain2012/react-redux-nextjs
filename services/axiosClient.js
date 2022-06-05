import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8080/api/';

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

// axiosClient.defaults.withCredentials = true;
axiosClient.interceptors.request.use(function (request) {
    console.log(request,"Rrquest Sent");
    return request;
}, null, {
    synchronous: true
});


axiosClient.interceptors.response.use(function (response) {
    console.log(response,"Response Received");
    //Dispatch any action on success
    return response;
}, function (error) {
    console.log(error,"Response Received");
    if (error.response.status === 401) {
        //Add Logic to 
        //1. Redirect to login page or 
        //2. Request refresh token
    }
    return Promise.reject(error);
});

export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
}

export default axiosClient;