
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments();
    table.string('first');
    table.string('last');
    table.string('pic_url');
    table.text('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
