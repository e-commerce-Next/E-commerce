const router = require('express').Router()
const controller=require('../database/controller/reviewcontroller')

router.get('/get/:id/:id', controller.getreviews)

router.put('/add/:id/:id',controller.addreviewProduct)



module.exports=router