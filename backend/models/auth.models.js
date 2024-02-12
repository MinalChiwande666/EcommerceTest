import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    email:{
      type:String,
      required:true
    },
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:[
     {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product',
        default:[]
     }
    ],
    order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Product',
            default:[]
        }
    ],
    ownerproduct:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Product',
            default:[]
        }
    ],
    role:{
        type:String,
        default:"customer",
        enum:['customer','owner']
    }
},{timestamps:true})

const usermodel = mongoose.model('User',userschema)
export default usermodel