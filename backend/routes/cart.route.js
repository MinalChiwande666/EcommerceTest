import express from 'express'
import { AddtoCart, RemoveCart, getAllProducts } from '../controller/cart.controller.js'
import { checkToken } from '../utils/CheckToken.js'

const Router = express.Router()

Router.post('/addTocart/:pid',checkToken,AddtoCart)
Router.post('/getcart',checkToken,getAllProducts)
Router.post('/removecart/:cid',checkToken,RemoveCart)

export default Router