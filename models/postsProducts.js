const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    productName:{
        type:String,
        required:true
    },
    itemModelNumber:{
        type:String,
        required:true
    },
    itemHeight:{
        type:String,
        required:true
    },
    itemLength:{
        type:String,
        required:true
    },
    itemWidth:{
        type:String,
        required:true
    },
    materialsUsed:{
        type:String,
        required:true
    },
    colours:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    modelType:{
        type:String,
        required:true
    },
    includedComponents:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('clientProducts',postSchema);