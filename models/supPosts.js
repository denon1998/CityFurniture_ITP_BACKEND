const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({

    supplierID:{
        type:String,
        required:true
    },

    supplierName:{
        type:String,
        required:true
    },

    supplierPhone:{
        type:String,
        required:true
    },

    supplierEmail:{
        type:String,
        required:true
    },

    supplierAddress:{
        type:String,
        required:true
    },

    supplierComName:{
        type:String,
        required:true
    },

    supplierComAddress:{
        type:String,
        required:true
    },

    supplierDate:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('supplierPosts', supplierSchema);