const router = require('express').Router();

const animalsApiRouter = require('./api/animals.routes');
const likesApiRouter = require('./api/likes.routes');
const authApiRouter = require('./api/auth.routes');
const usersApiRouter = require('./api/users.routes');

router.use('/api/animals', animalsApiRouter);
router.use('/api/likes', likesApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/users', usersApiRouter);
module.exports = router;
