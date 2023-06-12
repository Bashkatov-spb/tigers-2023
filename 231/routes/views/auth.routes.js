const router = require('express').Router();
const AuthorizationForm = require('../../components/AuthorizationForm');
const RegistrationForm = require('../../components/RegistrationForm');

router.get('/registration', (req, res) => {
  res.send(res.renderComponent(RegistrationForm, { title: 'Registration page' }));
});

router.get('/authorization', (req, res) => {
  res.send(res.renderComponent(AuthorizationForm, { title: 'Authorization page' }));
});

module.exports = router;
