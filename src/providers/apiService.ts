
import { HttpService } from './httpService';

export class ApiService extends HttpService {

    constructor() {
        super();
    }

    /**
     *  登陆接口
     *
     * @param {any} account
     * @param {any} password
     * @returns
     */

    getLogin(account, password) {
        let obj = {
            account: account,
            password: password
        };
        return this.postData('login', obj);
    }
}