const router = require('express').Router();
const AnimalPage = require('../../components/AnimalPage');
const Animals = require('../../components/Animals');
const { Animal, Like, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // const animals = await Animal.findAll({
    //   raw: true,
    //   order: [['id', 'ASC']],
    //   include: {
    //     model: User,
    //     include: {
    //       model: Like,
    //     },
    //   },
    // });
    const animals = await Animal.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Like,
      },
    });
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

module.exports = router;
