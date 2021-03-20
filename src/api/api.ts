import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4091/inventoryManagement'
})

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
