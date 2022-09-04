import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

const service: AxiosInstance = axios.create({
    timeout: 5000
});

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token: string = localStorage.getItem('accessToken') || ''
        if (token) {
            if (config?.headers) {
                config.headers.Authorization = 'Bearer ' + token;
            }
        }
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response;
        } else {
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        if(error.response?.status === 401) {
            localStorage.removeItem('accessToken');
            const redirectUrl = window.location.href;
            const loginUrl = '/toy-proxy/toy-login/?redirect=' + redirectUrl;
            window.location.href = loginUrl;
        }
        return Promise.reject();
    }
);

export default service;
