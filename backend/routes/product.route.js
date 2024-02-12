import express from 'express'
import {checkToken} from '../utils/CheckToken.js'
import { ShowProduct, UploadProduct, deletProduct, getProduct, updateProduct } from '../controller/post.controller.js'
import { getAllProducts } from '../controller/cart.controller.js'
import { AllProducts } from '../controller/product.controller.js'
const Router = express.Router()

Router.get('/',getProduct)
Router.post('/uploadProduct',checkToken,UploadProduct)
Router.post('/getProducts',checkToken,ShowProduct)
Router.delete('/deleteproduct/:pid',checkToken,deletProduct)
Router.put('/updateProduct/:pid',checkToken,updateProduct)
export default Router