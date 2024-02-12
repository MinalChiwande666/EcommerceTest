'use client'
import TextInput from '@/app/component/TextInput/TextInput'
import WrapperContainer from '@/app/component/WrapperContainer/WrapperContainer'
import Link from 'next/link'
import React from 'react'
import {SignUp} from '../../utils/config'
import Axios from '@/app/utils/Axios'
const signup = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const [Email, setEmail] = React.useState<String | any>('')
  const [Phone, setPhone] = React.useState<String>('')
  const [Username, setUsername] = React.useState<String>('')
  const [Password, setPassword] = React.useState<String>('')
  const [ConfirmPassword, setConfirmPassword] = React.useState<String | undefined>('')
  const [selectedOption, setSelectedOption] = React.useState('customer');
  const [ErrEmaiil,setErremail] = React.useState<Boolean|any>(false)
  const [ErrEmailmsg,setEmailErrmsg] = React.useState<String|any>('')
  const [ErrPhone,setErrPhone] = React.useState<Boolean | any>(false)
  const [ErrPhonemsg,setErrPhonemsg] = React.useState<String | any>('')
  const [ErrUsername,setErrUsername] = React.useState<Boolean | any>(false)
  const [ErrUsermsg,setErrUsermsg] = React.useState<String | any>('')
  const [ErrPassword,setErrPassword] = React.useState<Boolean | any>(false)
  const [ErrPasswordmsg,setErrPasswordmsg] = React.useState<String | any>('')
  const [ErrCPassword,setErrCPassword] = React.useState<Boolean | any>(false)
  const [ErrCPasswordmsg,setErrCPasswordmsg] = React.useState<String | any>('')
  const [CheckPassword,setCheckPassword] = React.useState<Boolean | any>(false)
  const handleCheckboxChange = (value: any) => {
    setSelectedOption(value);
  };

  const handleSubmit = React.useCallback(()=>{
    let ct = 0
    if(!emailRegex.test(Email) || Email === ''){
      ct++
      setErremail(true)
      setEmailErrmsg('Please Enter Proper Email')
    }
    if(!Phone || Phone === '')
    {
      ct++
      setErrPhone(true)
      setErrPhonemsg('Please Enter Phone number')
    }
    if(!Username || Username === '')
    {
      ct++
      setErrUsername(true)
      setErrUsermsg('Please Enter Username')
    }
    if(!Password || Password === '')
    {
      ct++
      setErrPassword(true)
      setErrPasswordmsg("Please Enter Password")
    }
    if(!ConfirmPassword || ConfirmPassword === '')
    {
      ct++
      setErrCPassword(true)
      setErrCPasswordmsg('Please Confirm your password')
    }
    if(Password !== ConfirmPassword)
    {
      ct++
      setCheckPassword(true)
    }
    if(ct===0)
    {
      setErremail(false)
      setErrPhone(false)
      setErrUsername(false)
      setErrPassword(false)
      setErrCPassword(false)
      let userObj = {
        username:Username,
        email:Email,
        password:Password,
        phone:Phone,
        role:selectedOption
      }
      SignUp(userObj)
    }
  },[Email,Phone,Username,Password,ConfirmPassword,selectedOption])
  const [isOwner, setisOwner] = React.useState(false)
  return (
    <WrapperContainer>
      <div className='flex flex-col items-center shadow-lg rounded-lg p-4 inset-1 border'>
        <h2 className='text-3xl font-bold underline'>Sign Up</h2>
        <TextInput error={ErrEmaiil} seterror={setErremail} errormsg={ErrEmailmsg} type='email' value={Email} setvalue={setEmail} placholder='Enter your email' />
        <TextInput error={ErrPhone} seterror={setErrPhone} errormsg={ErrPhonemsg} type='number' value={Phone} setvalue={setPhone} placholder='Enter your phone number' />
        <TextInput error={ErrUsername} seterror={setErrUsername} errormsg={ErrUsermsg} type='text' value={Username} setvalue={setUsername} placholder='Enter your Username' />
        <TextInput error={ErrPassword} seterror={setErrPassword} errormsg={ErrPasswordmsg} type='password' value={Password} setvalue={setPassword} placholder='Enter your Password' />
        <TextInput error={ErrCPassword} seterror={setErrCPassword} errormsg={ErrCPasswordmsg} type='password' value={ConfirmPassword} setvalue={setConfirmPassword} placholder='Confirm Password' />
        {
          CheckPassword && <p className='text-red-600 text-[8px] w-full ml-2 mt-1'>Password Dosen't match</p>
        }
        <div className='flex mt-4 flex-row items-center justify-center'>
        <label>
          <input
            type="checkbox"
            value="customer"
            checked={selectedOption === 'customer'}
            onChange={() => handleCheckboxChange('customer')}
            className="mr-2"
          />
          Customer
        </label>

        <label>
          <input
            type="checkbox"
            value="owner"
            checked={selectedOption === 'owner'}
            onChange={() => handleCheckboxChange('owner')}
            className="mx-2"
          />
          Owner
        </label>
        </div>
        <h2 className='flex mt-4'>Already have an account?<Link href={"/pages/login"} className='gap-2 text-blue-600 mx-1 cursor-pointer'>Log In</Link></h2>
        <button onClick={handleSubmit} className="btn mt-4 bg-white/10 rounded-lg w-full p-1">Sign Up</button>
      </div>
    </WrapperContainer>
  )
}

export default signup