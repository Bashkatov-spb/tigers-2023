const router = require('express').Router();
const { Favourite } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { product_id } = req.body;
    const order = await Favourite.create({ product_id, user_id: req.session.userId });
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
