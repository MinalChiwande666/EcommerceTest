// mongodb://localhost:27017
import mongoose from "mongoose";

export const connection = async()=>{
    try{
      await mongoose.connect(process.env.MONGODB_URI)
      console.log('connected to db')
    }catch(e)
    {
        console.log('error connect to db',e)
    }
}