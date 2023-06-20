const router = require('express').Router();
const { Like } = require('../../db/models');

router.put('/:animalId', async (req, res) => {
  try {
    const like = await Like.findOne({ where: { animal_id: req.params.animalId, user_id: 1 } });
    if (like) {
      await Like.destroy({ where: { animal_id: req.params.animalId, user_id: 1 } });
      res.json({ message: 'dislike' });
    } else {
      await Like.create({ user_id: 1, animal_id: req.params.animalId });
      res.json({ message: 'like' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
