const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    Username : {type : String, required : true},
    Phone : {type: Number, required: true},
    Email : {type : String, required : true},
    
},{
    timestamps: true
}); 


 const contact = mongoose.model('contact',contactSchema);
 module.exports = contact;