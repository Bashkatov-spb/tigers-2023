require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');
const getUser = require('./middleware/getUser');

const app = express();

const PORT = 3000;

const mainRoute = require('./routes/main.routes');
const usersRoute = require('./routes/users.routes');
const animalsRoute = require('./routes/animals.routes');
const animalUpdate = require('./routes/animalUpdate.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use(getUser);

app.use('/', mainRoute);
app.use('/users', usersRoute);
app.use('/animals', animalsRoute);
app.use('/form-update-animal', animalUpdate);

app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
