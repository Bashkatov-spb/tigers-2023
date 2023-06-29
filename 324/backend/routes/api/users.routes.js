const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ order: [['id', 'ASC']] });
    res.json(users);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const users = await User.destroy({ where: { id: req.params.userId } });
    if (users) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:userId', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    user.isAdmin = !user.isAdmin;
    user.save();
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
