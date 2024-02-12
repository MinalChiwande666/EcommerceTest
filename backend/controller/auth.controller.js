import usermodel from "../models/auth.models.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// signup
export const SignUp = async(req,res)=>{
  const {username,email,password,role,phone} = req.body
  try{
    const emailExist = await usermodel.findOne({email})
    if(emailExist) return res.status(401).json({message:'Email Already Exist Please try with new email'})
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hashSync(password,salt)
   
    const createUser = new usermodel({
         username,
         email,
         password:hashedPassword,
         role,
         phone
    })

    await createUser.save()
    res.status(200).json(createUser)
  }catch(e)
  {
    console.log('Error is sign up=>',e)
    res.status(500).json({error:"Internal Server Error"})
  }
}

// login
export const Login = async(req,res)=>{
    const {email,password} = req.body
   try{
     const checkeUser = await usermodel.findOne({email})
     let decode_password = bcrypt.compareSync(password,checkeUser?.password || "")

     if(!checkeUser || !decode_password) return res.status(400).json({message:'Invalid Email or Password'})
    
     const userdetail = {
        id:checkeUser?._id,
        username:checkeUser?.username,
        email:checkeUser?.email,
        role:checkeUser?.role
     }
     const token = jwt.sign({userdetail},process.env.JWT,{expiresIn:"1h"});
     
     res.header('Authorization',`Bearer ${token}`).json({message:'Succefully Login',token})
    //  res.status(200).json({message:'Succefully Login',token})

    }catch(e)
   {
    console.log('Error in login route =>',e)
    res.status(500).json({error:'Internal Server'})
   }
}

export const Logout = async(req,res)=>{

}