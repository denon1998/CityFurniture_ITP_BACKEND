const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    Address: { type: String, required: true },
    Phone: { type: Number, required: true, maxlength: 10 },
    birthday: { type: Date, required: true },
    Gender: { type: String, required: true },
    Email: { type: String, required: true },
    password: { type: String, required: true },

}, {
    timestamps: true,
});



const Exercise = mongoose.model('Customer', exerciseSchema);

module.exports = Exercise;