const router = require('express').Router();
const Favourites = require('../../components/Favourites');
const { Favourite, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    let favourites = [];
    if (req.session.userId) {
      favourites = await Favourite.findAll({
        where: {
          user_id: req.session.userId,
        },
        include: Product,
      });
    }
    res.send(res.renderComponent(Favourites, { favourites }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
