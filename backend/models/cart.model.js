import mongoose from 'mongoose'

const cartschema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            default:""
        }
    ],
    quantity:{
        type:Number,
        default:1
    }
},{timestamps:true})

const cartmodel = mongoose.model('Cart',cartschema)
export default cartmodel