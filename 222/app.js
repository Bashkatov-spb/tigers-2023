require('@babel/register');
const express = require('express');
const config = require('./config/config');

const app = express();

const PORT = 3000;

config(app);

const mainRouter = require('./routes/main.routes');

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Работаем на ${PORT} порту`);
});
