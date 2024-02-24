const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Reviews = sequelize.define('reviews', {
  idreviews: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  review: DataTypes.INTEGER
}, {
  tableName: 'reviews',
  timestamps: false
})

const addreview=(data,id)=>{
  return Reviews.update(data,{where: {userIduser:id},where:{productIdproducts:id}})
}

const getreviews = (id) => {
  return Reviews.findAll({where: {userIduser:id},where:{productIdproducts:id}})
}
module.exports = {Reviews,getreviews,addreview}


