import express from 'express'
import { checkToken } from '../utils/CheckToken.js'
import { OrderNow, getAllProducts } from '../controller/order.controller.js'
const Router = express.Router()

Router.post('/buynow/:pid',checkToken,OrderNow)
Router.post('/getorder',checkToken,getAllProducts)

export default Router