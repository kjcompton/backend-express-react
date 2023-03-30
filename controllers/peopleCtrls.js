const db = require('../models')
console.log(db)
const getPeople = (req, res) => {
    res.send("This is get people")
}
const createPeople = (req, res) => {
    res.send("This is create people")
}

module.exports = {
    getPeople,
    createPeople
}