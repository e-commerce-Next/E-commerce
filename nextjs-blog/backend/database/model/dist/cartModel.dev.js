"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../index');

var Cart = sequelize.define('cart', {
  idcart: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'cart',
  timestamps: false
});

var addToCart = function addToCart(data) {
  return Cart.create(data);
};

var getAll = function getAll(id) {
  return Cart.findAll({
    where: {
      userIduser: id
    }
  });
};

var deleteOne = function deleteOne(id) {
  return Cart.destroy({
    where: {
      idcart: id
    }
  });
};

module.exports = {
  Cart: Cart,
  addToCart: addToCart,
  getAll: getAll,
  deleteOne: deleteOne
};