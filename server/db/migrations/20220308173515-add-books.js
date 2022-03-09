'use strict';

exports.up = function(db, callback) {
  db.createTable(
    'books',
    {
      id: {
        type: 'string',
        primaryKey: true,
        notNull: true,
        defaultValue: String('uuid_generate_v4()'),
      },
      title: 'string',
      author: 'string',
      publisher: 'string',
      genre: 'string',
      subgenre: 'string',
      height: 'smallint',
    },
    callback
  );
};

exports.down = function(db, callback) {
  db.dropTable('books', callback);
};

exports._meta = {
  version: 1,
};
