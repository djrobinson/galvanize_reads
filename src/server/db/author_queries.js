var knex = require('./knex');

function Authors(){
  return knex('authors');
}

module.exports = {
  getAuthors: function(){
    return Authors().select();
  },
  getAuthor: function(auth_id){
    return Authors().select().where({id: auth_id});
  },
  createAuthor: function(author){
    return Authors().insert(author);
  },
  editAuthor: function(auth_id, author){
    return Authors().where({id: auth_id}).update(author);
  },
  deleteAuthor: function(auth_id){
    return Authors().del().where({id: auth_id});
  }
};