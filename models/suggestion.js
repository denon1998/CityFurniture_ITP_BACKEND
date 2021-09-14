const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
    Username : { type : String, required : true },
    Phone : { type: Number, required: true},
    Email : { type : String, required : true},
    date : { type: Date, required: true },
    suggestionMsg : { type : String, required : true }
},{
    timestamps: true
}); 


 const suggestion = mongoose.model('suggestion',suggestionSchema);
 module.exports = suggestion;
 