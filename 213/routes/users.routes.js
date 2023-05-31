const router = require('express').Router();
const Users = require('../components/Users');
const { User, Like, Animal, Type } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.send(res.renderComponent(Users, { title: 'Users page', users }));
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
