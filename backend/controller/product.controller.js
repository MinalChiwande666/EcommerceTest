import productmodel from "../models/product.model.js"

export const AllProducts = async(req,res)=>{
    const allproducts = await productmodel.find()
    res.status(200).json({data:allproducts})
}