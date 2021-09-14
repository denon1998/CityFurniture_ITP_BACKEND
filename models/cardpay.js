
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    cardnumber : {
        type:Number,
        required:true
    },


    customerName :{
        type:String,
        required: true
    },

    expiry :{
        type:Date,
        required: true
    },

    cvc :{
        type: Number ,
        required: true
    },

   
   
});


module.exports = mongoose.model('Payment',postSchema);


