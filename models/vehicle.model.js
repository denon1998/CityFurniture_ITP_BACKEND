const mongoose = require('mongoose');

const VehicleModel = new mongoose.Schema({
	_id: mongoose.ObjectId,
	vehicleID: String,
	vehicleLicenseNO: String,
	mileage: String,
	nextServiceReminder: Date,

});
VehicleModel.index({'$**': 'text'});

module.exports = VehicleModel;
