var express = require('express');
var router = express.Router();
var query = require('../db/book_queries.js');

router.get('/', function(req, res, next) {
  query.getBooks().then(function(books){
    res.json(books);
  });
});

router.get('/:book_id', function(req, res, next){
  query.getBook(req.params.book_id).then(function(book){
    res.json(book);
  });
});

router.post('/new', function(req, res, next){
  console.log(req.body);
  query.createBook(req.body).then(function(){
    res.json({status: "Success!"});
  });
});

router.put('/:book_id', function(req, res, next){
  console.log(req.body);
  query.editBook(req.params.book_id, req.body).then(function(book){
    res.json(book);
  });
});

router.delete('/:book_id', function(req, res, next){
  query.deleteBook(req.params.book_id).then(function(){
    res.json({status: "Book Deleted"});
  });
});

module.exports = router;