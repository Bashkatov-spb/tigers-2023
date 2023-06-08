const router = require('express').Router();
const FormUpdateAnimal = require('../../components/FormUpdateAnimal');
const { Animal } = require('../../db/models');

router.get('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await Animal.findOne({ where: { id: animalId } });
    res.send(res.renderComponent(FormUpdateAnimal, { animal, title: 'Form update animal' }));
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
