const router = require('express').Router()
const controller = require('../database/controller/imageController')

router.post('/add', controller.saveImages)
router.get('/getAll/:id', controller.getallImage)

module.exports = router