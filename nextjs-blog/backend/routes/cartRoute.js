const router = require('express').Router()
const controller = require('../database/controller/cartController')

router.get('/getall/:id', controller.getCart)

router.post('/add', controller.addProd)

router.delete('/delete/:id', controller.removeone)

module.exports = router