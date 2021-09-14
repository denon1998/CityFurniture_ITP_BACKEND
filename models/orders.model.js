
const mongoose = require('mongoose'); 

  const OrderModel = new mongoose.Schema({
	_id: mongoose.ObjectId,
	orderID: String,
	name: String,
	postalNo: String,
	street: String,
	town: String,
	contactNo: String,
	orderDate: Date,
	status: String,
	assignedDriver: String

});
module.exports = OrderModel;
