const db = require('../models')

const getPeople = (req, res) => {
    db.People.find({})
    .then((foundPeople) => {
        if(!foundPeople) {
            res.status(404).json({message: "Cannot find People"})
        } else {
            res.status(200).json({data: foundPeople})
        }

    })
}
const createPeople = (req, res) => {
    db.People.create(req.body)
    .then((createdPerson) => {
        if(!createdPerson) {
            res.status(404).json({message: "Cannot create Person"})
        } else {
            res.status(200).json({data: createdPerson})
        }
    })
}

const updatePerson = (req, res) => {
    db.People.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPerson) => {
        if(!updatedPerson) {
            res.status(400).json({Message: 'Could not update person!'})
        } else {
            res.status(200).json({Data: updatedPerson, Message: 'Person Updated'})
        }
    })
}

const deletePerson = (req, res) => {
    db.People.findByIdAndDelete(req.params.id)
    .then((deletedPerson) => {
        if(!deletedPerson){
            res.status(400).json({Message: 'Could not delete person'})
        } else {
            res.status(200).json({Data: deletedPerson, Message: "Person deleted"})
        }
    })
}


module.exports = {
    getPeople,
    createPeople,
    updatePerson,
    deletePerson,
}