const { Sequelize } = require('sequelize')
require('mysql2')


const connection = new Sequelize('ecommerce2', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate()
.then(()=>{
    console.log('connection done');
})
.catch((err)=>{
    console.log(err);
})

module.exports = connection