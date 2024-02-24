"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

require('mysql2');

var connection = new Sequelize('refcom', 'root', 'efta7 yasemsem', {
  host: 'localhost',
  dialect: 'mysql'
});
connection.authenticate().then(function () {
  console.log('connection done');
})["catch"](function (err) {
  console.log(err);
});
module.exports = connection;