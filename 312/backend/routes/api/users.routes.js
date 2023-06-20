const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
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

module.exports = router;
