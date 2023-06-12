const router = require('express').Router();
const { Cart, Order } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    let cart;
    const { product_id } = req.body;
    cart = await Cart.findOne({ where: { user_id: req.session.userId, status: false } });
    if (cart) {
      await Order.create({ product_id, cart_id: cart.id });
    } else {
      cart = await Cart.create({ user_id: req.session.userId, status: false });
      await Order.create({ product_id, cart_id: cart.id });
    }
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
