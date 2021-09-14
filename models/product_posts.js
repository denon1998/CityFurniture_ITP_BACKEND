const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productID:{
        type:String,
        required:true
    },

    productName:{
        type:String,
        required:true
    },

    productColor:{
        type:String,
        required:true
    },

     productMaterial:{
        type:String,
        required:true
    },

    productQuantity:{
        type:Number,
        required:true
    },

    productCategory:{
        type:String,
        required:true
    },

    productManufacture:{
        type:String,
        required:true
    },

    productDate:{
        type:String,
        required:true
    },

    productStatus:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('productPosts', productSchema);