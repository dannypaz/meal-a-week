const Firebase = require('firebase');

function read() {
  console.log('Getting some information from the database');
};

function write() {
  console.log('Writing some information to the database');
};

module.exports = {
  read: read,
  write: write
};
