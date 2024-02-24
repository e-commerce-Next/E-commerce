const reviewModel = require('../model/reviewModel.js')

const addreviewProduct = (req, res) => {
    const {review, userIduser,productIdproducts} =req.body
    const id = req.params.id
    const id2=req.params.id
    reviewModel.addreview({
        review: review,
        userIduser: userIduser,
        productIdproducts:productIdproducts
    },id,id2)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const getreviews = (req, res) => {
    const id = req.params.id
    const id2=req.params.id
    reviewModel.getreviews(id,id2)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}



module.exports = {addreviewProduct, getreviews}