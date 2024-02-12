import mongoose from 'mongoose'

const orderschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
},{timestamps:true})

const ordermodel = mongoose.model('Order',orderschema)
export default ordermodel