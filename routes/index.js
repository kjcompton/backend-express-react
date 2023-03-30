const router = require('express').Router()
const peopleRoute = require('./peopleRoutes') //Importing people route methods

//URL DIRECTORY
router.use('/people', peopleRoute)

module.exports = router
