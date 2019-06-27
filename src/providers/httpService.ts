import { SERVE_URL } from '../environments/environments';
import axios from 'axios';

export class HttpService {

    constructor() { }

    private headers = [{ 'content-type': 'application/json' }, { 'content-type': 'application/x-www-form-urlencoded;chartset=UTF-8' }];

    private instance = axios.create({
        baseURL: SERVE_URL,
        timeout: 5000,
        headers: this.headers
    });


    getData(url, params) {
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