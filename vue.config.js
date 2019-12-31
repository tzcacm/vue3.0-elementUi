module.exports = {
    devServer: {
        open: true
    },
    chainWebpack: config => {
        config.plugin("define").tap(args => {
            args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL);
            return args;
        });
    }
}