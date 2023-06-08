require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index.routes');

config(app);

app.use('/', indexRouter);

app.get('/cookie', (req, res) => {
  res.cookie('test', 42, {
    expires: new Date('Dec 31, 2024'),
  });

  res.end();
});

app.get('/clear', (req, res) => {
  res.clearCookie('test');
  res.redirect('/');
});

app.get('/my-cookies', (req, res) => {
  console.log(req.cookies); // { test: '42' }
  res.json(req.cookies);
});

app.get('/session', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.json(req.session);
});

app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
