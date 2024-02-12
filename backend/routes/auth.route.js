import express from 'express'
import { Login, SignUp, Logout } from '../controller/auth.controller.js'
import { checkToken } from '../utils/CheckToken.js'

const Router = express.Router()

Router.post('/signup',SignUp)
Router.post('/login',Login)
Router.post('/logout',Logout)
Router.get('/checkcustomer',checkToken,(req,res)=>{
    res.send('dsndskds')
})

export default Router