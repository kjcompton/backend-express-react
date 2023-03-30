

const router = require('express').Router()
const { peopleCtrl } = require('../controllers') //all of our methods inside of controllers/index.js

//ROUTES - METHODS

router.get('/', peopleCtrl.getPeople)
router.post('/', peopleCtrl.createPeople)

module.exports = router