const router = require('express').Router();
const AnimalPage = require('../components/AnimalPage');
const Animals = require('../components/Animals');
const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({ raw: true });
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
    const { name, image } = req.body;
    const newAnimal = await Animal.create({
      name,
      image,
      user_id: 1,
      type_id: 1,
    });
    res.redirect('/animals');
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
