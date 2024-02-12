'use client'
import React from 'react'

import Link from 'next/link'
import WrapperContainer from '@/app/component/WrapperContainer/WrapperContainer'
import TextInput from '@/app/component/TextInput/TextInput'
import { Login } from '@/app/utils/config'
import { useRouter } from 'next/navigation'
const page = () => {
  const router = useRouter()
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const [Email, setEmail] = React.useState<String | any>('')
  const [Password, setPassword] = React.useState<String>('')
  const [ErrEmaiil,setErremail] = React.useState<Boolean|any>(false)
  const [ErrEmailmsg,setEmailErrmsg] = React.useState<String|any>('')
  const [ErrPassword,setErrPassword] = React.useState<Boolean | any>(false)
  const [ErrPasswordmsg,setErrPasswordmsg] = React.useState<String | any>('')
  const handleSubmit = React.useCallback(()=>{
    let ct = 0
    if(!emailRegex.test(Email) || Email === ''){
      ct++
      setErremail(true)
      setEmailErrmsg('Please Enter Proper Email')
    }
   
    
    if(!Password || Password === '')
    {
      ct++
      setErrPassword(true)
      setErrPasswordmsg("Please Enter Password")
    }
  
   
    if(ct===0)
    {
      setErremail(false)
      setErrPassword(false)
      let userObj = {
        email:Email,
        password:Password,
      }
     Login(userObj,router)
    }
  },[Email,Password])
  return (
    <WrapperContainer>
      <div className='flex flex-col items-center shadow-lg rounded-lg p-4 inset-1 border'>
       <h2 className='text-3xl font-bold underline'>Login</h2>
       <TextInput error={ErrEmaiil} errormsg={ErrEmailmsg} seterror={setErremail} value={Email} setvalue={setEmail} type='email' placholder='Enter your email'/>
       <TextInput error={ErrPassword} errormsg={ErrPasswordmsg} seterror={setErrPassword} value={Password} setvalue={setPassword} type='password' placholder='Enter your password'/>
       <h2 className='flex mt-4'>Don't have an account?<Link href={"/pages/signup"} className='gap-2 text-blue-600 mx-1 cursor-pointer'>Sign up</Link></h2>
       <button onClick={handleSubmit} className="btn mt-4 bg-white/10 rounded-lg w-full p-1">Login</button>
      </div>
    </WrapperContainer>
  )
}

export default page