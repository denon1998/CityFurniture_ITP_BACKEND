const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Datadase Schema
const FAQsSchema = new Schema({
    fname : { type : String, required : true },
    lname : { type : String, required : true },
    Email : { type : String, required : true},
    Phone : { type: Number, required: true },
    date : { type: Date, required: true },
    orderNo : {type: Number, default: true },
    category : { type: String, default: true},
    FAQsMsg : { type : String, required : true}
},{
    timestamps: true
}); 


 const FAQs = mongoose.model('FAQs',FAQsSchema);
 module.exports = FAQs;