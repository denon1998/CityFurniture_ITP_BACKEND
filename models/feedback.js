const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema
const feedbackSchema = new Schema({
    Username : {type : String, required : true },
    Phone : {type: Number,  required: true },
    Email : { type : String, required : true },
    date : { type: Date, required: true},
    feedbackMsg : { type : String,required : true }
},{
    timestamps: true
}); 


 const Feedback = mongoose.model('feedback',feedbackSchema);
 module.exports = Feedback;