'use client'
import React, { useDebugValue, useReducer } from 'react'
import { jwtDecode } from 'jwt-decode'
import { DeleteProductByOwn, allProductowner } from '@/app/utils/config'
import { useDispatch } from 'react-redux'
import { setproduct } from '@/app/redux/UpdateProduct/UpdateProductReducer'
import { useRouter } from 'next/navigation'
const ProductsOwn = () => {
  const router = useRouter()
  const dispatch = useDispatch()
    const [products,setproducts] = React.useState<[]|any>([])
    const getToken = ()=>{
        const token = JSON.parse(localStorage.getItem('userToken'))
        allProductowner(token,setproducts)
    }

    React.useEffect(()=>{
      getToken()
    },[])
    console.log(products)

    const DeleteProduct =(id:any)=>{
      const token = JSON.parse(localStorage.getItem('userToken'))
      DeleteProductByOwn(token,id)
      setTimeout(()=>{
      allProductowner(token,setproducts)
      },500)
    }
    const UpdateProduct = (item:any)=>{
      const token = JSON.parse(localStorage.getItem('userToken'))
      localStorage.setItem('update',JSON.stringify(item))
      router.push('/pages/addproduct')
    }
  return (
    <div className='flex flex-row flex-wrap items-center justify-between'>
        {
            products.length === 0?<h1 className='text-3xl'>Please Add the Product</h1>:(
                products.map((item:any,i:any)=>(
                  <div
                  key={i}
                  className="max-w-xs  mx-5 mt-4 bg-white rounded overflow-hidden shadow-lg">
                  <img className="w-full h-48 object-cover object-center" src={item?.image[0]} alt="Product Image" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item?.title}</div>
                    <p className="text-gray-700 text-base">
                     {item?.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="text-gray-700 font-bold">{item?.price}</span>
                    <button onClick={()=>DeleteProduct(item?._id)} className="bg-red-500 mx-5 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                    <button onClick={()=>UpdateProduct(item)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Update
                    </button>
                  </div>
                </div>
                ))
            )
        }
    </div>
  )
}

export default ProductsOwn