import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
    type:String,
    required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:Array,
        required:true,
        default:[]
    }
},{timestamps:true})

const productmodel = mongoose.model('Product',productSchema)
export default productmodel