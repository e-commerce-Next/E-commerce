const {getAllcategories, addCategorie ,delCategorie,getCategoryByIdProduct} = require('../model/categoriesModel')

const getCategories = async (req,res) => {
    const x= await getAllcategories()
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}

const addNewCategorie =async (req,res) => {
    const x=await addCategorie(req.body)
    try{
        res.send(x)
    }
    catch(err){
        console.log(err);
    }
}



const deleteCategorie =async(req,res)=>{
    const x= await delCategorie(req.params.id)
    try{
        res.send("deleted")
    }
    catch(err){
console.log(err);
    }
}

const getCategoryByProduct = async (req,res)=>{
    const id=req.params.id
    getCategoryByIdProduct(id).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{res.send(err)})
}
module.exports={getCategories, addNewCategorie, deleteCategorie,getCategoryByProduct}