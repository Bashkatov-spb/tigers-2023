const router = require('express').Router();
const Btn = require('../components/Btn');

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/home', (req, res) => {
  res.send(res.renderComponent(Btn, { title: 'knopkA' }));
});

router.get('/version', (req, res) => {
  res.json(process.version);
});

module.exports = router;
