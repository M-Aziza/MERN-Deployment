const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        unique:[true,"Must be unique"]
    } , 
    type: {
        type: String,
        required: [true,"Type is required"],
        minlength: [3, "Type must be at least 3 characters long"],
    }  ,
    description: {
        type: String,
        required: [true,"Description is required"],
        minlength: [3, "Description must be at least 3 characters long"],
    }  ,
    skill1: {
        type: String,
    },
    skill2:{
        type: String,
    },
    skill3:{
        type: String,
    }
    
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);

