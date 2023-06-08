const router = require('express').Router();

const mainRoute = require('./views/main.routes');
const usersRoute = require('./views/users.routes');
const animalsRoute = require('./views/animals.routes');
const animalUpdate = require('./views/animalUpdate.routes');
const animalsApiRoute = require('./api/animals.routes');
const likesApiRoute = require('./api/likes.routes');
const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');

router.use('/', mainRoute);
router.use('/users', usersRoute);
router.use('/animals', animalsRoute);
router.use('/form-update-animal', animalUpdate);
router.use('/api/animals', animalsApiRoute);
router.use('/api/likes', likesApiRoute);
router.use('/api/auth', authApiRoute);
router.use('/auth', authRoute);

module.exports = router;
