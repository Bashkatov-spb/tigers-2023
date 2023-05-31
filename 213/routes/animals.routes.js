const router = require('express').Router();
const AnimalPage = require('../components/AnimalPage');
const Animals = require('../components/Animals');
const AnimalItem = require('../components/AnimalItem');
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({ raw: true, order: [['id', 'ASC']] });
    res.send(res.renderComponent(Animals, { title: 'Animals page', animals }));
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await Animal.findOne({ where: { id: animalId } });
    res.send(res.renderComponent(AnimalPage, { title: 'Animal page', animal }));
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, image, user_id, type_id } = req.body;
    const newAnimal = await Animal.create({
      name,
      image,
      user_id,
      type_id,
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
    const result = await Animal.destroy({ where: { id: animalId } });
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
    const { name, image, user_id, type_id } = req.body;
    const animal = await Animal.update(
      {
        name,
        image,
        user_id,
        type_id,
      },
      { where: { id: animalId } }
    );
    res.json(animal);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
