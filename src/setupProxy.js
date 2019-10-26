const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/random.json',
    proxy({
      target: 'https://coffee.alexflipnote.dev',
      changeOrigin: true,
    })
  );
};