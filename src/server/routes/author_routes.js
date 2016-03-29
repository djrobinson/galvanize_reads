var express = require('express');
var router = express.Router();
var query = require('../db/author_queries.js');
var bookQuery = require('../db/book_queries.js');

router.get('/', function(req, res, next) {
  query.getAuthors().then(function(authors){
    res.json(authors);
  });
});

router.get('/:author_id', function(req, res, next){
  query.getAuthor(req.params.author_id).then(function(author){
    res.json(author);
  });
});

router.post('/new', function(req, res, next){
  query.createAuthor(req.body).then(function(author){
    res.json(author);
  });
});

router.put('/:author_id', function(req, res, next){
  console.log(req.body);
  query.editAuthor(req.params.author_id, req.body).then(function(author){
    res.json(author);
  });
});

router.delete('/:author_id', function(req, res, next){
  query.deleteAuthor(req.params.author_id).then(function(){
    res.json({status: "author Deleted"});
  });
});

module.exports = router;