var bookController = function(Book){
    var post = function(req,res){

        var book = new Book(req.body);
        if(!req.body.title)
        {
            res.status(400);
            res.send('Title is required');
        }
        else
        {
            book.save();
            console.log('the new book is: ' + book);
            res.status(201);
            res.send('the new book is: ' +book);
            console.log('FINISH post book to db');
        }
    }
    var get = function(req,res){
        console.log('get books from db');
        var query = {};
        if (req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Book.find(query,function (err,books) {
            if (err)
                res.status(500).send(err);
            else {

                var returnBooks = [];
                books.forEach(function(element,index,array){
                    var newBook = element.toJSON();
                    newBook.links={};
                    newBook.links.self = 'http://' + req.headers.host + '/api/books/' + newBook._id;
                    returnBooks.push(newBook);
                });
                res.json(returnBooks);
            }
        });
        console.log('FINISH get books from db');

    }

    return {
        post:post,
        get:get
    }
};

module.exports = bookController;
//
// * Created by User on 9/1/2015.
// */
