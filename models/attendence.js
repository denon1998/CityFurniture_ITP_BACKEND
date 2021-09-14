const mongoose = require('mongoose');
const attendenceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    employeeId:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    attendence: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Attendence', attendenceSchema);
