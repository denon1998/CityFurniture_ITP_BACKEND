const mongoose = require('mongoose');
// salaryId: "SAL1234"
// employeeId: "E0001"
// name: "Supun"
// position: "Accountant"
// basicSalary: "Rs. 45000.00"
// month: "January"
// advancePayment: "Rs. 10000.00"
// overtimePayment: "Rs. 6000.00"
// totalPayment: "Rs 61000.00"

const salarySchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    basicSalary: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    advancePayment: {
        type: String,
        required: true
    },
    overtimePayment: {
        type: String,
        required: true
    },
    totalPayment: {
        type: String,
        required: true
    },
    perDaySalary: {
        type: String,
        required: true
    },
    totalDays: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Salary', salarySchema);
