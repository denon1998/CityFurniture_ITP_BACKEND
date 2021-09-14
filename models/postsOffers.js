const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    saleProductName:{
        type:String,
        required:true
    },
    discountAmount:{
        type:String,
        required:true
    },
    discountAsAPercentage:{
        type:String,
        required:true
    },
    previousPrice:{
        type:String,
        required:true
    },
    newPrice:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },


});

module.exports = mongoose.model('Offers',postSchema);