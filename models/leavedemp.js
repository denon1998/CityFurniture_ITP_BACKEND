const mongoose = require('mongoose');
// mongoose fields
// empId
// firstName
// lastName
// email
// Address
// phone

const LeavedEmp = new mongoose.Schema({
    empId: {
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
    email: {
        type: String,
        required: true

    },
    Address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('LeavedEmp', LeavedEmp);