const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const productsRouter = require('./views/products.routes');
const favouritesRouter = require('./views/favourites.routes');
const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');
const commentRouter = require('./api/comments.routes');
const apiFavouritesRouter = require('./api/favourites.routes');
const apiCartRouter = require('./api/cart.routes');
const cartRouter = require('./views/cart.routes');

router.use('/', mainRouter);
router.use('/products', productsRouter);
router.use('/favourites', favouritesRouter);
router.use('/auth', authRoute);
router.use('/cart', cartRouter);
router.use('/api/cart', apiCartRouter);
router.use('/api/auth', authApiRoute);
router.use('/api/comments', commentRouter);
router.use('/api/favourites', apiFavouritesRouter);

module.exports = router;
