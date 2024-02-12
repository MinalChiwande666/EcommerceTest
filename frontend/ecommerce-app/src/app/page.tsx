'use client'
import React from 'react'
import { getDecodeToken } from './utils/checkToken'
// @ts-ignore
import Home from './component/customer/Home/Home.tsx'
import store from './redux/store'
import { Provider } from 'react-redux'
import OwnerHome from './component/owner/Home/OwnerHome'
const page = () => {
  const checkOwner = () => {
    let checkowner:any = JSON.parse(localStorage.getItem('userToken'))
    let decode: any = getDecodeToken(checkowner)

    if (decode?.userdetail?.role !== 'owner') {
      return <Home/>
    }
    else {
     return <OwnerHome/>
    }
  }


  return (
    <div>
    <Provider store={store}>
      {checkOwner()}
      </Provider>
    </div>
  )
}

export default page