require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');
const getUser = require('./middleware/getUser');

const app = express();

const PORT = 3000;

const mainRoute = require('./routes/views/main.routes');
const usersRoute = require('./routes/views/users.routes');
const animalsRoute = require('./routes/views/animals.routes');
const animalUpdate = require('./routes/views/animalUpdate.routes');
const animalsApiRoute = require('./routes/api/animals.routes');
const likesApiRoute = require('./routes/api/likes.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use(getUser);

app.use('/', mainRoute);
app.use('/users', usersRoute);
app.use('/animals', animalsRoute);
app.use('/form-update-animal', animalUpdate);
app.use('/api/animals', animalsApiRoute);
app.use('/api/likes', likesApiRoute);

app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
