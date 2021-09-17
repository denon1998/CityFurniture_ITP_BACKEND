
const mongoose = require('mongoose');
 const DeliveryModel = new mongoose.Schema({
    _id: mongoose.ObjectId,

    deliveryID: String,
    orderID: String,
    receiverAddress: String,
    assignedDriver: String,
    lat: String,
    long: String,
    status: String,
    remarks: String

});

DeliveryModel.index({'$**': 'text'});

module.exports = DeliveryModel;