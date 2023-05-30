require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr');
const getUser = require('./middleware/getUser');

const app = express();

const PORT = 3000;

const mainRoute = require('./routes/main.routes');
const usersRoute = require('./routes/users.routes');
const animalsRoute = require('./routes/animals.routes');

app.use(express.urlencoded({ extended: true }));
app.use(ssr);
app.use(express.static('public'));
app.use(getUser);

app.use('/', mainRoute);
app.use('/users', usersRoute);
app.use('/animals', animalsRoute);

app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
