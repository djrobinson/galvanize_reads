var express = require('express');
var router = express.Router();
var query = require('../db/book_author_queries.js');

router.get('/', function(req, res, next) {
  query.getBooksAuthors().then(function(books){
    res.json(books);
  });
});

router.get('/book/:book_id', function(req, res, next){
  query.getByBook(req.params.book_id).then(function(book){
    res.json(book);
  });
});

router.get('/author/:author_id', function(req, res, next){
  query.getByAuthor(req.params.author_id).then(function(books){
    res.json(books);
  });
});

router.post('/', function(req, res, nex){
  query.insertBookAuthor(req.body.book_id, req.body.author_id).then(function(){
    res.json({status: 'Success'});
  });
});

module.exports = router;