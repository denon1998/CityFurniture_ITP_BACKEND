
var express = require('express');


module.exports = function (app) {


    // author @nuwanthika
    app.use('/api/drivers', require('../controllers/driver'));
    app.use('/api/vehicles', require('../controllers/vehicle'));
    app.use('/api/deliveries', require('../controllers/delivery'));
    app.use('/api/orders', require('../controllers/order'));
    // @nuwanthika: end


    // author @anjali ;
    app.use('/api/employees', require('../controllers/employees'));
    app.use('/api/salary', require('../controllers/salary'));
    app.use('/api/attendence', require('../controllers/attendence'));
    app.use('/api/leavedemp', require('../controllers/leavedemp'));
    app.use('/uploads', express.static('uploads'));
    // @nuwanthika: anjali

}