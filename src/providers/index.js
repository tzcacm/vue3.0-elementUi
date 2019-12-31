import apiService from '../config/provider/apiService';
import axios from 'axios';

let createHttp = () => {
    let api = {};
    for (let module in apiService) {
        api[module] = {};
        apiService[module].forEach(item => {
            api[module][item.name] = (params = {}) => {
                return axios({
                    method: item.method || 'post',
                    url: process.env.BASE_URL + item.url,
                    headers: item.header,
                    data: params
                });
            }
        });
    }
    return api;
}

export default createHttp;