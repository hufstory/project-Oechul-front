const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/get', {
            target: 'http://172.0.0.1:3000',
            changeOrigin: true
        })
    );
};