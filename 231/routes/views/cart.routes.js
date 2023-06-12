const router = require('express').Router();
const Cartt = require('../../components/Cart');
const { Cart, Order, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: { user_id: req.session.userId, status: false },
      include: { model: Order, include: Product },
    });
    res.send(res.renderComponent(Cartt, { products: cart }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
