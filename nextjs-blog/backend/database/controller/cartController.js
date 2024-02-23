const Cart = require('../model/cartModel')

const addProd = (req, res) => {
    const {product, userIduser} =req.body
    Cart.addToCart({
        product: product,
        userIduser: userIduser
    })
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const getCart = (req, res) => {
    const id = req.params.id
    Cart.getAll(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const removeone = (req, res) => {
    const id = req.params.id
    Cart.deleteOne(id)
    .then((result)=>{
        res.status(203).json('deleted')
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

module.exports = {addProd, getCart, removeone}