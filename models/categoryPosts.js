const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    catID:{
        type:String,
        required:true
    },
    
    catName:{
        type:String,
        required:true
    }, 

    catSub:{
        type:String,
        required:true
    },

    
    catDescription:{
        type:String,
        required:true
    },

    catStatus:{
        type:String,
        required:true
    },

    catDate:{
        type:String,
        required:true
    },


})

module.exports = mongoose.model('categoryPosts', categorySchema);