const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://your-platformos-instance.com/',
      secure: false,
      changeOrigin: true,
    })
  );
};
