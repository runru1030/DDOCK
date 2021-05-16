const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/sms',
        createProxyMiddleware({
            target: 'https://ddock-99.herokuapp.com/',
            changeOrigin: true,
        })
    );
};
