var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    readAlready: {typ: String},
    title: {type:String},
    author: {type:String},
    genre: {type:String},

});

module.exports = mongoose.model('book', bookModel);

