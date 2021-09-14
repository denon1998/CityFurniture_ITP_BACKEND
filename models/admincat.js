const mongoose = require('mongoose');
const admincatSchema = new mongoose.Schema({

   name: {
       type: String,
       required: true,
       trim: true
   },

   parentId: {
    type: String,
    default:"None"
   },

   type: {
       type: String,
       default:"Main Category"
   }
   

}, { timestamps: true});


module.exports = mongoose.model('Admincat', admincatSchema);

