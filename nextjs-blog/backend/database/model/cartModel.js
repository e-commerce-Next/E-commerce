const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Cart = sequelize.define('cart', {
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

const addToCart = (data) => {
  return Cart.create(data)
}

const getAll = (id) => {
  return Cart.findAll({where:{userIduser: id}})
}

const deleteOne = (id) => {
  return Cart.destroy({where:{idcart: id}})
}


module.exports = {Cart,addToCart,getAll,deleteOne}