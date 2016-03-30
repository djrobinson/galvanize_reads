var knex = require('./knex');

function Authors(){
  return knex('authors');
}

function Books(){
  return knex('books');
}

function BooksAuthors(){
  return knex('books_authors');
}

module.exports = {
  getBooksAuthors: function(){
    return Books().innerJoin('books_authors', 'books.id', 'books_authors.book_id').innerJoin('authors', 'authors.id', 'books_authors.author_id');
  },
  getByBook: function(book_id){
    return Books().innerJoin('books_authors', 'books.id', 'books_authors.book_id').innerJoin('authors', 'authors.id', 'books_authors.author_id').where({'books.id': book_id});
  },
  getByAuthor: function(author_id){
    return Books().innerJoin('books_authors', 'books.id', 'books_authors.book_id').innerJoin('authors', 'authors.id', 'books_authors.author_id').where({'authors.id': author_id});
  },
  insertBookAuthor: function(book_id, author_id){
    return BooksAuthors().insert({'book_id': book_id, 'author_id': author_id});
  }
};