const mongoose = require('mongoose');  

  const DriverModel = new mongoose.Schema({
	_id: mongoose.ObjectId,
	empID: String,
	empName: String,
	vehicleID: String,
	currentOrderID: String,
	contactNumber: String,

});
DriverModel.index({'$**': 'text'});

module.exports = DriverModel;