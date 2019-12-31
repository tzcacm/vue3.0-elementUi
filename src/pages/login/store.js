const LoginModule = {
    state: {
        personInfo: { //个人信心
            account: 'admin',
            password: 'admin'
        },
        isLogin: false, //是否登录
    },
    mutations: {
        setPersonInfo(state, options) {
            state.personInfo.account = options.account;
            state.personInfo.password = options.password;
        },
        setIsLogin(state, options) {
            state.isLogin = options;
        }
    }
}

export default LoginModule;