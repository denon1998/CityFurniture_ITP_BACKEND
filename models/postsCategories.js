const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    categoryName:{
        type:String,
        required:true
    },
    categoryId:{
        type:String,
        required:true
    },    
    subcategoryType:{
        type:String,
        required:true
    },
    subcategoryId:{
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

module.exports = mongoose.model('furnitureCategories',postSchema);