var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'books_authors',
  file: './data/books_authors_data.csv'
});
