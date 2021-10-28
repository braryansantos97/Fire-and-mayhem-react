require('dotenv').config()
const Character = require('../models/character');
const router = require('express').Router();
//comment

//Create
router.post('/', async (req, res) => {
  try {
    const createdCharacter = await Character.create(req.body)
    res.status(200).json(createdCharacter)
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message })
  }
})

//Read
  /*Index*/
  router.get('/', async (req, res) => {
    try {
      const allCharacters = await Character.find({})
      res.status(200).json(allCharacters)
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message})
    }
  })

  /*Show*/
  router.get('/:id', async (req, res) => {
    try {
      const oneCharacter = await Character.findById(req.params.id)
      res.status(200).json(oneCharacter)
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message})
    }
  })

//Update
  /*Update the Character*/
  router.put('/:id', async (req, res) => {
    try {
      const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(updatedCharacter)
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message})
    }
  })

//Delete

router.delete('/:id', async(req,res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message})
  }
})

module.exports = router;
