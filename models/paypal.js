const mongoose = require('mongoose');

const paypalSchema = new mongoose.Schema({

    cname : {
        type:String,
        required:true
    },


    cemail :{
        type:String,
        required: true
    },

    cpassword :{
        type: String ,
        required: true
    },

   
   
});


module.exports = mongoose.model('Paypal',paypalSchema);

