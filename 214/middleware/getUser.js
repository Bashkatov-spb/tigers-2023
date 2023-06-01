function getUser(req, res, next) {
  // res.app.locals.user = { name: 'Петенька' };
  res.locals.user = { name: 'Петенька' };
  next();
}

module.exports = getUser;
