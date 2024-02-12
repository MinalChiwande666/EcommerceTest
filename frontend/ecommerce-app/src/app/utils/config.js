import axios from 'axios'
import Axios from './axios'
import Link from 'next/link'
import {getDecodeToken} from './checkToken'
const SIGNUP_URI = 'http://localhost:8000/api/auth/signup'
const LOGIN_URI = 'http://localhost:8000/api/auth/login'
const PRODUCT_URI = 'http://localhost:8000/api/product/getProducts'
const ADDCART_URI = 'http://localhost:8000/api/cart/addTocart/'
const GETCART_URI = 'http://localhost:8000/api/cart/getcart'
const REMOVECART_URI = 'http://localhost:8000/api/cart/removecart/'
const PRODUCTBYOWNER_URI = 'http://localhost:8000/api/product/getProducts'
const UPLOADPRODUCT_URI = 'http://localhost:8000/api/product/uploadProduct'
const REMOVEPRODUCT_URI = 'http://localhost:8000/api/product/deleteproduct/'
const UPDATEPRODUCT_URI = 'http://localhost:8000/api/product/updateProduct/'
const GETPRODUCTS_URI = 'http://localhost:8000/api/product/'
const ORDERNOW_URI = 'http://localhost:8000/api/order/buynow/'
const GETORDER_URI = 'http://localhost:8000/api/order/getorder'
export const SignUp = (user)=>{
  axios.post(SIGNUP_URI,user).then((data)=>{
    if(data?.data)
    {
      alert('Succefully Registered')
    }
  }).catch((e)=>{
    alert(e?.response?.data?.message)
  })
}
export const Login = (user,router)=>{
  console.log(user)
   axios.post(LOGIN_URI,user).then((data)=>{
    alert(data?.data?.message)
    getDecodeToken(data?.data?.token)
    localStorage.setItem('userToken',JSON.stringify(data?.data?.token))
    router.push('/')
   }).catch((e)=>{
    alert(e?.response?.data?.message)
   })
}

// fetch all products
export const Allproducts = (setdata)=>{
  axios.get(PRODUCT_URI).then((data)=>{
    // console.log(data?.data,'saashasjajs')
     setdata(data?.data?.data)
  }).catch((e)=>{
    console.log(e,'sbjdsnjdnjs')
  })
}

// get cart items
export const getCartPropduct = (token,setdata)=>{
   axios.post(GETCART_URI,{},{
    headers:{
      Authorization:token
    }
   }).then((data)=>{
    console.log(data?.data)
    setdata(data?.data)
   }).catch((e)=>{
    console.log(e)
   })
}

// add to cart 
export const Addtocart = (pid,token)=>{
 
  axios.post(`http://localhost:8000/api/cart/addTocart/${pid}`,{}, {
    headers:{
      Authorization:token
    }
  }).then((data)=>{
   alert(data?.data?.message)
  }).catch((e)=>{
    console.log(e,'error in cart')
    alert(e?.response?.data?.messgae)
  })
}

// remove from cart 
export const RemoveCart = (pid,token,setdata)=>{
  axios.post(REMOVECART_URI+pid,{},{
    headers:{
      Authorization:token
    }
  }).then((data)=>{
    setdata(JSON.stringify(data?.data))
    alert(data?.data?.message)
  }).catch((e)=>{
    console.log(e)
  })
}

// owner product
export const allProductowner = (token,setdata)=>{
  axios.post(PRODUCTBYOWNER_URI,{},{
   headers:{
    Authorization:token
   }
  }).then((data)=>{
    setdata(data?.data?.ownerproduct)
    console.log(data?.data)
  }).catch((e)=>{
    console.log(e)
  })
}

// upload product

export const uploadproduct = (token,data)=>{
  axios.post(UPLOADPRODUCT_URI,data,{
    headers:{
      Authorization:token
    }
  }).then((data)=>{
    console.log(data?.data)
    alert(data?.data?.message)
  }).catch((e)=>{
    console.log(e)
  })
}

// remove product
export const DeleteProductByOwn = (token,pid)=>{
  axios.delete(REMOVEPRODUCT_URI+pid,{
    headers:{
      Authorization:token
    }
  }).then((data)=>{
   console.log(data?.data)
   alert(data?.data?.message)
  }).catch((e)=>{
    console.log(e)
    alert(e?.response?.data?.message)
  })

}

// Upload Product
export const UpdateProduct = (token,pid,data)=>{
  const updata = {
    title:data.title,
    description:data?.description,
    category:data?.category,
    price:data?.price
  }
  console.log(updata,'update')
  axios.put(UPDATEPRODUCT_URI+pid,updata,{
    headers:{
      Authorization:token
    }
  }).then((data)=>{
    console.log(data?.data)
  }).catch((e)=>{
    console.log(e)
  })
}

// all get product 
export const getAllproducts = (setdata)=>{
  axios.get(GETPRODUCTS_URI).then((data)=>{
    console.log(data?.data)
    setdata(data?.data)
  }).catch((e)=>{
    console.log(e)
  })
}

export const BookNow = (token,pid)=>{
  axios.post(ORDERNOW_URI+pid,{},{
    headers:{
      Authorization:token
    }
  }).then((data)=>{
    console.log(data?.data)
    alert(data.data?.message)
  }).catch((e)=>{
    console.log(e)
    alert(e?.response?.data?.messgae)
  })
}

export const getorder = (token,setdata)=>{
  axios.post(GETORDER_URI,{},{
    headers:{
      Authorization:token
    }
  }).then((data)=>{
    console.log(data?.data)
    setdata(data?.data)
  }).catch((e)=>{
    console.log(e?.response?.data?.message)
  })
} 