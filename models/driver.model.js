const mongoose = require('mongoose');  

  const DriverModel = new mongoose.Schema({
	_id: mongoose.ObjectId,
	empID: String,
	empName: String,
	vehicleID: String,
	currentOrderID: String,
	contactNumber: String,

});
module.exports = DriverModel;