const { Pet } = require('../models/model');

module.exports.createNew = (request, response) => {
    const {name,type, description,skill1,skill2,skill3} = request.body;
    Pet.create({name, type, description,skill1,skill2,skill3})
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err))
}

module.exports.all = (request, response) => {
    Pet.find({}).sort({type:1})
    // Pet.aggregate([
    //     {
    //         "$project": {
    //             "name": 1,
    //             "type": 1,
    //             "description": 1,
    //             "skill1": 1,
    //             "skill2": 1,
    //             "skill3": 1,
    //             "insensitive": { "$strLenCP": "$type" }
    //         }
    //     },
    //     { "$sort": { "insensitive": 1 } }
    // ])
        .then(Pet => response.json(Pet))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Pet.findOne({ _id: request.params.id })
        .then(Pet => response.json(Pet))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Pet.findOneAndUpdate({ _id: request.params.id }, request.body, { runValidators: true })
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err));
}

module.exports.delete = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
