import loginService from './loginService';
import mainService from './mainService';

const apiService = {
    ...loginService,
    ...mainService
}

export default apiService;