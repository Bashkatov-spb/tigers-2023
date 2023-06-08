const router = require('express').Router();
const AnimalItem = require('../../components/AnimalItem');
const { Animal } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({ raw: true, exclude: ['user_id', 'type_id'] });
    res.json(animals);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:animalId', async (req, res) => {
  try {
    const animal = await Animal.findOne({ raw: true, where: { id: req.params.animalId } });
    res.json(animal);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, image, type_id } = req.body;
    const newAnimal = await Animal.create({
      name,
      image,
      type_id,
      user_id: req.session.userId,
    });
    res.json({
      message: 'success',
      html: res.renderComponent(AnimalItem, { animal: newAnimal }, { htmlOnly: true }),
    });
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const result = await Animal.destroy({ where: { id: animalId, user_id: req.session.userId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const { name, image, type_id } = req.body;
    const animal = await Animal.update(
      {
        name,
        image,
        user_id: req.session.userId,
        type_id,
      },
      { where: { id: animalId, user_id: req.session.userId } }
    );
    res.json(animal);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
