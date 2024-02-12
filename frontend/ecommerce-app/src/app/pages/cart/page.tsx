'use client'
import Header from '@/app/component/Header/Header'
import CartCard from '@/app/component/cartCard/CartCard'
import { getDecodeToken } from '@/app/utils/checkToken'
import { getCartPropduct } from '@/app/utils/config'
import React from 'react'

const page = () => {
  const [CartData,setCartData] = React.useState<[]|any>([])
  const checkToken = ()=>{
    let token = JSON.parse(localStorage.getItem('userToken'))
    let decode:any = getDecodeToken(token)
   if(decode?.userdetail?.role === 'customer')
   {
    try{

      getCartPropduct(token,setCartData)
    }catch(e)
    {
       console.log(e)
    }
   }else
   {
    console.log('you are not authorized')
   }
    
  }
  React.useEffect(()=>{
    checkToken()
  },[])
  return (
    <div>
      <Header/>
      <CartCard data={CartData} setData={setCartData}/>
    </div>
  )
}

export default page