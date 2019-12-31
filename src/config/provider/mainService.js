const mainService = [{
    name: 'mainApi1',
    method: 'get',
    url: 'api/login',
    header: { 'content-type': 'application/json' }
}, {
    name: 'mainApi2',
    method: 'post',
    url: 'api/login',
    header: { 'content-type': 'application/x-www-form-urlencoded;chartset=UTF-8' }
}];

export default {
    mainService
};