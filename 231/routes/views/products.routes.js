const router = require('express').Router();
const ProductItemPage = require('../../components/ProductItemPage');
const ProductsPage = require('../../components/ProductsPage');
const { Product, Comment, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ raw: true });
    res.send(res.renderComponent(ProductsPage, { products }));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.productId },
      include: { model: Comment, include: User },
    });
    const comments = await Comment.findAll({
      where: {
        product_id: req.params.productId,
      },
      include: User,
    });
    res.send(res.renderComponent(ProductItemPage, { product, comments }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
