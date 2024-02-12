import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connection } from './config/ConnectionDb.js'
import authRoute from './routes/auth.route.js'
import productRoute from './routes/product.route.js'
import cartRoute from './routes/cart.route.js'
import orderRoute from './routes/order.route.js'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 8000

// middlewares
app.use(cors())
app.use(express.json())

// middlewares for route
app.use('/api/auth/',authRoute)
app.use('/api/product/',productRoute)
app.use('/api/cart/',cartRoute)
app.use('/api/order/',orderRoute)

app.listen(PORT ,()=>{
    connection() // imported function of connected db
    console.log(`listening Port at ${PORT}...`)
})