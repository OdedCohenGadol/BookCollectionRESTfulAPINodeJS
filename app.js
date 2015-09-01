var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
mongoose.connect('mongodb://oded:oded7583@ds042888.mongolab.com:42888/bookapi');

var Book = require('./models/bookModel');


var app = express();
var port = process.env.port || 3000;

console.log('get body parsers');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
console.log('finish get body parsers');

var bookRouter = require('./Routes/bookRoutes')(Book);


console.log('finish get route  books from db');

app.use('/api/books', bookRouter);
app.use('/api/authors', bookRouter);

app.get("/", function(req,res){
    res.send('welcome to my API!');
});

app.listen(port,function(){
    console.log('Gulp is running on port : ' + port );
});

