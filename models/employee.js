const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    empPhone: {
        type: String,
        required: true
     },

    dateOfEntery: {
        type: String,
        required: true
     },

     education: {
         type: String,
         required: true
     }
     ,
     position: {
         type: String,
         required: true
     }
     ,
     basicSalary: {
         type: String,
         required: true
     }
     ,
     empImage: {
         type: String,
         required: true
     }
});
    

module.exports = mongoose.model('Employee', employeeSchema);

