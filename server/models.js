const db = require('./db');

module.exports = {
  listings: {
    get: function (cb) {
      db.query('SELECT * FROM listing_header', (err, results) => {
        cb(err, results);
      });
    }
  }
}