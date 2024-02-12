import React, { SetStateAction } from 'react'

interface InputProp{
  type?:String,
  value?:String,
  setvalue:React.Dispatch<React.SetStateAction<any>>,
  placholder?:String,
  error?:boolean,
  errormsg?:String,
  seterror:React.Dispatch<React.SetStateAction<any>>
}
const TextInput = ({type,value,setvalue,placholder,error,errormsg,seterror}:InputProp):React.JSX.Element => {
  return (
    <><input type={type} value={value} onChange={(e: any) => {
      if(e?.target?.value)
      {
        seterror(false)
      }
      setvalue(e?.target?.value)
      
    } } className='focus:border-white bg-transparent mt-4 px-2 text-1xl border border-white/50 rounded-md' placeholder={placholder} />
   {error && <p className='text-red-600 text-[8px] w-full ml-2 mt-1'>{errormsg}</p> }
   
   </>
  )
}

export default TextInput