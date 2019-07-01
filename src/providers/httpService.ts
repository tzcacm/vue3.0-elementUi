import { SERVE_URL } from '../environments/environments';
import router from '../router';
import axios from 'axios';

export class HttpService {

    constructor() { }

    private headers = [{ 'content-type': 'application/json' }, { 'content-type': 'application/x-www-form-urlencoded;chartset=UTF-8' }];

    private instance = axios.create({
        baseURL: SERVE_URL,
        timeout: 5000
    });

    /**
     * 请求拦截
     */
    interceptors() {

        //请求拦截
        this.instance.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        //响应拦截
        this.instance.interceptors.response.use(response => {
            if (response.data && response.data.code === 401) { // 401, token失效
                router.push({ name: 'login' });
            }
            return response
        }, error => {
            return Promise.reject(error)
        })

    }


    getData(url, params) {
        this.interceptors();
        return new Promise((resolve, reject) => {
            this.instance.get(url, { headers: this.headers[0], params: params })
                .then(res => {
                    res.status == 200 ? resolve(res) : reject(res.status);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    postData(url, params) {
        this.interceptors();
        return new Promise((resolve, reject) => {
            this.instance.post(url, { headers: this.headers[1], params: params })
                .then(res => {
                    res.status == 200 ? resolve(res) : reject(res.status);
                }).catch(err => {
                    reject(err);
                })
        })
    }


}