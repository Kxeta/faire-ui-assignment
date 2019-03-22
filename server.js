const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const app = express();

var options = {
  target: 'http://127.0.0.1:8080',
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(
  '/api',
  proxy({
    target: 'https://www.faire.com',
    secure: false,
    changeOrigin: true,
    options,
  }),
);

app.use('/', express.static(path.resolve('public')));

app.listen(4242, err => {
  if (err) {
    console.error(err);
    return;
  }

  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:4242/api`);
});
