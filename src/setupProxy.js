const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.1.1', // Replace with your actual server URL
      changeOrigin: true,
    })
  );
};
