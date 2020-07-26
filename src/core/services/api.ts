import axios, { AxiosResponse } from 'axios';

const TIMEOUT = 5000;
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const createAPI = () => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: TIMEOUT,
        withCredentials: true,
    });

    const onSuccess = (response: AxiosResponse<any[]>) => response;

    api.interceptors.response.use(onSuccess);

    return api;
};

export default createAPI;
