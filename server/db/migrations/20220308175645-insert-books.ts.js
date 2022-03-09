'use strict';
const csv = require('csvtojson');
const uuid = require('uuid');

exports.up = function(db) {
  return csv()
    .fromFile(__dirname + '/books.csv')
    .then(data => {
      data.forEach(item => {
        db.insert(
          'books',
          ['id', ...Object.keys(item)],
          [uuid.v4(), ...Object.values(item)]
        );
      });
    });
};

exports.down = function() {
  return null;
};
