var knex = require('./knex');

function Books(){
  return knex('books');
}

module.exports = {
  getBooks: function(){
    return Books().select();
  },
  getBook: function(book_id){
    return Books().select().where({id: book_id});
  },
  createBook: function(book){
    return Books().insert(book, 'id');
  },
  editBook: function(book_id, book){
    return Books().where({id: book_id}).update(book);
  },
  deleteBook: function(book_id){
    return Books().del().where({id: book_id});
  }
};