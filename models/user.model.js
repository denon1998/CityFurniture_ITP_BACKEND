const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    Type: { type: String, required: true },
    password: { type: Number, required: true },

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;